export interface ViivOgCardProps {
  title: string;
  subtitle?: string;
  highlight?: string;
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
  subtitle,
  highlight,
  credit = "VIIV — Varman Institute of Innovation and Venture Building",
  logo = "",
}: ViivOgCardProps) => (
  <div
    style={{
      backgroundColor: "#f5f3ee", // --vil-ivory
      color: "#1f3149", // --vil-navy
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "56px 64px",
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
          height={84}
          src={logo}
          width={84}
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
            fontSize: "30px",
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
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Varman Institute of Innovation and Venture Building
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
          height: "8px",
          marginBottom: "20px",
          width: "52px",
        }}
      />
      <div
        style={{
          color: "#1f3149",
          display: "flex",
          flexDirection: "column",
          fontSize: "52px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.06,
          maxWidth: "880px",
          textWrap: "balance",
        }}
      >
        {title}
      </div>

      {subtitle ? (
        <div
          style={{
            color: "rgba(31,49,73,0.72)",
            display: "flex",
            flexDirection: "column",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
            marginTop: "18px",
            maxWidth: "820px",
            textWrap: "balance",
          }}
        >
          {subtitle}
        </div>
      ) : null}

      {highlight ? (
        <div
          style={{
            alignItems: "center",
            alignSelf: "flex-start",
            backgroundColor: "#f7bd44",
            color: "#1f3149",
            display: "flex",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "0.01em",
            marginTop: "24px",
            padding: "12px 22px",
          }}
        >
          {highlight}
        </div>
      ) : null}
    </div>

    {/* Bottom row: credit */}
    <div
      style={{
        alignItems: "center",
        borderTop: "1px solid rgba(31,49,73,0.12)",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "18px",
        position: "relative",
      }}
    >
      <div
        style={{
          color: "rgba(31,49,73,0.6)",
          fontSize: "19px",
          fontWeight: 600,
        }}
      >
        {credit}
      </div>
      <div
        style={{
          color: "#bb8806", // --vil-gold-dim
          fontSize: "16px",
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
