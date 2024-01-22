import React from 'react';
import LegalControllerImage from '../../statics/img/books.png';
import positivechart from '../../statics/img/icons8-books-96 (1).png';
import venndiagram from '../../statics/img/law.png';
import python from '../../statics/img/console.png';
import coding from '../../statics/img/123.png';

function FormacaoAcademica() {
  return (
    <section id="formacao-academica" className="py-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Bootstrap Card */}
          <div className="card bg-white text-dark border-0">
            <div className="row no-gutters">
              <div className="col-md-12">
                <div className="card-body text d-flex justify-content-between align-items-center">
                  <div className="col-lg-6 text-center" style={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                    <h2 className="display-5 fw-bold">Formação Acadêmica</h2>
                    <p style={{ textAlign: 'justify' }}>
                      Bacharel em Direito formado na UNIVR – Centro Universitário do Vale do Ribeira – (2015 – 2019)
                    </p>
                    <p style={{ textAlign: 'justify' }}>
                      Certificações:
                      <ul>
                        <li>Técnico em Transações Imobiliárias - IBRESP – (2018)</li>
                        <li>Normas Anticorrupção, Antissuborno e Compliance Público</li>
                        <li>Lei Geral de Proteção de Dados (LGPD)</li>
                        <li>EXIN Privacy and Data Protection Níveis Essentials & Foundation</li>
                      </ul>
                    </p>
                  </div>
                  <div className='card-row border-0 d-flex justify-content-around flex-wrap' style={{ marginTop: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                      <img src={LegalControllerImage} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Imagem Controladoria Jurídica" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}></p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                      <img src={positivechart} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico Positivo" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}></p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                      <img src={venndiagram} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Gráfico de Acesso" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}></p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1rem' }}>
                      <img src={python} style={{ width: '5rem', height: '5rem' }} className="card-img" alt="Diagrama Venn" />
                      <p className="text-center mt-2" style={{ textAlign: 'center' }}></p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of Bootstrap Card */}
        </div>
    </section>
  );
}

export default FormacaoAcademica;
