import React from "react";
import css from '../navbar/nav.css'

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
              Rafael Suyama
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
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">
                  Advogado
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Programador
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Professor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cantor
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Instrumentista
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Escritor
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
