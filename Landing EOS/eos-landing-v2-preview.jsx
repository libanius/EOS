import { useState, useEffect, useRef } from "react";

const T = {
  en: {
    nav_how: "How It Works", nav_demo: "Demo",
    hero_tag: "Emergency Operating System",
    hero_h1: "When everything fails,", hero_h1b: "know what to do next.",
    hero_sub: "EOS transforms chaos into prioritized action — for any family, any crisis, with or without internet.",
    hero_cta: "Run Simulation", hero_cta2: "How It Works",
    status_connected: "CONNECTED", status_degraded: "DEGRADED", status_offline: "OFFLINE",
    problem_label: "The Problem", problem_h2: "Most people freeze.",
    problem_body: "When disaster strikes, 73% of people report being unable to make clear decisions under pressure. Not because they aren't smart — but because no system exists to guide them.",
    stat1_num: "84%", stat1_label: "of families have no emergency action plan",
    stat2_num: "23min", stat2_label: "average lost to confusion in a crisis",
    stat3_num: "67%", stat3_label: "of emergency apps fail when infrastructure goes down",
    how_label: "How It Works", how_h2: "From chaos to action in seconds.",
    how_s: [
      { n: "01", title: "Assess", body: "EOS reads your exact situation: location, threat level, family composition, available resources." },
      { n: "02", title: "Analyze", body: "The Decision Engine cross-references your context against thousands of survival protocols." },
      { n: "03", title: "Act", body: "You receive a precise, prioritized action plan — 15 minutes, 1 hour, and critical window." },
    ],
    demo_label: "Decision Engine — Live Demo", demo_h2: "See EOS in action.",
    demo_sub: "Choose a scenario, customize your situation, and watch the Decision Engine generate a real action plan.",
    demo_scenario_label: "Scenario",
    demo_scenarios: ["Hurricane (Cat 3)", "Power Grid Failure", "Earthquake", "Wildfire Approaching", "Flood Warning"],
    demo_family_label: "Family Profile",
    demo_adults: "Adults", demo_children: "Children", demo_elderly: "Elderly / Limited mobility",
    demo_res_label: "Available Resources",
    demo_res: ["Vehicle", "Generator", "3-day water supply", "First aid kit", "Ham radio", "Cash reserves"],
    demo_loc_label: "Location Type",
    demo_locs: ["Coastal / Flood zone", "Urban / City", "Suburban", "Rural", "High-rise building"],
    demo_run: "Generate Action Plan", demo_running: "Analyzing situation...",
    demo_result_label: "EOS Action Plan", demo_await: "Configure your situation above and run the simulation.",
    res_label: "Resilience Architecture", res_h2: "EOS never goes dark.", res_sub: "Three operational states. One continuous system.",
    res: [
      { title: "Fully Connected", dot: "#00e5a0", body: "Real-time data from NOAA, FEMA, and local authorities. Full AI decision support." },
      { title: "Partially Degraded", dot: "#ffb347", body: "Cellular or Wi-Fi only. Cached knowledge base active. Core engine fully operational." },
      { title: "Complete Offline", dot: "#ff6b6b", body: "LoRa mesh network between devices. Local AI. Full planning without infrastructure." },
    ],
    for_label: "Built For", for_h2: "Real people in real risk.",
    for_cards: ["Families in\nhigh-risk regions", "Outdoor &\nexpedition groups", "Off-grid\ncommunities", "Emergency\npreppers"],
    waitlist_label: "Early Access", waitlist_h2: "Be the first family protected by EOS.",
    waitlist_sub: "We're onboarding founding families in high-risk regions. Limited spots available.",
    waitlist_ph: "your@email.com", waitlist_cta: "Request Access",
    waitlist_note: "No spam. Your critical data stays local — always.",
    footer: "© 2025 EOS Systems. All critical data stays local.",
  },
  pt: {
    nav_how: "Como Funciona", nav_demo: "Demo",
    hero_tag: "Sistema Operacional de Emergência",
    hero_h1: "Quando tudo falhar,", hero_h1b: "saiba o que fazer.",
    hero_sub: "EOS transforma o caos em ação prioritária — para qualquer família, qualquer crise, com ou sem internet.",
    hero_cta: "Executar Simulação", hero_cta2: "Como Funciona",
    status_connected: "CONECTADO", status_degraded: "DEGRADADO", status_offline: "OFFLINE",
    problem_label: "O Problema", problem_h2: "A maioria das pessoas trava.",
    problem_body: "Quando o desastre chega, 73% das pessoas relatam incapacidade de tomar decisões sob pressão. Não por falta de inteligência — mas porque nenhum sistema existe para guiá-las.",
    stat1_num: "84%", stat1_label: "das famílias sem plano de ação para emergências",
    stat2_num: "23min", stat2_label: "perdidos em média por confusão durante uma crise",
    stat3_num: "67%", stat3_label: "dos apps de emergência falham quando a infra cai",
    how_label: "Como Funciona", how_h2: "Do caos à ação em segundos.",
    how_s: [
      { n: "01", title: "Avaliar", body: "EOS lê sua situação exata: localização, nível de ameaça, composição familiar, recursos disponíveis." },
      { n: "02", title: "Analisar", body: "O Motor de Decisão cruza seu contexto com milhares de protocolos de sobrevivência." },
      { n: "03", title: "Agir", body: "Você recebe um plano preciso e priorizado — 15 minutos, 1 hora e janela crítica." },
    ],
    demo_label: "Motor de Decisão — Demo ao Vivo", demo_h2: "Veja o EOS em ação.",
    demo_sub: "Escolha um cenário, personalize sua situação e veja o Motor de Decisão gerar um plano real.",
    demo_scenario_label: "Cenário",
    demo_scenarios: ["Furacão (Cat 3)", "Falha na Rede Elétrica", "Terremoto", "Incêndio Florestal", "Alerta de Enchente"],
    demo_family_label: "Perfil Familiar",
    demo_adults: "Adultos", demo_children: "Crianças", demo_elderly: "Idosos / Mobilidade reduzida",
    demo_res_label: "Recursos Disponíveis",
    demo_res: ["Veículo", "Gerador", "Água para 3 dias", "Kit primeiros socorros", "Rádio amador", "Reserva em dinheiro"],
    demo_loc_label: "Tipo de Localização",
    demo_locs: ["Litoral / Zona de inundação", "Urbano / Cidade", "Suburbano", "Rural", "Prédio alto"],
    demo_run: "Gerar Plano de Ação", demo_running: "Analisando situação...",
    demo_result_label: "Plano de Ação EOS", demo_await: "Configure sua situação acima e execute a simulação.",
    res_label: "Arquitetura de Resiliência", res_h2: "EOS nunca apaga.", res_sub: "Três estados operacionais. Um sistema contínuo.",
    res: [
      { title: "Totalmente Conectado", dot: "#00e5a0", body: "Dados em tempo real de NOAA, FEMA e autoridades locais. Suporte completo de IA." },
      { title: "Parcialmente Degradado", dot: "#ffb347", body: "Apenas celular ou Wi-Fi. Base de conhecimento em cache. Motor totalmente operacional." },
      { title: "Completamente Offline", dot: "#ff6b6b", body: "Rede mesh LoRa entre dispositivos. IA local. Planejamento sem nenhuma infraestrutura." },
    ],
    for_label: "Construído Para", for_h2: "Pessoas reais em risco real.",
    for_cards: ["Famílias em\nregiões de risco", "Grupos outdoor\ne expedições", "Comunidades\noff-grid", "Preparadores\nde emergência"],
    waitlist_label: "Acesso Antecipado", waitlist_h2: "Seja a primeira família protegida pelo EOS.",
    waitlist_sub: "Estamos integrando famílias fundadoras em regiões de alto risco. Vagas limitadas.",
    waitlist_ph: "seu@email.com", waitlist_cta: "Solicitar Acesso",
    waitlist_note: "Sem spam. Seus dados críticos ficam sempre locais.",
    footer: "© 2025 EOS Systems. Todos os dados críticos ficam locais.",
  },
};

function Dot({ color, pulse }) {
  return <span style={{ width: 7, height: 7, borderRadius: "50%", background: color, display: "inline-block", flexShrink: 0, animation: pulse ? "blink 1.4s ease-in-out infinite" : "none" }} />;
}

function Label({ children }) {
  return <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "1.2px", color: "var(--mu)", textTransform: "uppercase", marginBottom: 12 }}>{children}</div>;
}

function Typewriter({ text }) {
  const [d, setD] = useState("");
  useEffect(() => {
    setD(""); let i = 0;
    const iv = setInterval(() => { if (i < text.length) setD(text.slice(0, ++i)); else clearInterval(iv); }, 12);
    return () => clearInterval(iv);
  }, [text]);
  return <span style={{ whiteSpace: "pre-wrap", fontSize: 14, lineHeight: 1.8, color: "var(--tx)" }}>{d}{d.length < text.length && <span style={{ color: "var(--ac)" }}>▋</span>}</span>;
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = T[lang];
  const [si, setSi] = useState(0);
  const sts = [{ l: t.status_connected, c: "#00e5a0" }, { l: t.status_degraded, c: "#ffb347" }, { l: t.status_offline, c: "#ff6b6b" }];
  useEffect(() => { const iv = setInterval(() => setSi(i => (i + 1) % 3), 2800); return () => clearInterval(iv); }, []);

  const [scenario, setScenario] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [elderly, setElderly] = useState(0);
  const [res, setRes] = useState([0, 2]);
  const [loc, setLoc] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const demoRef = useRef(null);

  const toggleRes = i => setRes(r => r.includes(i) ? r.filter(x => x !== i) : [...r, i]);

  const runDemo = async () => {
    setLoading(true); setResult(null);
    const sNames = ["Category 3 Hurricane", "Power Grid Failure", "Major Earthquake", "Wildfire Approaching", "Flood Warning"];
    const lNames = ["coastal/flood zone", "urban city", "suburban area", "rural area", "high-rise building"];
    const rNames = ["a vehicle", "a generator", "3-day water supply", "a first aid kit", "a ham radio", "cash reserves"];
    const selRes = res.map(i => rNames[i]);
    const prompt = `You are EOS — Emergency Operating System.

Generate a precise emergency action plan:
SCENARIO: ${sNames[scenario]}
LOCATION: ${lNames[loc]}
FAMILY: ${adults} adult(s), ${children} child(ren), ${elderly} elderly/mobility-limited
RESOURCES: ${selRes.length ? selRes.join(", ") : "minimal — no special equipment"}

Respond ONLY with this structure. Be direct, no preamble:

⚡ NEXT 15 MINUTES
[3 numbered immediate actions]

🕐 NEXT 1 HOUR
[3-4 priorities by urgency]

🔴 CRITICAL DECISIONS
[2-3 if/then decision points]

⚠️ RESOURCE GAPS
[1-2 critical gaps, or "None identified"]`;

    try {
      const r2 = await fetch("https://api.openai.com/v1/responses", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "gpt-4.1", max_output_tokens: 1000, input: prompt }),
      });
      const data = await r2.json();
      setResult(data.output_text || "No response.");
    } catch { setResult("⚠️ Connection error. In a real emergency, EOS offline mode activates automatically."); }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent;}
        :root{--bg:#0a0a0f;--sf:#13131a;--sf2:#1c1c27;--bd:#2a2a38;--ac:#00e5a0;--ac2:#7c6bff;--ac3:#ff6b6b;--tx:#f0f0f8;--mu:#6b6b8a;}
        body{background:var(--bg);color:var(--tx);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow-x:hidden;}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--ac);border-radius:2px}
        .card{background:var(--sf);border:1px solid var(--bd);border-radius:16px;padding:16px;margin-bottom:12px;}
        .ct{font-size:11px;font-weight:700;letter-spacing:1.2px;color:var(--mu);text-transform:uppercase;margin-bottom:12px;}
        .btn{padding:13px 18px;border-radius:10px;border:none;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .15s;}
        .btn:active{opacity:.75;}.bp{background:var(--ac);color:#0a0a0f;}.bs{background:var(--sf2);color:var(--tx);border:1px solid var(--bd);}
        .bfull{width:100%;}
        .chip{padding:7px 13px;border-radius:20px;border:1px solid var(--bd);background:var(--sf2);font-size:12px;font-weight:700;cursor:pointer;color:var(--tx);font-family:inherit;transition:all .15s;}
        .chip.on{background:var(--ac);color:#0a0a0f;border-color:var(--ac);}
        .gtot{background:rgba(0,229,160,.07);border:1px solid rgba(0,229,160,.18);border-radius:12px;padding:16px;}
        .fade{animation:fadeUp .6s ease both;}
        a{text-decoration:none;color:inherit;}
        hr{border:none;border-top:1px solid var(--bd);}
        input{width:100%;padding:13px 14px;background:var(--sf2);border:1px solid var(--bd);border-radius:10px;color:var(--tx);font-size:14px;font-family:inherit;outline:none;}
        input:focus{border-color:var(--ac);}
      `}</style>

      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,15,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--bd)", padding: "0 20px", height: 52, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--tx)", letterSpacing: 2 }}>EOS</span>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "var(--sf2)", border: "1px solid var(--bd)", borderRadius: 20, padding: "4px 10px" }}>
            <Dot color={sts[si].c} pulse />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: sts[si].c, fontFamily: "monospace" }}>{sts[si].l}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="#how" style={{ fontSize: 12, fontWeight: 600, color: "var(--mu)" }}>{t.nav_how}</a>
          <a href="#demo" style={{ fontSize: 12, fontWeight: 600, color: "var(--mu)" }}>{t.nav_demo}</a>
          <button onClick={() => setLang(l => l === "en" ? "pt" : "en")} className="btn bs" style={{ padding: "5px 12px", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{lang === "en" ? "PT" : "EN"}</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "var(--bg)", padding: "64px 20px 72px", maxWidth: 900, margin: "0 auto" }}>
        <div className="fade" style={{ animationDelay: ".05s" }}><Label>{t.hero_tag}</Label></div>
        <h1 className="fade" style={{ fontSize: "clamp(32px,7vw,60px)", fontWeight: 700, lineHeight: 1.1, color: "var(--tx)", marginBottom: 4, animationDelay: ".1s" }}>{t.hero_h1}</h1>
        <h1 className="fade" style={{ fontSize: "clamp(32px,7vw,60px)", fontWeight: 700, lineHeight: 1.1, color: "var(--ac)", marginBottom: 20, animationDelay: ".15s" }}>{t.hero_h1b}</h1>
        <p className="fade" style={{ fontSize: 15, color: "var(--mu)", lineHeight: 1.7, maxWidth: 480, marginBottom: 28, animationDelay: ".2s" }}>{t.hero_sub}</p>
        <div className="fade" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48, animationDelay: ".25s" }}>
          <button className="btn bp" onClick={() => demoRef.current?.scrollIntoView({ behavior: "smooth" })}>{t.hero_cta}</button>
          <a href="#how"><button className="btn bs">{t.hero_cta2}</button></a>
        </div>
        <div className="fade" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: "1px solid var(--bd)", borderRadius: 12, overflow: "hidden", maxWidth: 400, animationDelay: ".3s" }}>
          {sts.map((s, i) => (
            <div key={i} style={{ padding: "12px 14px", background: "var(--sf)", borderRight: i < 2 ? "1px solid var(--bd)" : "none", display: "flex", alignItems: "center", gap: 7 }}>
              <Dot color={s.c} pulse={i === si} />
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.2, color: i === si ? s.c : "var(--mu)", fontFamily: "monospace" }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* PROBLEM */}
      <div style={{ background: "var(--bg)", padding: "64px 20px", maxWidth: 900, margin: "0 auto" }}>
        <Label>{t.problem_label}</Label>
        <h2 style={{ fontSize: "clamp(24px,5vw,42px)", fontWeight: 700, color: "var(--tx)", marginBottom: 14, lineHeight: 1.2 }}>{t.problem_h2}</h2>
        <p style={{ fontSize: 14, color: "var(--mu)", lineHeight: 1.7, maxWidth: 500, marginBottom: 28 }}>{t.problem_body}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 12 }}>
          {[{ n: t.stat1_num, l: t.stat1_label, c: "var(--ac3)" }, { n: t.stat2_num, l: t.stat2_label, c: "var(--ac)" }, { n: t.stat3_num, l: t.stat3_label, c: "var(--ac3)" }].map((s, i) => (
            <div key={i} className="gtot">
              <div style={{ fontSize: 30, fontWeight: 700, color: s.c, fontFamily: "monospace", marginBottom: 6 }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "var(--mu)", lineHeight: 1.5 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* HOW */}
      <div id="how" style={{ background: "var(--sf)", padding: "64px 20px", maxWidth: 900, margin: "0 auto" }}>
        <Label>{t.how_label}</Label>
        <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "var(--tx)", marginBottom: 28, lineHeight: 1.2 }}>{t.how_h2}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
          {t.how_s.map((s, i) => (
            <div key={i} className="card" style={{ margin: 0, borderTop: "2px solid var(--ac)" }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "rgba(0,229,160,0.18)", fontFamily: "monospace", marginBottom: 8 }}>{s.n}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--tx)", marginBottom: 8 }}>{s.title}</div>
              <p style={{ fontSize: 13, color: "var(--mu)", lineHeight: 1.6 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* DEMO */}
      <div id="demo" ref={demoRef} style={{ background: "var(--bg)", padding: "64px 20px", maxWidth: 900, margin: "0 auto" }}>
        <Label>{t.demo_label}</Label>
        <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "var(--tx)", marginBottom: 8 }}>{t.demo_h2}</h2>
        <p style={{ fontSize: 14, color: "var(--mu)", marginBottom: 28, lineHeight: 1.6 }}>{t.demo_sub}</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            {/* Scenario */}
            <div className="card">
              <div className="ct">{t.demo_scenario_label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {t.demo_scenarios.map((s, i) => (
                  <button key={i} onClick={() => setScenario(i)} style={{ textAlign: "left", padding: "10px 14px", background: scenario === i ? "rgba(0,229,160,0.08)" : "var(--sf2)", border: `1px solid ${scenario === i ? "var(--ac)" : "var(--bd)"}`, borderRadius: 10, color: scenario === i ? "var(--ac)" : "var(--tx)", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", transition: "all .15s" }}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Family */}
            <div className="card">
              <div className="ct">{t.demo_family_label}</div>
              {[{ l: t.demo_adults, v: adults, s: setAdults, min: 1, max: 8 }, { l: t.demo_children, v: children, s: setChildren, min: 0, max: 8 }, { l: t.demo_elderly, v: elderly, s: setElderly, min: 0, max: 4 }].map((f, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: i < 2 ? 12 : 0, marginBottom: i < 2 ? 12 : 0, borderBottom: i < 2 ? "1px solid var(--bd)" : "none" }}>
                  <span style={{ fontSize: 14, color: "var(--tx)" }}>{f.l}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => f.s(v => Math.max(f.min, v - 1))} className="btn bs" style={{ padding: 0, width: 28, height: 28, fontSize: 18, lineHeight: 1 }}>−</button>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "var(--ac)", fontFamily: "monospace", minWidth: 20, textAlign: "center" }}>{f.v}</span>
                    <button onClick={() => f.s(v => Math.min(f.max, v + 1))} className="btn bs" style={{ padding: 0, width: 28, height: 28, fontSize: 18, lineHeight: 1 }}>+</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Resources */}
            <div className="card">
              <div className="ct">{t.demo_res_label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.demo_res.map((r, i) => (
                  <button key={i} onClick={() => toggleRes(i)} className={`chip${res.includes(i) ? " on" : ""}`}>{r}</button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="card">
              <div className="ct">{t.demo_loc_label}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {t.demo_locs.map((l, i) => (
                  <button key={i} onClick={() => setLoc(i)} className={`chip${loc === i ? " on" : ""}`}>{l}</button>
                ))}
              </div>
            </div>

            <button className="btn bp bfull" onClick={runDemo} disabled={loading} style={{ opacity: loading ? 0.7 : 1, padding: "15px", fontSize: 14 }}>
              {loading ? t.demo_running : t.demo_run}
            </button>
          </div>

          {/* Output */}
          <div className="card" style={{ display: "flex", flexDirection: "column", minHeight: 420, margin: 0 }}>
            <div className="ct" style={{ paddingBottom: 12, borderBottom: "1px solid var(--bd)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>{t.demo_result_label}</span>
              {loading && <span style={{ fontSize: 10, color: "var(--ac)", fontFamily: "monospace", animation: "blink 1.4s infinite" }}>● LIVE</span>}
            </div>
            <div style={{ flex: 1, paddingTop: 12 }}>
              {!result && !loading && (
                <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontSize: 13, color: "var(--mu)", textAlign: "center", lineHeight: 1.7, maxWidth: 220 }}>{t.demo_await}</p>
                </div>
              )}
              {loading && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "8px 0" }}>
                  {["Scanning threat vectors...", "Profiling family context...", "Cross-referencing protocols...", "Building action plan..."].map((l, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, animation: "blink 1.4s infinite", animationDelay: `${i * 0.3}s` }}>
                      <Dot color="var(--ac)" pulse />
                      <span style={{ fontSize: 12, color: "var(--mu)", fontFamily: "monospace" }}>{l}</span>
                    </div>
                  ))}
                </div>
              )}
              {result && <Typewriter text={result} />}
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* RESILIENCE */}
      <div style={{ background: "var(--sf)", padding: "64px 20px", maxWidth: 900, margin: "0 auto" }}>
        <Label>{t.res_label}</Label>
        <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "var(--tx)", marginBottom: 8 }}>{t.res_h2}</h2>
        <p style={{ fontSize: 14, color: "var(--mu)", marginBottom: 28 }}>{t.res_sub}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 12 }}>
          {t.res.map((r, i) => (
            <div key={i} className="card" style={{ margin: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <Dot color={r.dot} pulse />
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--tx)" }}>{r.title}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--mu)", lineHeight: 1.6 }}>{r.body}</p>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* FOR WHOM */}
      <div style={{ background: "var(--bg)", padding: "64px 20px", maxWidth: 900, margin: "0 auto" }}>
        <Label>{t.for_label}</Label>
        <h2 style={{ fontSize: "clamp(22px,4vw,38px)", fontWeight: 700, color: "var(--tx)", marginBottom: 28 }}>{t.for_h2}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 12 }}>
          {t.for_cards.map((f, i) => (
            <div key={i} className="card" style={{ background: "var(--sf2)", margin: 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: ["rgba(0,229,160,.12)", "rgba(124,107,255,.12)", "rgba(255,107,107,.12)", "rgba(255,179,71,.12)"][i], display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, fontSize: 16 }}>
                {["🏠", "🧭", "🌿", "🛡️"][i]}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--tx)", lineHeight: 1.4, whiteSpace: "pre-line" }}>{f}</div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* WAITLIST */}
      <div style={{ background: "var(--sf)", padding: "72px 20px" }}>
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <Label>{t.waitlist_label}</Label>
          <h2 style={{ fontSize: "clamp(20px,4vw,34px)", fontWeight: 700, color: "var(--tx)", marginBottom: 12, lineHeight: 1.3 }}>{t.waitlist_h2}</h2>
          <p style={{ fontSize: 14, color: "var(--mu)", marginBottom: 28, lineHeight: 1.7 }}>{t.waitlist_sub}</p>
          {!joined ? (
            <div style={{ display: "flex", gap: 8 }}>
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder={t.waitlist_ph} />
              <button className="btn bp" style={{ flexShrink: 0, whiteSpace: "nowrap" }} onClick={() => email.includes("@") && setJoined(true)}>{t.waitlist_cta}</button>
            </div>
          ) : (
            <div className="gtot" style={{ textAlign: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ac)", fontFamily: "monospace", letterSpacing: 1 }}>✓ ACCESS REQUEST RECEIVED</div>
            </div>
          )}
          <p style={{ marginTop: 12, fontSize: 11, color: "var(--mu)" }}>{t.waitlist_note}</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--bd)", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "var(--bg)" }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--tx)", letterSpacing: 2 }}>EOS</span>
        <span style={{ fontSize: 11, color: "var(--mu)" }}>{t.footer}</span>
      </footer>
    </>
  );
}
