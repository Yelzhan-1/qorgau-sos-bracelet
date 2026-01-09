import type { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={S.pageBg}>
      <main style={S.container}>
        {/* Header */}
        <header style={S.header}>
          <div style={S.brand}>
            <img src="/logo.png" alt="Qorgau SOS Bracelet" style={S.logo} />
            <div>
              <div style={S.brandTitle}>QORGAU SOS Bracelet</div>
              <div style={S.brandSub}>Safety • Travel • Peace of mind</div>
            </div>
          </div>

          <div style={S.headerRight}>
            <div style={S.langGroup}>
              <a href="/ru" style={S.langBtn}>
                RU
              </a>
              <a href="/en" style={{ ...S.langBtn, ...S.langActive }}>
                EN
              </a>
            </div>

            <a href="#demo" style={S.btnPrimary}>
              Demo video
            </a>
            <a href="#contact" style={S.btnGhost}>
              Contact
            </a>
          </div>
        </header>

        {/* Hero */}
        <section style={S.hero} id="top">
          <div style={S.badge}>New • Safety + Travel</div>

          <h1 style={S.h1}>SOS Bracelet — help in one press</h1>

          <p style={S.lead}>
            We’re building a safety bracelet for kids and women who may face danger or violence.
            Pressing the button sends an alert to a paired phone, and vibration helps detect accidental presses
            so the user can cancel a false alarm.
          </p>

          <div style={S.heroBtns}>
            <a href="#mission" style={S.btnPrimary}>
              Our mission
            </a>
            <a href="#tourism" style={S.btnGhost}>
              Safe tourism
            </a>
            <a href="#gallery" style={S.btnGhost}>
              Bracelet photos
            </a>
          </div>

          <p style={S.disclaimer}>
            This project is in development. It does not replace emergency services. In life-threatening situations — call 112.
          </p>
        </section>

        {/* Mission */}
        <section id="mission" style={S.sectionCard}>
          <h2 style={S.h2}>Mission</h2>
          <p style={S.p}>
            To make everyday life and travel across Kazakhstan safer. During trips, people often end up in unfamiliar places,
            with language barriers and no clear plan in stressful situations. We’re building a simple tool that helps send an SOS
            quickly and act with more confidence.
          </p>
        </section>

        {/* How it works */}
        <section style={S.sectionCard}>
          <h2 style={S.h2}>How it works</h2>

          <div style={S.grid}>
            {[
              ["1) Pair", "Pair the bracelet in the app and add trusted contacts."],
              ["2) Travel mode", "Turn on travel mode when you’re on a trip."],
              ["3) SOS press", "Press the button — the bracelet vibrates and starts a cancel timer."],
              ["4) Alert", "If not canceled, an alert is sent to trusted contacts (and location if needed)."],
            ].map(([title, text]) => (
              <div key={title} style={S.smallCard}>
                <div style={S.smallCardTitle}>{title}</div>
                <div style={S.smallCardText}>{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Safe Tourism */}
        <section id="tourism" style={S.sectionCard}>
          <h2 style={S.h2}>Safe Tourism</h2>
          <p style={S.p}>
            Safe tourism isn’t about fear — it’s about preparation. We want travelers to send an SOS quickly even with language barriers,
            pre-set contacts (friends, family, guide, hotel), and follow a clear emergency flow.
          </p>
        </section>

        {/* Demo video */}
        <section id="demo" style={S.sectionCard}>
          <h2 style={S.h2}>Demo video</h2>

          <div style={S.videoBox}>
            <video controls playsInline style={S.video}>
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>

          <p style={S.note}>
            If you don’t have the video yet — upload <b>demo.mp4</b> to the <b>public</b> folder or replace it with a YouTube iframe.
          </p>
        </section>

        {/* Gallery */}
        <section id="gallery" style={S.sectionCard}>
          <h2 style={S.h2}>Gallery</h2>

          <div style={S.grid}>
            {["/bracelet/1.png", "/bracelet/2.png", "/bracelet/3.png"].map((src) => (
              <div key={src} style={S.imageCard}>
                <img src={src} alt="Bracelet" style={S.image} />
              </div>
            ))}
          </div>

          <p style={S.note}>
            Photos should be here: <b>public/bracelet/1.png</b>, <b>2.png</b>, <b>3.png</b>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" style={{ ...S.sectionCard, marginBottom: 22 }}>
          <h2 style={S.h2}>Contact</h2>
          <p style={S.p}>
            Want to partner with us or help the project? Contact us:
            <br />
            <a href="mailto:your-email@example.com" style={S.link}>
              your-email@example.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}

const COLORS = {
  text: "#0F172A",
  muted: "rgba(15, 23, 42, 0.70)",
  border: "rgba(15, 23, 42, 0.12)",
  card: "rgba(255,255,255,0.92)",
  card2: "rgba(255,255,255,0.86)",
  shadow: "0 18px 55px rgba(0,0,0,0.20)",
  shadowSoft: "0 12px 35px rgba(0,0,0,0.12)",
  mint: "#2DD4BF",
  mintDark: "#0F766E",
  softMint: "rgba(45, 212, 191, 0.14)",
  lilac: "rgba(99, 102, 241, 0.12)",
};

const S: Record<string, CSSProperties> = {
  pageBg: {
    minHeight: "100vh",
    padding: "34px 16px",
    background:
      "radial-gradient(900px 600px at 15% 10%, rgba(45, 212, 191, 0.35) 0%, rgba(45, 212, 191, 0) 65%)," +
      "radial-gradient(900px 600px at 85% 15%, rgba(99, 102, 241, 0.22) 0%, rgba(99, 102, 241, 0) 60%)," +
      "linear-gradient(180deg, #062C2A 0%, #041E1C 55%, #031514 100%)",
  },

  container: {
    fontFamily: "system-ui",
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  header: {
    position: "sticky",
    top: 16,
    zIndex: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    padding: "14px 16px",
    borderRadius: 20,
    background: COLORS.card,
    border: `1px solid ${COLORS.border}`,
    backdropFilter: "blur(12px)",
    boxShadow: COLORS.shadowSoft,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 260,
  },

  logo: {
    width: 86,
    height: 86,
    borderRadius: 18,
    objectFit: "cover",
    border: `1px solid ${COLORS.border}`,
    background: "white",
  },

  brandTitle: { fontWeight: 900, fontSize: 18, color: COLORS.text },
  brandSub: { marginTop: 2, fontSize: 13, color: COLORS.muted },

  headerRight: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },

  langGroup: { display: "flex", gap: 8 },

  langBtn: {
    display: "inline-block",
    padding: "8px 10px",
    borderRadius: 12,
    border: `1px solid ${COLORS.border}`,
    textDecoration: "none",
    color: COLORS.text,
    fontWeight: 900,
    fontSize: 13,
    background: "rgba(255,255,255,0.55)",
  },

  langActive: {
    background: `linear-gradient(135deg, ${COLORS.mint} 0%, ${COLORS.mintDark} 100%)`,
    border: `1px solid rgba(45, 212, 191, 0.55)`,
    color: "#052F2B",
    boxShadow: "0 10px 18px rgba(45, 212, 191, 0.22)",
  },

  btnPrimary: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 14,
    background: `linear-gradient(135deg, ${COLORS.mint} 0%, ${COLORS.mintDark} 100%)`,
    color: "#052F2B",
    textDecoration: "none",
    fontWeight: 900,
    boxShadow: "0 10px 18px rgba(45, 212, 191, 0.22)",
    border: "1px solid rgba(45, 212, 191, 0.35)",
  },

  btnGhost: {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.55)",
    color: COLORS.text,
    textDecoration: "none",
    fontWeight: 900,
    border: `1px solid ${COLORS.border}`,
    boxShadow: "none",
  },

  hero: {
    scrollMarginTop: 110,
    padding: 24,
    borderRadius: 22,
    border: `1px solid rgba(255,255,255,0.18)`,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 60%, rgba(255,255,255,0.84) 100%)",
    boxShadow: COLORS.shadow,
    backdropFilter: "blur(10px)",
  },

  badge: {
    display: "inline-block",
    padding: "7px 12px",
    borderRadius: 999,
    background: `linear-gradient(135deg, ${COLORS.softMint} 0%, ${COLORS.lilac} 100%)`,
    border: `1px solid rgba(15, 23, 42, 0.10)`,
    color: COLORS.text,
    fontWeight: 900,
    fontSize: 12,
  },

  h1: {
    margin: "12px 0 0",
    fontSize: 40,
    lineHeight: 1.08,
    letterSpacing: -0.8,
    color: COLORS.text,
  },

  lead: {
    marginTop: 12,
    fontSize: 16.8,
    lineHeight: 1.6,
    color: "rgba(15, 23, 42, 0.86)",
    maxWidth: 860,
  },

  heroBtns: { display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 },

  disclaimer: { marginTop: 12, fontSize: 12.5, color: COLORS.muted },

  sectionCard: {
    scrollMarginTop: 110,
    padding: 22,
    borderRadius: 22,
    background: COLORS.card2,
    border: `1px solid rgba(255,255,255,0.18)`,
    boxShadow: COLORS.shadowSoft,
    backdropFilter: "blur(10px)",
  },

  h2: { margin: "0 0 10px", fontSize: 22, color: COLORS.text },
  p: { margin: 0, fontSize: 16, lineHeight: 1.65, color: "rgba(15, 23, 42, 0.85)", maxWidth: 920 },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 12,
    marginTop: 10,
  },

  smallCard: {
    borderRadius: 18,
    padding: 16,
    background: "rgba(255,255,255,0.82)",
    border: `1px solid rgba(15,23,42,0.10)`,
    boxShadow: "0 10px 22px rgba(2, 6, 23, 0.06)",
  },

  smallCardTitle: { fontWeight: 900, color: COLORS.text },
  smallCardText: { marginTop: 8, color: "rgba(15, 23, 42, 0.80)", lineHeight: 1.55 },

  videoBox: {
    marginTop: 10,
    borderRadius: 18,
    padding: 12,
    background: "rgba(255,255,255,0.82)",
    border: `1px solid rgba(15,23,42,0.10)`,
  },

  video: { width: "100%", borderRadius: 14 },

  imageCard: {
    borderRadius: 18,
    padding: 10,
    background: "rgba(255,255,255,0.82)",
    border: `1px solid rgba(15,23,42,0.10)`,
    boxShadow: "0 10px 22px rgba(2, 6, 23, 0.06)",
  },

  image: { width: "100%", borderRadius: 14, display: "block" },

  note: { marginTop: 10, fontSize: 12.5, color: COLORS.muted },

  link: { color: COLORS.text, fontWeight: 800, textDecoration: "underline" },
};
