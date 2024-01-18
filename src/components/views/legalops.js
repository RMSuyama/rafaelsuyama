import React from 'react';
import LegalControllerImage from '../../statics/img/ideas.png';

const ControladoriaJuridicaComponent = () => {
  return (
    <section id="controladoria-juridica" className="py-3">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          {/* Bootstrap Card */}
          <div className=" bg-white">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={LegalControllerImage} style={{ width: '15rem', padding: '3rem', display:'flex', justifyContent:'center' }} className="card-img" alt="Legal Controller" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">Legal Ops</h1>
                  <h2 className="card-subtitle mb-2 text-muted">Transformando a Gestão Jurídica</h2>
                  <p className="card-text">
                    A Legal Ops é a revolução na gestão jurídica. Nosso setor de controladoria jurídica cuida da administração e operação estratégica de escritórios de advocacia e departamentos jurídicos, promovendo eficiência, qualidade e resultados excepcionais nos serviços jurídicos.
                  </p>
                  <p className="card-text">
                    Em Legal Ops, integramos tecnologia e expertise legal para superar desafios complexos, proporcionando soluções inovadoras e impulsionando o sucesso dos projetos de nossos clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End of Bootstrap Card */}
        </div>
      </div>
    </section>
  );
};

export default ControladoriaJuridicaComponent;
