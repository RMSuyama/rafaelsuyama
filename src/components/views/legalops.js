import React from 'react';

const LegalOpsComponent = () => {
  const features = [
    {
      title: "Otimização de Processos",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: "Redução de tempo em fluxos de trabalho."
    },
    {
      title: "Integração via API",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      desc: "Conexão entre sistemas jurídicos e ERPs."
    },
    {
      title: "Automação Python/VBA",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      desc: "Scripts para eliminar tarefas repetitivas."
    },
    {
      title: "Gestão do Conhecimento",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.777 5.832 18.5 7.5 18.5s3.332.277 4.5 1.007c1.168-.73 2.832-1.007 4.5-1.007s3.332.277 4.5 1.007v-13C19.832 5.477 18.168 5 16.5 5s-3.332.477-4.5 1.253" />
        </svg>
      ),
      desc: "Treinamentos e playbooks interativos."
    },
    {
      title: "Legal Design",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      desc: "Documentos claros e focados no usuário."
    }
  ];

  return (
    <section id="legal-ops" className="py-20 bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Legal Operations
          </h2>
          <p className="text-xl text-slate-400">
            Elevando a eficiência jurídica através de dados e tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Legal Ops não é apenas suporte administrativo: é a <strong className="text-indigo-400">espinha dorsal estratégica</strong> de um departamento moderno.
            </p>
            <p>
              Minha abordagem foca em três pilares: **Pessoas, Processos e Tecnologia**.
              Eu não apenas "gerencio" o departamento; eu o transformo. Identifico gargalos,
              implemento automações (Python/VBA) e crio dashboards que dão visibilidade real aos KPIs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 ml-4">
              <li>Mapeamento e redesenho de fluxos de trabalho (BPMN)</li>
              <li>Implementação de softwares jurídicos (CLM/ELM)</li>
              <li>Criação de indicadores de desempenho (BI)</li>
            </ul>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div key={index} className={`bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors flex flex-col items-center text-center ${index === 4 ? 'col-span-2' : ''}`}>
                <div className="drop-shadow-lg">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalOpsComponent;
