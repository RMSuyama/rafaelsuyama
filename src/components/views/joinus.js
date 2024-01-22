import React from 'react';
import foto from '../../statics/img/Foto.jpeg';

const JoinUsView = () => {
  return (
    <section id="join-us" className="py-5">
      <div className="pr-4 container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-justify">
            <h2 className="display-4 fw-bold mb-5">
              Oportunidades em Legal Ops e Controladoria Jurídica!
            </h2>

            <p className="card p-2 text-justify bg-dark text-white"style={{textAlign:'justify'}}>
              Olá, sou Rafael Moreira Suyama, Advogado especializado em
              Controladoria Jurídica e Compliance, com experiência em
              Contratualismo, Due Diligence e Automação de Processos Jurídicos
              utilizando ferramentas como Office, VBA, SQL e React.js.
            </p>
            <p className="card p-2 bg-dark text-white" style={{textAlign:'justify'}}>
              Estou pronto para enfrentar novos desafios e contribuir para a
              excelência nos processos legais. Vamos iniciar essa jornada
              juntos? Entre em contato e vamos conversar sobre como posso
              agregar valor à sua equipe.
            </p>
          </div>

          <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
              src={foto}
              alt="Minha Foto"
              className="img-fluid rounded-circle mb-4"
              style={{ width: '25rem', height: '25rem', objectFit: 'cover', borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsView;
