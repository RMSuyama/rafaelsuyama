import React, { useState } from 'react';

const LegalSolutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      title: "Cálculos Judiciais Automatizados",
      description: "Pipeline de apuração imediata com 98% de precisão auditável.",
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
      title: "ETL & Agendamento Preditivo",
      description: "Sincronização de dados jurídicos com Python e Excel (VBA/PowerQuery).",
      demo: (
        <div className="p-4 bg-slate-900 rounded-lg text-slate-200 text-sm border border-slate-700 font-mono shadow-inner">
          <div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-slate-500 ml-2">bash -- user@lre-system:~/scripts</span>
          </div>
          <div className="space-y-1 text-[10px] md:text-xs">
            <div className="text-slate-400">$ python legal_etl.py --start</div>
            <div className="text-blue-400 opacity-90">Initializing ETL Pipeline...</div>
            <div className="text-slate-500 italic">Reading source: 'Planilha_Mestra.xlsx'</div>
            <div className="text-slate-300">Target: SQL Database (Postgres)</div>
            <div className="text-green-400">SUCCESS: 450 rows processed.</div>
            <div className="mt-2 text-slate-400">$ node scheduler_v2.js</div>
            <div className="text-yellow-300">Syncing deadlines...</div>
          </div>
        </div>
      ),
      code: `import pandas as pd
from sqlalchemy import create_engine

# Excel to SQL Pipeline
def run_etl(file_path):
    df = pd.read_excel(file_path)
    # Transform logic here
    df.to_sql('legal_data', con=engine)`
    },
    {
      title: "Monitoramento Automatizado",
      description: "Web Scraping (Python) para Diários Oficiais com parsing inteligente.",
      demo: (
        <div className="p-4 bg-slate-700/50 rounded-lg text-slate-200 text-sm border border-slate-600">
          <div className="font-mono text-[10px] space-y-1 bg-slate-900 p-3 rounded border border-slate-800">
            <div className="text-blue-400 italic font-bold">Searching DJEs... [DONE]</div>
            <div className="text-green-400 font-mono text-[9px] mt-1 pl-2 border-l-2 border-green-500/30">{' > '} Match found: OAB/SP 123456</div>
            <div className="text-slate-400 ml-4 py-1 italic">"Vistos em despacho..."</div>
            <div className="text-yellow-400 font-bold mt-1">! Parsing logic Applied (NLP Success)</div>
            <div className="text-slate-500 text-[9px] mt-2 border-t border-slate-800 pt-1">Log saved to: results_today.csv</div>
          </div>
        </div>
      ),
      code: `async function scrapDJEs() {
    const list = await fetchDjeIndices();
    return parseMatches(list, query);
} 
// Python alternative available
// using Selenium/BeautifulSoup`
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
                  <h3 className="text-2xl font-bold text-white">{solutions[activeTab].title}</h3>
                  <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-bold rounded-full uppercase tracking-wide border border-indigo-500/30">
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


