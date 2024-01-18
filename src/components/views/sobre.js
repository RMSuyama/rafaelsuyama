import React from 'react';
import ProfileImage from '../../statics/img/Foto.jpeg';

function SobreMim() {
  return (
    <section id="sobre-mim" className="py-3">
      <div className="bg-dark text-white">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-6 text-center d-flex flex-column align-items-center justify-content-center">
            <img
                src={ProfileImage}
                alt="Minha Foto"
                className="img-fluid rounded-circle"
                style={{ width: '25rem' }}
            />
            </div>

          <div className="col-lg-6 text-center" style={{ display:'flex', flexDirection:'column', textAlign:'center', padding:'3rem' }}>
            <h2 className="display-4 fw-bold">Rafael Suyama</h2>
            <p className="lead" style={{ textAlign: 'justify' }}>
              Sou um profissional apaixonado por tecnologia, advogado e programador. Combinando habilidades em direito, programação e análise de dados, busco soluções inovadoras para desafios complexos.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Além da minha formação em Direito, tenho experiência em desenvolvimento de software, utilizando tecnologias como Python, JavaScript, Excel, VBA e Access. Sempre em busca de aprendizado e crescimento profissional.
            </p>
            <p style={{ textAlign: 'justify' }}>
              Se você procura alguém com uma abordagem multidisciplinar e focado em resultados, ficarei feliz em contribuir para o sucesso do seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
