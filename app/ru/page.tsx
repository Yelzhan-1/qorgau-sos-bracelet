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
              <a href="/ru" style={{ ...S.langBtn, ...S.langActive }}>
                RU
              </a>
              <a href="/en" style={S.langBtn}>
                EN
              </a>
            </div>

            <a href="#demo" style={S.btnPrimary}>
              Видео-демо
            </a>
            <a href="#contact" style={S.btnGhost}>
              Контакты
            </a>
          </div>
        </header>

        {/* Hero */}
        <section style={S.hero} id="top">
          <div style={S.badge}>New • Safety + Travel</div>

          <h1 style={S.h1}>SOS Bracelet — помощь в один клик</h1>

          <p style={S.lead}>
            Мы создаём браслет для безопасности детей и девушек, которые могут столкнуться с опасностью и насилием.
            Нажатие кнопки отправляет сигнал на привязанный телефон, а вибрация помогает заметить случайное нажатие
            и отменить ложный вызов.
          </p>

          <div style={S.heroBtns}>
            <a href="#mission" style={S.btnPrimary}>
              Наша миссия
            </a>
            <a href="#tourism" style={S.btnGhost}>
              Safe tourism
            </a>
            <a href="#models" style={S.btnGhost}>
              Модели браслета
            </a>
          </div>

          <p style={S.disclaimer}>
            Проект в разработке. Не заменяет экстренные службы. В случае угрозы жизни — 112.
          </p>
        </section>

        {/* Mission */}
        <section id="mission" style={S.sectionCard}>
          <h2 style={S.h2}>Миссия</h2>
          <p style={S.p}>
            Сделать повседневную жизнь и путешествия по Казахстану безопаснее. В поездках люди часто оказываются
            в незнакомом месте, с языковым барьером и без понятного плана действий. Мы создаём простой инструмент,
            который помогает быстро отправить сигнал тревоги и действовать спокойнее.
          </p>
        </section>

        {/* How it works */}
        <section style={S.sectionCard}>
          <h2 style={S.h2}>Как это работает</h2>

          <div style={S.grid}>
            {[
              ["1) Pair", "Подключи браслет в приложении и добавь доверенные контакты."],
              ["2) Travel mode", "Включи режим поездки (если ты путешествуешь)."],
              ["3) SOS press", "Нажми кнопку — браслет вибрирует и запускает таймер отмены."],
              ["4) Alert", "Если не отменить — сигнал уходит доверенным людям (и, при необходимости, геолокация)."],
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
            Безопасный туризм — это не страх, а подготовка. Мы хотим, чтобы турист мог быстро отправить SOS даже при
            языковом барьере, заранее добавить контакты (друзья, родители, гид, отель) и иметь понятный сценарий действий.
          </p>
        </section>

        {/* Demo video */}
        <section id="demo" style={S.sectionCard}>
          <h2 style={S.h2}>Видео-демо</h2>

          <div style={S.videoBox}>
            <video controls playsInline preload="metadata" style={S.video}>
              <source src="/demo.mp4" type="video/mp4" />
            </video>
          </div>

          <p style={S.note}>
            Если видео не показывает — проверь, что <b>demo.mp4</b> лежит в <b>/public</b> и сохранён как H.264 (mp4).
          </p>
        </section>

        {/* Models (NEW instead of Gallery) */}
        <section id="models" style={S.sectionCard}>
          <h2 style={S.h2}>Модели браслета</h2>

          <div style={S.modelsGrid}>
            {/* Budget */}
            <div style={S.modelCard}>
              <div style={S.modelTop}>
                <div>
                  <div style={S.modelTitle}>Бюджетный</div>
                  <div style={S.modelSubtitle}>Базовая безопасность</div>
                </div>
                <div style={S.pricePill}>25 000 ₸</div>
              </div>

              <div style={S.modelImageWrap}>
                <img src="/bracelet/2.png" alt="Бюджетный браслет" style={S.modelImage} />
              </div>

              <div style={S.modelSpec}>
                <div style={S.specRow}>
                  <div style={S.specLabel}>Функции</div>
                  <div style={S.chips}>
                    {["SOS", "GPS", "Звонки"].map((t) => (
                      <span key={t} style={S.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={S.specRow}>
                  <div style={S.specLabel}>Материал</div>
                  <div style={S.specText}>Корпус из силикона</div>
                </div>
              </div>
            </div>

            {/* Premium */}
            <div style={S.modelCard}>
              <div style={S.modelTop}>
                <div>
                  <div style={S.modelTitle}>Премиум</div>
                  <div style={S.modelSubtitle}>Максимальная защита + функции</div>
                </div>
                <div style={S.pricePill}>42 000 ₸</div>
              </div>

              <div style={S.modelImageWrap}>
                <img src="/bracelet/1.png" alt="Премиум браслет" style={S.modelImage} />
              </div>

              <div style={S.modelSpec}>
                <div style={S.specRow}>
                  <div style={S.specLabel}>Функции</div>
                  <div style={S.chips}>
                    {[
                      "Всё из Бюджетного",
                      "Мониторинг здоровья",
                      "Геозоны",
                      "История маршрутов",
                      "Автономная работа",
                    ].map((t) => (
                      <span key={t} style={S.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={S.specRow}>
                  <div style={S.specLabel}>Материал</div>
                  <div style={S.specText}>Корпус из металла</div>
                </div>
              </div>
            </div>
          </div>

          <p style={S.note}>
            Фото моделей должны лежать в <b>public/bracelet/1.png</b> и <b>public/bracelet/2.png</b> (если хочешь —
            можешь поменять местами).
          </p>
        </section>

        {/* Contact */}
        <section id="contact" style={{ ...S.sectionCard, marginBottom: 22 }}>
          <h2 style={S.h2}>Контакты</h2>
          <p style={S.p}>
            Хочешь стать партнёром/помочь проекту? Напиши нам:
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

  note: { marginTop: 10, fontSize: 12.5, color: COLORS.muted },

  link: { color: COLORS.text, fontWeight: 800, textDecoration: "underline" },

  /* ===== NEW: Models styles ===== */
  modelsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 14,
    marginTop: 12,
  },

  modelCard: {
    borderRadius: 20,
    padding: 16,
    background: "rgba(255,255,255,0.82)",
    border: `1px solid rgba(15,23,42,0.10)`,
    boxShadow: "0 10px 22px rgba(2, 6, 23, 0.06)",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  modelTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },

  modelTitle: { fontWeight: 950, fontSize: 18, color: COLORS.text },
  modelSubtitle: { marginTop: 4, fontSize: 13, color: COLORS.muted, fontWeight: 700 },

  pricePill: {
    padding: "8px 10px",
    borderRadius: 999,
    fontWeight: 950,
    fontSize: 13,
    color: "#052F2B",
    background: `linear-gradient(135deg, ${COLORS.mint} 0%, ${COLORS.mintDark} 100%)`,
    border: "1px solid rgba(45, 212, 191, 0.35)",
    boxShadow: "0 10px 18px rgba(45, 212, 191, 0.20)",
    whiteSpace: "nowrap",
  },

  modelImageWrap: {
    borderRadius: 18,
    border: `1px solid rgba(15,23,42,0.10)`,
    background: "rgba(255,255,255,0.9)",
    padding: 10,
  },

  modelImage: {
    width: "100%",
    height: 220,
    objectFit: "contain",
    display: "block",
    borderRadius: 14,
  },

  modelSpec: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  specRow: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },

  specLabel: {
    fontSize: 13,
    fontWeight: 900,
    color: COLORS.text,
  },

  specText: {
    fontSize: 14,
    fontWeight: 800,
    color: "rgba(15, 23, 42, 0.82)",
  },

  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    padding: "7px 10px",
    borderRadius: 999,
    fontSize: 12.5,
    fontWeight: 850,
    color: "rgba(15, 23, 42, 0.82)",
    border: `1px solid rgba(15, 23, 42, 0.12)`,
    background: "rgba(255,255,255,0.65)",
  },
};
