/**
 * Server-side OTP derivation — mirrors the n8n Code node algorithm exactly.
 *
 * The OTP is deterministic: `HMAC-SHA256(pepper, "phone-verification-v1|phone|salt|bucket")`
 * truncated to 6 digits via the dynamic-offset method. The same salt + phone
 * + time bucket always yields the same OTP, so verification needs no
 * round-trip to n8n — the server recomputes and compares locally.
 *
 * IMPORTANT: `OTP_PEPPER` is a server-only env var. It must never be exposed
 * to the browser (only the salt is public).
 */

const OTP_PEPPER = process.env.OTP_PEPPER ?? "";
const OTP_WINDOW_SECONDS = 300;
const PURPOSE = "phone-verification-v1";

// ---- Pure JS SHA-256 / HMAC-SHA256 (no external deps) ----

function utf8Bytes(value: string | number): number[] {
  const string = String(value);
  const bytes: number[] = [];

  for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);

    if (code < 0x80) {
      bytes.push(code);
    } else if (code < 0x800) {
      bytes.push(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
    } else if (code >= 0xd800 && code <= 0xdbff) {
      const next = string.charCodeAt(++i);
      code = 0x10000 + ((code & 0x3ff) << 10) + (next & 0x3ff);
      bytes.push(
        0xf0 | (code >> 18),
        0x80 | ((code >> 12) & 0x3f),
        0x80 | ((code >> 6) & 0x3f),
        0x80 | (code & 0x3f),
      );
    } else {
      bytes.push(
        0xe0 | (code >> 12),
        0x80 | ((code >> 6) & 0x3f),
        0x80 | (code & 0x3f),
      );
    }
  }

  return bytes;
}

function rotateRight(value: number, amount: number): number {
  return (value >>> amount) | (value << (32 - amount));
}

function sha256(inputBytes: number[]): number[] {
  const constants = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];

  const hash = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ];

  const bytes = [...inputBytes];
  const bitLength = bytes.length * 8;

  bytes.push(0x80);
  while (bytes.length % 64 !== 56) bytes.push(0);

  const high = Math.floor(bitLength / 0x100000000);
  const low = bitLength >>> 0;

  bytes.push(
    (high >>> 24) & 0xff, (high >>> 16) & 0xff, (high >>> 8) & 0xff, high & 0xff,
    (low >>> 24) & 0xff, (low >>> 16) & 0xff, (low >>> 8) & 0xff, low & 0xff,
  );

  for (let offset = 0; offset < bytes.length; offset += 64) {
    const words = new Array<number>(64);
    for (let i = 0; i < 16; i++) {
      const index = offset + i * 4;
      words[i] =
        ((bytes[index] << 24) | (bytes[index + 1] << 16) | (bytes[index + 2] << 8) | bytes[index + 3]) >>>
        0;
    }
    for (let i = 16; i < 64; i++) {
      const s0 = rotateRight(words[i - 15], 7) ^ rotateRight(words[i - 15], 18) ^ (words[i - 15] >>> 3);
      const s1 = rotateRight(words[i - 2], 17) ^ rotateRight(words[i - 2], 19) ^ (words[i - 2] >>> 10);
      words[i] = (words[i - 16] + s0 + words[i - 7] + s1) >>> 0;
    }

    let [a, b, c, d, e, f, g, h] = hash;

    for (let i = 0; i < 64; i++) {
      const sum1 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 = (h + sum1 + choice + constants[i] + words[i]) >>> 0;
      const sum0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (sum0 + majority) >>> 0;
      h = g; g = f; f = e; e = (d + temp1) >>> 0; d = c; c = b; b = a; a = (temp1 + temp2) >>> 0;
    }

    hash[0] = (hash[0] + a) >>> 0;
    hash[1] = (hash[1] + b) >>> 0;
    hash[2] = (hash[2] + c) >>> 0;
    hash[3] = (hash[3] + d) >>> 0;
    hash[4] = (hash[4] + e) >>> 0;
    hash[5] = (hash[5] + f) >>> 0;
    hash[6] = (hash[6] + g) >>> 0;
    hash[7] = (hash[7] + h) >>> 0;
  }

  const output: number[] = [];
  for (const word of hash) {
    output.push(
      (word >>> 24) & 0xff, (word >>> 16) & 0xff, (word >>> 8) & 0xff, word & 0xff,
    );
  }
  return output;
}

function hmacSha256(secret: string, message: string): number[] {
  const blockSize = 64;
  let key = utf8Bytes(secret);
  if (key.length > blockSize) key = sha256(key);
  while (key.length < blockSize) key.push(0);

  const innerPad = key.map((byte) => byte ^ 0x36);
  const outerPad = key.map((byte) => byte ^ 0x5c);

  const innerHash = sha256([...innerPad, ...utf8Bytes(message)]);
  return sha256([...outerPad, ...innerHash]);
}

// ---- OTP logic ----

function normalizePhone(value: unknown): string {
  return String(value ?? "").replace(/\D/g, "");
}

function normalizeSalt(value: unknown): string {
  return String(value ?? "").trim();
}

function generateOtp(phone: string, salt: string, bucket: number): string {
  const message = `${PURPOSE}|${phone}|${salt}|${bucket}`;
  const digest = hmacSha256(OTP_PEPPER, message);

  const offset = digest[digest.length - 1] & 0x0f;
  const number =
    ((digest[offset] & 0x7f) << 24) |
    ((digest[offset + 1] & 0xff) << 16) |
    ((digest[offset + 2] & 0xff) << 8) |
    (digest[offset + 3] & 0xff);

  return String(number % 1000000).padStart(6, "0");
}

function safeCompare(first: unknown, second: unknown): boolean {
  const a = String(first);
  const b = String(second);
  if (a.length !== b.length) return false;
  let difference = 0;
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return difference === 0;
}

/** Compute the current + previous window OTPs for a phone/salt pair. */
export function computeOtp(phone: unknown, salt: unknown): {
  current: string;
  previous: string;
  expiresInSeconds: number;
} {
  if (!OTP_PEPPER) throw new Error("OTP_PEPPER is not configured.");
  const p = normalizePhone(phone);
  const s = normalizeSalt(salt);
  const currentBucket = Math.floor(Date.now() / 1000 / OTP_WINDOW_SECONDS);
  return {
    current: generateOtp(p, s, currentBucket),
    previous: generateOtp(p, s, currentBucket - 1),
    expiresInSeconds: OTP_WINDOW_SECONDS,
  };
}

/** Verify a user-entered OTP against the deterministic derivation. */
export function verifyOtpLocally(
  phone: unknown,
  salt: unknown,
  receivedOtp: unknown,
): boolean {
  if (!/^\d{6}$/.test(String(receivedOtp ?? ""))) return false;
  const { current, previous } = computeOtp(phone, salt);
  return safeCompare(receivedOtp, current) || safeCompare(receivedOtp, previous);
}
