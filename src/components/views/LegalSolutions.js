import React, { useState } from 'react';
import { useLanguage } from "../../context/LanguageContext";
import { useTranslation } from "../../translations";

const LegalSolutions = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [activeTab, setActiveTab] = useState(0);

  const projectsData = [
    {
      id: "jusdocs",
      title: "JusDocs",
      category: "Automação Documental & Legal Design",
      description: "Projeto voltado à automação documental para operações jurídicas, com foco na padronização de documentos, organização de fluxos de trabalho e aumento expressivo de produtividade.",
      focus: "Padronização de minutas e redução drástica do tempo de elaboração de peças.",
      tags: ["Python", "Automação Documental", "ClickUp", "Legal Design"],
      demo: (
        <div className="p-4 bg-slate-900 rounded-lg text-slate-200 text-sm border border-slate-700 font-mono shadow-inner">
          <div className="flex justify-between border-b border-slate-700 pb-2 mb-3 text-xs">
            <span className="text-indigo-400 font-bold">JusDocs Engine v2.4</span>
            <span className="text-green-400 font-semibold">[READY]</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between text-slate-400"><span>Template:</span> <span className="text-white">Petição_Inicial_Cível.docx</span></div>
            <div className="flex justify-between text-slate-400"><span>Variáveis:</span> <span className="text-indigo-300">48 campos injetados</span></div>
            <div className="flex justify-between text-slate-400"><span>Validação LGPD:</span> <span className="text-emerald-400">Pass (Anonimizado)</span></div>
            <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between text-white font-bold">
              <span>Status Output:</span>
              <span className="text-indigo-400">Minuta Gerada (PDF + DOCX)</span>
            </div>
          </div>
        </div>
      ),
      code: `def generate_legal_doc(case_data):
    # JusDocs Automated Pipeline
    validated = check_lgpd_compliance(case_data)
    doc = template_engine.render("peticao_inicial", validated)
    return doc.export(formats=["pdf", "docx"])`
    },
    {
      id: "hermeneuta",
      title: "Hermeneuta",
      category: "Inteligência Artificial Generativa Jurídica",
      description: "Projeto de portal jurídico utilizando Inteligência Artificial (ChatGPT, NotebookLM, Ollama) para pesquisa avançada, organização temática e disponibilização otimizada de conteúdo jurídico.",
      focus: "Pesquisa doutrinária e jurisprudencial inteligente com LLMs locais e em nuvem.",
      tags: ["ChatGPT", "NotebookLM", "Ollama", "Python", "IA Generativa"],
      demo: (
        <div className="p-4 bg-slate-900 rounded-lg text-slate-200 text-sm border border-slate-700 font-mono shadow-inner">
          <div className="flex items-center gap-2 border-b border-slate-700 pb-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-emerald-400 font-bold">Hermeneuta AI Agent (Ollama Local)</span>
          </div>
          <div className="space-y-1.5 text-xs">
            <div className="text-slate-400">$ prompt --query "Jurisprudência STJ Tema 1050"</div>
            <div className="text-indigo-300 italic">Buscando em acórdãos indexados...</div>
            <div className="text-slate-300 bg-slate-800/80 p-2 rounded border border-slate-700 text-[11px]">
              "Tese fixada com base no REsp 1.845.215/SP. Probabilidade de êxito: Elevada (88%)"
            </div>
            <div className="text-green-400 text-[11px] pt-1">Síntese gerada em 1.2s • Modelo: Llama 3 / NotebookLM</div>
          </div>
        </div>
      ),
      code: `async function queryHermeneutaAI(prompt) {
    const context = await searchVectorStore(prompt.keywords);
    const summary = await ollama.generate({
        model: "llama3-legal-pt",
        prompt: buildLegalContext(prompt, context)
    });
    return summary;
}`
    },
    {
      id: "automacao",
      title: "Automação de Processos Jurídicos",
      category: "RPA, Selenium & Scraping de Tribunais",
      description: "Desenvolvimento de automações utilizando Python, Selenium, VBA e integrações entre ferramentas para reduzir esforço operacional e padronizar atividades repetitivas.",
      focus: "Integração entre PJe, e-SAJ, EPROC, PROJUDI, ClickUp e planilhas operacionais.",
      tags: ["Python", "Selenium", "VBA", "PJe / e-SAJ / EPROC", "ClickUp API"],
      demo: (
        <div className="p-4 bg-slate-900 rounded-lg text-slate-200 text-sm border border-slate-700 font-mono shadow-inner">
          <div className="flex justify-between border-b border-slate-700 pb-2 mb-3 text-xs">
            <span className="text-yellow-400 font-bold">Court Bot Worker #04</span>
            <span className="text-indigo-400">Syncing PJe & e-SAJ</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="text-slate-400">$ python court_scraper.py --active-cases 200</div>
            <div className="text-blue-400">[PJe] Capturados 14 novos andamentos</div>
            <div className="text-green-400">[e-SAJ] 0 intimações pendentes</div>
            <div className="text-indigo-300 font-semibold mt-2 pt-1 border-t border-slate-800">
              ClickUp Tasks & Prazos Atualizados!
            </div>
          </div>
        </div>
      ),
      code: `def sync_court_processes():
    active_cases = db.query_active_cases()
    for case in active_cases:
        updates = scraper.fetch_andamentos(case.number, court=case.court)
        clickup_api.update_task_status(case.clickup_id, updates)`
    }
  ];

  return (
    <section id="legal-solutions" className="py-24 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-950/80 border border-indigo-700 text-indigo-300 rounded-full text-xs font-semibold mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Inovação & Eficiência Jurídica
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {t('projetos.title')}
          </h2>
          <p className="text-xl text-slate-400">
            {t('projetos.subtitle')}
          </p>
        </div>

        {/* Dashboard Control Banner */}
        <div className="mb-20">
          <div className="bg-slate-800/90 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden max-w-5xl mx-auto backdrop-blur-md">
            <div className="bg-slate-900/80 px-6 py-4 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-2">
              <div className="flex items-center space-x-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest ml-2">Legal Ops Control Center</span>
              </div>
              <div className="text-xs text-indigo-400 font-mono font-semibold">Sistemas: PJe • e-SAJ • EPROC • PROJUDI</div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
                  <div className="text-3xl font-extrabold text-white mb-1">+200</div>
                  <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider">Processos Simultâneos</div>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
                  <div className="text-3xl font-extrabold text-emerald-400 mb-1">ClickUp & IA</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Gestão & Automação</div>
                </div>
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-700">
                  <div className="text-3xl font-extrabold text-indigo-400 mb-1">100%</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Controle de Prazos</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Cards Showcase */}
        <div className="max-w-6xl mx-auto">
          {/* Tab Selection */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {projectsData.map((proj, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                  activeTab === idx
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
                {proj.title}
              </button>
            ))}
          </div>

          {/* Active Project Detail Card */}
          {projectsData[activeTab] && (
            <div className="bg-slate-800/80 rounded-2xl p-8 border border-slate-700 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-800">
                    {projectsData[activeTab].category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mt-3 mb-2">
                    {projectsData[activeTab].title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {projectsData[activeTab].description}
                  </p>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/80">
                  <h4 className="text-xs font-bold uppercase text-indigo-300 tracking-wider mb-1">Impacto Operacional</h4>
                  <p className="text-sm font-medium text-slate-200">{projectsData[activeTab].focus}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {projectsData[activeTab].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold bg-slate-700/60 text-indigo-300 px-3 py-1 rounded-md border border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo / Code snippet column */}
              <div className="lg:col-span-5 space-y-4">
                {projectsData[activeTab].demo}
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto shadow-inner">
                  <div className="text-slate-500 text-[10px] uppercase font-bold mb-1 border-b border-slate-800 pb-1">Snippet / Pipeline</div>
                  <pre className="text-indigo-300 leading-tight">{projectsData[activeTab].code}</pre>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default LegalSolutions;
