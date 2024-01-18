import React from 'react';
import Excel from '../../statics/img/excel.png';
import Api from '../../statics/img/api.png';
import Console from '../../statics/img/ideas.png';
import Powerpoint from '../../statics/img/powerpoint.png';
import word from '../../statics/img/word.png';

const LegalOpsComponent = () => {
  return (
    <section id="legal-ops" className="py-3">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          {/* Bootstrap Card */}
          <div className="card bg-dark text-white border-0">
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="card-body text">
                  <h1 className="card-title">Legal Ops</h1>
                  <h2 className="card-subtitle mb-2 text-muted">Elevando a Eficiência na Gestão Jurídica</h2>
                  <p className="card-text" style={{ textAlign: 'justify' }}>
                    Imerso na dinâmica do universo jurídico, Legal Ops emerge como um arquiteto estratégico, guiando escritórios e departamentos jurídicos rumo ao sucesso. Minha abordagem transcende a gestão tradicional, tornando-se uma jornada dedicada a otimizar cada procedimento.
                    </p>
                    <p className="card-text" style={{ textAlign: 'justify' }}>
                    Ao desenvolver soluções inovadoras, integro de maneira sinérgica a gestão administrativa e operacional, garantindo eficiência e qualidade excepcional em cada entrega. Encaro cada desafio como uma oportunidade de crescimento, comprometendo-me a superar barreiras e a fornecer resultados que transcendem as expectativas.
                    </p>
                    <p className="card-text" style={{ textAlign: 'justify' }}>
                    Na implementação prática dessa visão, incorporo lógica de programação e automações, utilizando ferramentas como VBA e Python. Essa abordagem interdisciplinar colabora estreitamente com a equipe de TI, promovendo a eficiência dos processos jurídicos por meio de mapeamento detalhado. Nessa trajetória, a ousadia é mais do que uma escolha, é uma ferramenta essencial que impulsiona a transformação, a automação e a excelência contínua.
                    </p>

                  <div className='card-row border-0 d-flex justify-content-around flex-wrap' style={{ marginTop: '2rem'}}>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={Excel} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Imagem Controladoria Jurídica" />
                      <p className="text-center mt-2"style={{ textAlign: 'center' }}>Otimizando Migrações</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={Api} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico Positivo" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Integração de Tecnologias</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={Console} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico de Acesso" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Automações de Procedimentos</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={Powerpoint} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Diagrama Venn" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Treinamentos Eficientes</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                      <img src={word} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Codificação" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}>Design Law</p>
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

export default LegalOpsComponent;
