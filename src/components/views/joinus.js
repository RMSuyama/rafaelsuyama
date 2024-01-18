import React from 'react';
import foto from  '../../statics/img/Foto2.jpeg'
const JoinUsView = () => {
  return (
    <section id="join-us" className="py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 text-center">


          <h3 className="display-4 fw-bold" style={{ paddingBottom: '2rem' }}>Em Busca de Oportunidades em Legal Ops e Controladoria Jurídica!</h3>

          <p className="lead" style={{ textAlign: 'justify' }}>
          <h3>Rafael Moreira Suyama</h3>
          <p style={{fontSize:'1rem'}}>Advogado OAB/SP nº 484.261 <br/> Bacharel em Direito – Centro Universitário do Vale do Ribeira- UNIVR/SP<br/> Pós-Graduando em Controladoria Jurídica – LEGALE</p>

          <p>
            Como profissional especializado em Legal Ops e Controladoria Jurídica, estou em busca de novas oportunidades para aplicar minha experiência e paixão pela eficiência na gestão jurídica.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Com habilidades em lógica de programação, automação, e experiência prática em ferramentas como VBA e Python, estou pronto para integrar tecnologia e expertise legal, promovendo soluções inovadoras e impulsionando o sucesso de sua equipe.
          </p>´
          </p>

          </div>
          <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={foto}
                alt="Minha Foto"
                className="img-fluid rounded-circle"
                style={{ width: '30rem' }}
            />
            </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsView;
