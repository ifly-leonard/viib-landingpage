export interface ViivOgCardProps {
  title: string;
  credit?: string;
  logo?: string;
}

/**
 * VIIV-branded Open Graph card on a light background.
 *
 * Matches the site theme: ivory/white canvas, navy text, gold accent bar,
 * and the shield logo. Inline styles only, so it renders in both Satori
 * (`next/og`) and the browser.
 */
export const ViivOgCard = ({
  title,
  credit = "VIIV — Varman Institute of Venture Building",
  logo = "",
}: ViivOgCardProps) => (
  <div
    style={{
      backgroundColor: "#f5f3ee", // --vil-ivory
      color: "#1f3149", // --vil-navy
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "72px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Gold accent bar at top */}
    <div
      style={{
        backgroundColor: "#f7bd44", // --vil-gold
        height: "14px",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    />

    {/* Subtle corner ornament */}
    <div
      style={{
        border: "1px solid rgba(31,49,73,0.10)",
        borderRadius: "24px",
        inset: "28px",
        position: "absolute",
      }}
    />

    {/* Top row: logo + site name */}
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "20px",
        position: "relative",
      }}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt=""
          height={96}
          src={logo}
          width={96}
          style={{ objectFit: "contain" }}
        />
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
        }}
      >
        <div
          style={{
            color: "#1f3149",
            fontSize: "34px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          VIIV
        </div>
        <div
          style={{
            color: "rgba(31,49,73,0.55)",
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Varman Institute of Venture Building
        </div>
      </div>
    </div>

    {/* Main title */}
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#f7bd44",
          borderRadius: "999px",
          height: "10px",
          marginBottom: "32px",
          width: "64px",
        }}
      />
      <div
        style={{
          color: "#1f3149",
          display: "flex",
          flexDirection: "column",
          fontSize: "64px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.08,
          maxWidth: "880px",
          textWrap: "balance",
        }}
      >
        {title}
      </div>
    </div>

    {/* Bottom row: credit */}
    <div
      style={{
        alignItems: "center",
        borderTop: "1px solid rgba(31,49,73,0.12)",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "24px",
        position: "relative",
      }}
    >
      <div
        style={{
          color: "rgba(31,49,73,0.6)",
          fontSize: "22px",
          fontWeight: 600,
        }}
      >
        {credit}
      </div>
      <div
        style={{
          color: "#bb8806", // --vil-gold-dim
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Chennai · India
      </div>
    </div>
  </div>
);
