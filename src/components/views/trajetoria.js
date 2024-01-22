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
    <section id="experiencia-profissional" className="py-3">
      <div className="container pt-4">
        <div className="row">
          {experienciaProfissionalData.map((experiencia, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card h-100 bg-dark text-white ">
                <div className="card-body">
                  <h5 className="card-title">{experiencia.cargo}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{experiencia.periodo}</h6>
                  <p className="card-text" style={{textAlign:'justify'}}>{experiencia.descricao}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienciaProfissional;
