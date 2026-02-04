import React from 'react';

const ControladoriaJuridicaComponent = () => {
  const features = [
    {
      title: "Gestão Jurídica",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      desc: "Controle de prazos e audiências com SLA zero."
    },
    {
      title: "Crescimento",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      desc: "Estratégias escaláveis para expansão."
    },
    {
      title: "Análise de Dados",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      desc: "Jurimetria para predição de resultados."
    },
    {
      title: "Planejamento",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      desc: "Budgeting e alocação eficiente de recursos."
    },
    {
      title: "Ferramentas Tech",
      icon: (
        <svg className="w-12 h-12 mb-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      desc: "Domínio de softwares de gestão (CPJ, Espaider, etc)."
    }
  ];

  return (
    <section id="controladoria-juridica" className="py-20 bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Feature Grid (Left side on desktop this time) */}
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            {features.map((item, index) => (
              <div key={index} className={`bg-slate-700/50 p-6 rounded-xl hover:bg-slate-700 transition-colors flex flex-col items-center text-center ${index === 4 ? 'col-span-2' : ''}`}>
                <div className="drop-shadow-lg">
                  {item.icon}
                </div>
                <h4 className="font-bold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Text Content (Right side) */}
          <div className="space-y-6 text-lg leading-relaxed order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Controladoria Jurídica
            </h2>
            <h3 className="text-xl text-indigo-400 font-medium">
              Transformando Desafios em Oportunidades
            </h3>

            <p>
              A Controladoria Jurídica moderna vai além do cumprimento de prazos. Ela é a <strong className="text-white">inteligência do negócio</strong>.
            </p>
            <p>
              Meu foco é garantir que a operação jurídica funcione como um relógio suíço, mas com a agilidade de uma startup.
              Integro a gestão administrativa com automação, assegurando que cada advogado possa focar no que realmente importa: a tese jurídica.
            </p>
            <div className="bg-slate-900/50 p-4 rounded-lg border-l-4 border-indigo-500 italic text-slate-400">
              "Não é apenas sobre gerenciar processos; é sobre otimizar a justiça."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ControladoriaJuridicaComponent;
