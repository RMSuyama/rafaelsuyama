import React from 'react';

function ExperienciaProfissional() {
  const experienciaProfissionalData = [
    {
      cargo: 'Autônomo – Advogado',
      periodo: 'Novembro de 2022 – Presente',
      local: 'São Paulo, Brasil',
      descricao:
        'Advogado | Compliance | Controladoria Jurídica | Due Dilligence | Automação de Processos Jurídicos | Desenvolvedor: VBA. Técnico em transações imobiliárias.',
    },
    {
      cargo: 'Corretor Imobiliário',
      periodo: 'Junho de 2020 - julho de 2022 (2 anos 2 meses)',
      descricao:
        'Elaboração de Contratos de Compra e Venda e Locação; Atendimento à Clientes; Elaboração de Portfólios para Exposição de Imóveis; Captação e Exposição de Imóveis.',
    },
    {
      cargo: 'Defensoria Pública do Estado de São Paulo',
      periodo: 'Julho de 2018 - junho de 2020 (2 anos)',
      descricao:
        'Busca de Jurisprudência; Elaboração de minuta de acordos, ofícios e peças processuais; Conciliação em Demandas Cíveis; Elaboração de Planilha de Controle de Processos; Planilhas de Cálculo Judiciais.',
    },
    {
      cargo: 'Secretaria de Assuntos Jurídicos - Prefeitura Municipal de Registro/SP',
      periodo: 'Fevereiro de 2017 - junho de 2018 (1 ano 5 meses)',
      descricao:
        'Elaboração de Ofícios; Acompanhamento de Execuções Fiscais; Automação de Procedimentos; Planilhas de Controle de Fluxo de Petições.',
    },
  ];

  return (
    <section id="experiencia-profissional" className="py-20 bg-slate-800 text-slate-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Trajetória Profissional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experienciaProfissionalData.map((experiencia, index) => (
            <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-1">{experiencia.cargo}</h3>
                  <div className="flex items-center text-sm text-indigo-300 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {experiencia.periodo}
                  </div>
                  {experiencia.local && (
                    <div className="text-xs text-slate-400 mb-2">{experiencia.local}</div>
                  )}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mt-auto border-t border-slate-600 pt-4">
                  {experiencia.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienciaProfissional;
