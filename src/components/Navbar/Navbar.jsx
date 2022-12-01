/* Crear componente funcional NAVBAR */
import React from "react";


const NavBar =() =>{
    return(

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light header__edit">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Mercadito</a>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Inicio </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Carrito</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
    )
    }
    
    export default NavBar;

