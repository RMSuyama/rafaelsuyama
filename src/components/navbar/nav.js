import React from "react";
import Gmail from '../../statics/img/gmail.png'
import Github from '../../statics/img/github.png'
import Whatsapp from '../../statics/img/whatsapp.png'
import LinkedIn from '../../statics/img/linkedin.png'
import Instagram from '../../statics/img/insta.png'

function Nav() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        <div class="navbar-brand " style={{textAlign: "center", marginLeft: '1vw'}}>
          <h1 id="nomeLogo"><span/>Rafael <br/> Suyama</h1>
          <h6>Controladoria Jurídica e Legal Ops</h6>
        </div>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Minhas Redes Sociais
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body" style={{ color: 'black' }}>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <a class="nav-link" aria-current="page" href="https://www.linkedin.com/in/rafael-moreira-suyama-0043bb189/">
                <img src={LinkedIn} style={{ width: '4rem', marginRight: '1rem' }} alt="Github Logo"></img> 
                  LinkedIn
                </a>
              </li>
              <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <a class="nav-link" href="https://www.instagram.com/rafael.suyama/">
                <img src={Instagram} style={{ width: '4rem', marginRight: '1rem' }} alt="Github Logo"></img> 
                  Instagram
                </a>
              </li>
              <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <a class="nav-link" href="mailto:rafaelmoreirasuyama@gmail.com">
                <img src={Gmail} style={{ width: '4rem', marginRight: '1rem' }} alt="Github Logo"></img> 
                  Gmail
                </a>
              </li>
              <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <a class="nav-link" href="https://wa.me/+5513996267989">
                <img src={Whatsapp} style={{ width: '4rem', marginRight: '1rem' }} alt="Github Logo"></img> 
                  Whatsapp
                </a>
              </li>
              <li class="nav-item" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <a class="nav-link" href="https://github.com/RMSuyama">
                <img src={Github} style={{ width: '4rem', marginRight: '1rem' }} alt="Github Logo"></img>
                  Github
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
