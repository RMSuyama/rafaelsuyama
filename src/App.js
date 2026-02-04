import React from 'react';
import Nav from './components/navbar/nav';
import Home from './components/views/cardsHabilities';
import Rodape from './components/navbar/rodape';
import SobreMim from './components/views/sobre';
import LegalOpsComponent from './components/views/legalops';
import ControladoriaJuridicaComponent from './components/views/controladoria';
import JoinUsView from './components/views/joinus';
import ExperienciaProfissional from './components/views/trajetoria';
import FormacaoAcademica from './components/views/formacao';
import LegalSolutions from './components/views/LegalSolutions';




import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className='app'>
        <Nav></Nav>

        <Home></Home>
        <SobreMim></SobreMim>
        <ControladoriaJuridicaComponent></ControladoriaJuridicaComponent>
        <LegalOpsComponent></LegalOpsComponent>
        <FormacaoAcademica></FormacaoAcademica>
        <ExperienciaProfissional></ExperienciaProfissional>
        <LegalSolutions></LegalSolutions>
        <JoinUsView></JoinUsView>
        <Rodape></Rodape>
      </div>
    </LanguageProvider>
  )
}

export default App;
