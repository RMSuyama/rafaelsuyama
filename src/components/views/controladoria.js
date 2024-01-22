import React from 'react';
import LegalControllerImage from '../../statics/img/controle.png';
import positivechart from '../../statics/img/positivechart.png';
import venndiagram from '../../statics/img/venndiagram.png';
import python from '../../statics/img/creative.png';
import coding from '../../statics/img/coding.png';

const ControladoriaJuridicaComponent = () => {
  return (
    <section id="controladoria-juridica" className="py-3">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          {/* Bootstrap Card */}
          <div className="card bg-white text-dark border-0">
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="card-body text">
                <h1 className="card-title">Elevando a Eficiência na Gestão Jurídica</h1>
                  <h2 className="card-subtitle mb-2 text-muted">Transformando Desafios em Oportunidades</h2>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    Na vanguarda da inovação, a Controladoria Jurídica não é apenas uma área administrativa, mas um motor estratégico para impulsionar o sucesso de escritórios de advocacia e departamentos jurídicos. Ao mergulhar nas complexidades do cenário legal, meu trabalho vai além de gerenciar operações; é uma jornada para otimizar cada aspecto, assegurando que cada serviço jurídico alcance seu máximo potencial.
                  </p>  
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    Desenvolvendo soluções inovadoras, integro a gestão administrativa e operacional, garantindo não apenas eficiência, mas uma qualidade excepcional em cada serviço prestado. Cada desafio é uma oportunidade de crescimento, e estou comprometido em transformar barreiras em conquistas, oferecendo resultados que superam expectativas.
                  </p>

                    <div className='card-row border-0 d-flex justify-content-around flex-wrap' style={{ marginTop: '2rem'}}>
                    
                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={LegalControllerImage} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Imagem Controladoria Jurídica" />
                      <p className="text-center mt-2"style={{ textAlign: 'center' }}>Gestão Jurídica</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={positivechart} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico Positivo" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Crescimento</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={venndiagram} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico de Acesso" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Análise de Dados</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={python} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Diagrama Venn" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Planejamento</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={coding} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Codificação" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Ferramentas Tech</p>
                    </div>
                  </div>
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
