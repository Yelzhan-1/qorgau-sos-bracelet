export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui", padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo.png" alt="Qorgau SOS Bracelet" style={{ width: 144, height: 144, borderRadius: 16, objectFit: "cover" }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 18 }}>QORGAU SOS Bracelet</div>
            <div style={{ opacity: 0.7, fontSize: 13 }}>Safety • Travel • Peace of mind</div>
          </div>
        </div>

       <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
  <div style={{ display: "flex", gap: 8 }}>
    <a href="/ru" style={langActive}>RU</a>
    <a href="/en" style={langBtn}>EN</a>
  </div>

  <a href="#demo" style={btnStyle}>Video-Demo</a>
  <a href="#contact" style={btnStyleOutline}>Contact</a>
</div>

      </header>

      {/* Hero */}
      <section style={{ marginTop: 28, padding: 20, border: "1px solid #eee", borderRadius: 16 }}>
        <h1 style={{ margin: 0, fontSize: 34, lineHeight: 1.1 }}>
          SOS Bracelet — help in one press
        </h1>
        <p style={{ marginTop: 12, fontSize: 16, opacity: 0.85, maxWidth: 800 }}>
          We’re building a safety bracelet for kids and women who may face danger or violence. Pressing the button sends an alert to a paired phone, and vibration helps detect accidental presses so the user can cancel a false alarm.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
          <a href="#mission" style={btnStyle}>Our Misson</a>
          <a href="#tourism" style={btnStyleOutline}>Safe tourism</a>
          <a href="#gallery" style={btnStyleOutline}>Photo of the bracelet</a>
        </div>

        <p style={{ marginTop: 14, fontSize: 12, opacity: 0.7 }}>
          This project is under development. It does not replace emergency services. In case of life-threatening emergency, call 112.
        </p>
      </section>

      {/* Mission */}
      <section id="mission" style={{ marginTop: 26 }}>
        <h2 style={h2}>Misson</h2>
        <p style={p}>
          To make everyday life and travel across Kazakhstan safer. During trips, people often end up in unfamiliar places, with language barriers and no clear plan in stressful situations. We’re building a simple tool that helps send an SOS quickly and act with more confidence.
        </p>
      </section>

      {/* How it works */}
      <section style={{ marginTop: 22 }}>
        <h2 style={h2}>How it works</h2>
        <div style={grid}>
          {[
            ["1) Pair", "Pair the bracelet in the app and add trusted contacts.."],
            ["2) Travel mode", "Turn on travel mode when you’re on a trip."],
            ["3) SOS press", "Press the button — the bracelet vibrates and starts a cancel timer."],
            ["4) Alert", "If not canceled, an alert is sent to trusted contacts (and location if needed)."],
          ].map(([title, text]) => (
            <div key={title} style={card}>
              <div style={{ fontWeight: 800 }}>{title}</div>
              <div style={{ marginTop: 8, opacity: 0.85 }}>{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Safe Tourism */}
      <section id="tourism" style={{ marginTop: 22 }}>
        <h2 style={h2}>Safe Tourism</h2>
        <p style={p}>
          Safe tourism isn't about fear, it's about preparation. We want tourists to be able to quickly send an SOS even if there's a language barrier, add contacts (friends, parents, guides, hotels) in advance, and have a clear plan of action.
        </p>
      </section>

      {/* Demo video */}
      <section id="demo" style={{ marginTop: 22 }}>
        <h2 style={h2}>Demo-Video</h2>
        <div style={{ border: "1px solid #eee", borderRadius: 16, padding: 12 }}>
          {/* Если нет demo.mp4 — залей или замени на YouTube iframe */}
          <video controls playsInline style={{ width: "100%", borderRadius: 12 }}>
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ marginTop: 22 }}>
        <h2 style={h2}>Gallery</h2>
        <div style={grid}>
          {["/bracelet/1.png", "/bracelet/2.png", "/bracelet/3.png"].map((src) => (
            <div key={src} style={{ ...card, padding: 10 }}>
              <img src={src} alt="Bracelet" style={{ width: "100%", borderRadius: 12 }} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          If you have a different number of photos, just add/remove rows in the array.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{ marginTop: 22, marginBottom: 40 }}>
        <h2 style={h2}>Contacts</h2>
        <p style={p}>
          Want to become a partner or help the project? Contact us:
          <br />
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
      </section>
    </main>
  );
}

const h2: React.CSSProperties = { margin: "0 0 10px", fontSize: 22 };
const p: React.CSSProperties = { margin: 0, fontSize: 16, opacity: 0.85, maxWidth: 900 };

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 12,
};

const card: React.CSSProperties = {
  border: "1px solid #eee",
  borderRadius: 16,
  padding: 14,
};

const btnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 12,
  background: "#111",
  color: "#fff",
  textDecoration: "none",
  fontWeight: 700,
};

const btnStyleOutline: React.CSSProperties = {
  ...btnStyle,
  background: "transparent",
  color: "#111",
  border: "1px solid #ddd",
};

const langBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  textDecoration: "none",
  color: "#111",
  fontWeight: 800,
  fontSize: 13,
};

const langActive: React.CSSProperties = {
  ...langBtn,
  background: "#111",
  color: "#fff",
  border: "1px solid #111",
};

