export default function Home() {
  return (
   <main
  style={{
    fontFamily: "system-ui",
    padding: 24,
    maxWidth: 1100,
    margin: "0 auto",
    background: `radial-gradient(1200px 600px at 10% 0%, ${COLORS.softMint} 0%, ${COLORS.bg} 55%)`,
  }}
>

      {/* Header */}
      <header
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    position: "sticky",
    top: 0,
    zIndex: 10,
    padding: "14px 0",
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(10px)",
    borderBottom: `1px solid ${COLORS.border}`,
  }}
>

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
      <section
  style={{
    marginTop: 28,
    padding: 22,
    borderRadius: 18,
    border: `1px solid ${COLORS.border}`,
    background: `linear-gradient(180deg, ${COLORS.softMint} 0%, #ffffff 60%)`,
    boxShadow: "0 12px 30px rgba(2, 6, 23, 0.06)",
  }}
>
  <div style={badge}>New • Safety + Travel</div>

  <h1 style={{ margin: "10px 0 0", fontSize: 38, lineHeight: 1.1, letterSpacing: -0.6 }}>
    SOS Bracelet — помощь в один клик
  </h1>

  <p style={{ marginTop: 12, fontSize: 16.5, opacity: 0.9, maxWidth: 820, lineHeight: 1.55 }}>
    Мы создаём браслет для безопасности детей и девушек, которые могут столкнуться с опасностью и насилием.
    Нажатие кнопки отправляет сигнал на привязанный телефон, а вибрация помогает заметить случайное нажатие
    и отменить ложный вызов.
  </p>

  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
    <a href="#mission" style={btnStyle}>Наша миссия</a>
    <a href="#tourism" style={btnStyleOutline}>Safe tourism</a>
    <a href="#gallery" style={btnStyleOutline}>Фото браслета</a>
  </div>

  <p style={{ marginTop: 14, fontSize: 12.5, opacity: 0.7 }}>
    Проект в разработке. Не заменяет экстренные службы. В случае угрозы жизни — 112.
  </p>
</section>


      {/* Mission */}
      <section id="mission" style={{ marginTop: 26 }}>
        <h2 style={h2}>Миссия</h2>
        <p style={p}>
          Сделать повседневную жизнь и путешествия по Казахстану безопаснее. В поездках люди часто оказываются
          в незнакомом месте, с языковым барьером и без понятного плана действий. Мы создаём простой инструмент,
          который помогает быстро отправить сигнал тревоги и действовать спокойнее.
        </p>
      </section>

      {/* How it works */}
      <section style={{ marginTop: 22 }}>
        <h2 style={h2}>Как это работает</h2>
        <div style={grid}>
          {[
            ["1) Pair", "Подключи браслет в приложении и добавь доверенные контакты."],
            ["2) Travel mode", "Включи режим поездки (если ты путешествуешь)."],
            ["3) SOS press", "Нажми кнопку — браслет вибрирует и запускает таймер отмены."],
            ["4) Alert", "Если не отменить — сигнал уходит доверенным людям (и, при необходимости, геолокация)."],
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
          Безопасный туризм — это не страх, а подготовка. Мы хотим, чтобы турист мог быстро отправить SOS даже при
          языковом барьере, заранее добавить контакты (друзья, родители, гид, отель) и иметь понятный сценарий действий.
        </p>
      </section>

      {/* Demo video */}
      <section id="demo" style={{ marginTop: 22 }}>
        <h2 style={h2}>Видео-демо</h2>
        <div style={{ border: `1px solid ${COLORS.border}`
, borderRadius: 16, padding: 12 }}>
          {/* Если нет demo.mp4 — залей или замени на YouTube iframe */}
          <video controls playsInline style={{ width: "100%", borderRadius: 12 }}>
            <source src="/demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" style={{ marginTop: 22 }}>
        <h2 style={h2}>Галерея</h2>
        <div style={grid}>
          {["/bracelet/1.png", "/bracelet/2.png", "/bracelet/3.png"].map((src) => (
            <div key={src} style={{ ...card, padding: 10 }}>
              <img src={src} alt="Bracelet" style={{ width: "100%", borderRadius: 12 }} />
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, opacity: 0.7 }}>
          Если у тебя другое количество фото — просто добавь/удали строки в массиве.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" style={{ marginTop: 22, marginBottom: 40 }}>
        <h2 style={h2}>Контакты</h2>
        <p style={p}>
          Хочешь стать партнёром/помочь проекту? Напиши нам:
          <br />
          <a href="mailto:your-email@example.com">your-email@example.com</a>
        </p>
      </section>
    </main>
  );
}
const COLORS = {
  text: "#0F172A",
  border: "#E5E7EB",
  mint: "#2DD4BF",
  mintDark: "#14B8A6",
  bg: "#FFFFFF",
  softMint: "#ECFEFF",
};
const h2: React.CSSProperties = { margin: "0 0 10px", fontSize: 22 };
const p: React.CSSProperties = { margin: 0, fontSize: 16, opacity: 0.85, maxWidth: 900 };

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 12,
};

const card: React.CSSProperties = {
  border: `1px solid ${COLORS.border}`,
  borderRadius: 18,
  padding: 16,
  background: "#fff",
  boxShadow: "0 10px 22px rgba(2, 6, 23, 0.05)",
};


const btnStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "10px 14px",
  borderRadius: 14,
  background: `linear-gradient(135deg, ${COLORS.mint} 0%, ${COLORS.mintDark} 100%)`,
  color: "#052F2B",
  textDecoration: "none",
  fontWeight: 900,
  boxShadow: "0 10px 18px rgba(20, 184, 166, 0.25)",
};



const btnStyleOutline: React.CSSProperties = {
  ...btnStyle,
  background: "rgba(255,255,255,0.7)",
  color: COLORS.text,
  border: `1px solid ${COLORS.border}`,
  boxShadow: "none",
};



const langBtn: React.CSSProperties = {
  display: "inline-block",
  padding: "8px 10px",
  borderRadius: 10,
  border: `1px solid ${COLORS.border}`,
  textDecoration: "none",
  color: COLORS.text,
  fontWeight: 800,
  fontSize: 13,
  background: "transparent",
};

const langActive: React.CSSProperties = {
  ...langBtn,
  background: COLORS.mint,
  color: COLORS.text,
  border: `1px solid ${COLORS.mint}`,
};

const badge: React.CSSProperties = {
  display: "inline-block",
  padding: "6px 10px",
  borderRadius: 999,
  background: "rgba(45, 212, 191, 0.16)",
  border: "1px solid rgba(45, 212, 191, 0.35)",
  color: "#0B3B35",
  fontWeight: 800,
  fontSize: 12,
};


