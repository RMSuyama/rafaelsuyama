import React, { useState } from 'react';

const LegalSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "Cálculos Judiciais e Financeiros",
      description: "Liquidação de sentenças e atualizações monetárias em segundos.",
      focus: "Eliminar o erro humano e o tempo gasto com planilhas complexas.",
      demo: (
        <div className="p-4 bg-slate-700/50 rounded-lg text-slate-200 text-sm border border-slate-600 font-mono scale-95 origin-top">
          <div className="mb-2 text-indigo-400 font-bold uppercase text-[10px]">Job ID: #LRE-8821 (SUCCESS)</div>
          <div className="space-y-1 mb-4 text-xs">
            <div className="flex justify-between border-b border-slate-600 pb-1 italic"><span>Base: R$ 45.320,10</span> <span>Ref: TR/IPCA-E</span></div>
            <div className="flex justify-between border-b border-slate-600 pb-1"><span>Multa Art. 523:</span> <span className="text-green-400">+ R$ 4.532,01</span></div>
            <div className="flex justify-between font-bold text-white pt-1"><span>LIQUIDAÇÃO:</span> <span>R$ 56.128,44</span></div>
          </div>
          <div className="text-[9px] text-slate-500 mb-2">Check de Integridade: OK (Hash SHA-256)</div>
        </div>
      ),
      code: `def calculate_liability(data):
    # Data pipeline for judic. calc.
    total = sum([d.value for d in data])
    return audit_log(total)`
    },
    {
      title: "Assistente de Agenda & Prazos",
      description: "Sincronização automática de audiências com alertas proativos.",
      focus: "Organização logística e garantia de que nenhum compromisso seja esquecido.",
      demo: (
        <div className="p-4 bg-slate-900 rounded-lg text-slate-200 text-sm border border-slate-700 font-mono shadow-inner">
          <div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-slate-500 ml-2">bot -- scheduler_service</span>
          </div>
          <div className="space-y-1 text-[10px] md:text-xs">
            <div className="text-slate-400">$ node scheduler_v2.js --sync</div>
            <div className="text-blue-400 opacity-90">Checking court APIs...</div>
            <div className="text-slate-500 italic">Found: 'Audiência TJSP - Proc. 10222'</div>
            <div className="text-yellow-300">Conflict Detected! Auto-reschedule triggered.</div>
            <div className="text-green-400">SUCCESS: Calendar updated + Slack Alert sent.</div>
          </div>
        </div>
      ),
      code: `async function syncDeadlines() {
    const events = await fetchCourtEvents();
    if (detectConflict(events)) {
        return alertTeam("Slack");
    }
}`
    },
    {
      title: "Central de Business Intelligence",
      description: "Visualização de dados operacionais e financeiros em tempo real.",
      focus: "Transformar o escritório em uma empresa guiada por dados (Data-driven).",
      demo: (
        <div className="p-4 bg-slate-700/50 rounded-lg text-slate-200 text-sm border border-slate-600">
          <div className="text-center mb-2 font-bold text-xs uppercase text-slate-400 italic">Relatório de Custo-Benefício p/ Unidade</div>
          <div className="flex gap-2 items-center justify-center h-20">
            <div className="bg-indigo-500 w-6 h-[40%] rounded-t opacity-50"></div>
            <div className="bg-indigo-500 w-6 h-[75%] rounded-t"></div>
            <div className="bg-indigo-500 w-6 h-[95%] rounded-t shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
          </div>
          <div className="mt-2 text-[10px] text-center text-indigo-400">ROI: +42% vs Legacy Systems</div>
        </div>
      ),
      code: `import spark
df = spark.read.json("court_data/*.json")
df.groupBy("region").avg("cost")`
    },
    {
      title: "Gerador de Relatórios (PDF/Excel)",
      description: "Exportação de métricas de produtividade prontas para o cliente.",
      focus: "Economizar horas de trabalho manual na hora de prestar contas.",
      demo: (
        <div className="p-4 bg-slate-700/50 rounded-lg text-slate-200 text-sm border border-slate-600">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <span className="text-slate-400 uppercase font-bold">Generating Monthly Report...</span>
              <span className="text-green-400 animate-pulse">Processing</span>
            </div>
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[75%]"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-slate-800 p-1 text-[9px] text-center rounded text-slate-400">Format: .PDF</div>
              <div className="bg-slate-800 p-1 text-[9px] text-center rounded text-slate-400">Size: 2.4MB</div>
            </div>
            <div className="text-[9px] text-slate-500 text-center pt-1">Auto-mailing to: client@corp.com</div>
          </div>
        </div>
      ),
      code: `def generate_report(client_id):
    data = query_metrics(client_id)
    pdf = create_pdf(data, template="monthly")
    return send_email(pdf, "client@corp.com")`
    },
    {
      title: "Radar de Tendências e Riscos",
      description: "Identificação de gargalos e insights sobre o comportamento dos tribunais.",
      focus: "Inteligência competitiva e antecipação de problemas.",
      demo: (
        <div className="p-4 bg-slate-700/50 rounded-lg text-slate-200 text-sm border border-slate-600">
          <div className="font-mono text-[10px] space-y-1 bg-slate-900 p-3 rounded border border-slate-800">
            <div className="text-blue-400 italic font-bold">Scanning Tribunal Trends...</div>
            <div className="text-slate-300 ml-2">Region: <span className="text-yellow-400">TRT-2</span></div>
            <div className="text-green-400 font-mono text-[9px] mt-1 pl-2 border-l-2 border-green-500/30">Anomaly Detected: High dismissal rate</div>
            <div className="text-slate-400 ml-4 py-1 italic">"Juiz X - Vara 5 - Improcedência padrão"</div>
            <div className="text-slate-500 text-[9px] mt-2 border-t border-slate-800 pt-1">Alert: Risk Score increased to 8.5/10</div>
          </div>
        </div>
      ),
      code: `async function scanRiskPatterns() {
    const decisions = await scrapDecisions("TRT-2");
    const risk = analyzeSentiment(decisions);
    return risk > 8 ? alertStrategyTeam() : log();
}`
    }
  ];

  return (
    <section id="legal-solutions" className="py-24 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Soluções Jurídicas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Inteligentes</span>
          </h2>
          <p className="text-xl text-slate-400">
            Tecnologia aplicada para maximizar resultados e minimizar riscos.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="mb-20">
          <div className="bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500 glass-effect glow-shadow-indigo">
            <div className="bg-slate-900/50 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
              <h5 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Legal Engineering Dashboard</h5>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">142</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Processos Ativos</p>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">R$ 2.4M</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Economia Gerada</p>
                </div>
                <div>
                  <h3 className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">98%</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500">Taxa de Acordo</p>
                </div>
              </div>

              {/* Simulated Chart Bar */}
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 text-center">Eficiência Operacional (Últimos 6 meses)</p>
                <div className="flex items-end h-24 gap-2 md:gap-4 px-4 sm:px-12">
                  <div className="flex-1 bg-indigo-900/40 rounded-t h-[40%]"></div>
                  <div className="flex-1 bg-indigo-900/50 rounded-t h-[55%]"></div>
                  <div className="flex-1 bg-indigo-800/60 rounded-t h-[45%]"></div>
                  <div className="flex-1 bg-indigo-700/70 rounded-t h-[70%]"></div>
                  <div className="flex-1 bg-indigo-600/80 rounded-t h-[85%]"></div>
                  <div className="flex-1 bg-indigo-500 rounded-t h-[95%] relative group">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-slate-900 text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Atual
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Architecture Visualization (LRE Insight) */}
        <div className="max-w-5xl mx-auto mb-20 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-inner overflow-hidden relative group">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-1000"></div>

          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Legal Systems Architecture</h3>
            <p className="text-slate-400 text-sm italic">Engineering reliability into every legal transaction.</p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Step 1 */}
            <div className="w-full md:w-32 p-4 bg-slate-900 rounded-lg border border-slate-700 text-center z-10">
              <div className="text-indigo-400 font-bold text-xs mb-1">INPUT</div>
              <div className="text-white text-[10px]">Unstructured Courtney Data</div>
            </div>

            <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-500 mx-1 opacity-40"></div>
            <svg className="md:hidden w-6 h-6 text-indigo-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

            {/* Step 2 */}
            <div className="w-full md:w-40 p-4 bg-indigo-600/20 rounded-lg border border-indigo-500/50 text-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <div className="text-indigo-300 font-bold text-xs mb-1">PROCESSING</div>
              <div className="text-white text-[10px]">Python LRE Pipelines & NLP Parsing</div>
            </div>

            <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-green-500 mx-1 opacity-40"></div>
            <svg className="md:hidden w-6 h-6 text-blue-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

            {/* Step 3 */}
            <div className="w-full md:w-32 p-4 bg-slate-900 rounded-lg border border-slate-700 text-center z-10">
              <div className="text-green-400 font-bold text-xs mb-1">VALIDATION</div>
              <div className="text-white text-[10px]">Integrity Checks (SHA-256 Hash)</div>
            </div>

            <div className="hidden md:block flex-1 h-[2px] bg-gradient-to-r from-green-500 to-emerald-500 mx-1 opacity-40"></div>
            <svg className="md:hidden w-6 h-6 text-green-500 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

            {/* Step 4 */}
            <div className="w-full md:w-32 p-4 bg-emerald-600/20 rounded-lg border border-emerald-500/50 text-center z-10">
              <div className="text-emerald-300 font-bold text-xs mb-1">OUTCOME</div>
              <div className="text-white text-[10px]">Scalable Strategic Insights</div>
            </div>
          </div>

          <div className="mt-12 p-4 bg-slate-900/50 rounded-lg border border-slate-700/50 text-[11px] text-slate-500 font-mono text-center">
            {/* Global LRE Pattern: Resilience over brute-force automation. */}
          </div>
        </div>

        {/* Mini-Solutions Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Tab List */}
            <div className="lg:col-span-4 space-y-2">
              {solutions.map((sol, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${activeTab === index
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg lg:scale-105'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750 hover:text-slate-200'
                    }`}
                  onClick={() => setActiveTab(index)}
                >
                  <h6 className="font-bold text-sm md:text-base mb-1">{sol.title}</h6>
                  <p className="text-xs opacity-80 line-clamp-2">{sol.description}</p>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-8">
              <div className="bg-slate-800 rounded-2xl border border-slate-700 h-full p-6 md:p-8 shadow-xl relative overflow-hidden glass-effect glow-shadow-blue">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0L12 24M0 12L24 12" /></svg>
                </div>

                <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{solutions[activeTab].title}</h3>
                    {solutions[activeTab].focus && (
                      <p className="text-emerald-400 font-mono text-xs md:text-sm">
                        <span className="font-bold text-slate-500 uppercase tracking-wider mr-2">Foco:</span>
                        {solutions[activeTab].focus}
                      </p>
                    )}
                  </div>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-bold rounded-full uppercase tracking-wide border border-indigo-500/30 whitespace-nowrap ml-2">
                    Live Demo
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Demo Block */}
                  <div>
                    <h6 className="text-xs uppercase tracking-wider text-yellow-500 mb-3 font-semibold">Interface (Simulação)</h6>
                    {solutions[activeTab].demo}
                  </div>

                  {/* Code Block */}
                  <div>
                    <h6 className="text-xs uppercase tracking-wider text-blue-400 mb-3 font-semibold">Código (Backend Lógico)</h6>
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 overflow-x-auto shadow-inner">
                      <pre className="text-xs md:text-sm font-mono text-slate-300 leading-relaxed">
                        {solutions[activeTab].code}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegalSolutions;


