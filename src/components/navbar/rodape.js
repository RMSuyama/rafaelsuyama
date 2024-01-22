import React from "react";
import Gmail from '../../statics/img/gmail.png'
import Github from '../../statics/img/github.png'
import Whatsapp from '../../statics/img/whatsapp.png'
import LinkedIn from '../../statics/img/linkedin.png'
import Instagram from '../../statics/img/insta.png'

function Rodape() {
  return (
    <div class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid" style={{display:'flex', flexDirection:'column'}}>
        <div class="navbar-brand " style={{textAlign: "center", marginLeft: '1vw', marginBottom:'1rem'}}>
          <h1 id="nomeLogo"><span/>Rafael <br/> Suyama</h1>
          <h6>Controladoria Jurídica e Legal Ops</h6>
        </div>
        
        <div class="offcanvas-body" style={{ color: 'black' }}>
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ display: 'flex', flexDirection: 'row' }}>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={LinkedIn} className="img-fluid" style={{ width: '5rem' }} alt="LinkedIn Logo"></img>
            LinkedIn
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://www.instagram.com/rafael.suyama/" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Instagram} className="img-fluid" style={{ width: '5rem' }} alt="Instagram Logo"></img>
            Instagram
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="mailto:rafaelmoreirasuyama@gmail.com" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Gmail} className="img-fluid" style={{ width: '5rem' }} alt="Gmail Logo" />
            Gmail
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://wa.me/+5513996267989" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Whatsapp} className="img-fluid" style={{ width: '5rem' }} alt="Whatsapp Logo"></img>
            Whatsapp
          </a>
        </li>
        <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '1rem' }}>
          <a class="nav-link" href="https://github.com/RMSuyama" style={{ textAlign: 'center', marginRight: '1rem' }}>
            <img src={Github} className="img-fluid" style={{ width: '5rem' }} alt="Github Logo"></img>
            Github
          </a>
        </li>
      </ul>
      </div>
      </div>
    </div>
  );
}

export default Rodape;