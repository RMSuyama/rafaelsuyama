import React from "react";
import codeGif from "../../img/gif/code.gif";
import chart from '../../img/gif/chart.gif'
import python from '../../img/gif/python.gif'
import data from '../../img/gif/database.gif'

function Home() {
  return (
    <div className="container-fluid bg-light" style={{ padding: '3rem' }}>
      <div className="row d-flex justify-content-center">

        <div className="col-md-3 mb-3 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem', padding: '1rem', alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={codeGif} style={{ width: '6rem', padding: "1rem" }} alt="Code GIF" />
            </div>
            <p style={{ fontFamily: 'Share Tech, sans-serif', textAlign: "center" }}>
              Procurando um desenvolvedor apaixonado por código? Conte comigo para trazer soluções inovadoras para sua equipe!
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-3 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem', padding: '1rem', alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={chart} style={{ width: '6rem', padding: "1rem" }} alt="Code GIF" />
            </div>
            <p style={{ fontFamily: 'Share Tech, sans-serif', textAlign: "center" }}>
              Precisa de alguém especializado em análise de dados? Estou aqui para transformar números em insights valiosos para o seu negócio.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-3 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem', padding: '1rem', alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={python} style={{ width: '6rem', padding: "1rem" }} alt="Code GIF" />
            </div>
            <p style={{ fontFamily: 'Share Tech, sans-serif', textAlign: "center" }}>
              Em busca de um profissional versátil? Sou programador e advogado, pronto para lidar com desafios e oferecer soluções inteligentes.
            </p>
          </div>
        </div>

        <div className="col-md-3 mb-3 d-flex justify-content-center">
          <div className="card" style={{ width: '18rem', padding: '1rem', alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={data} style={{ width: '6rem', padding: "1rem" }} alt="Code GIF" />
            </div>
            <p style={{ fontFamily: 'Share Tech, sans-serif', textAlign: "center" }}>
              Advogado com conhecimentos em Big Data? Posso contribuir para a sua empresa entendendo e aplicando as melhores práticas legais.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
