/* Crear componente funcional NAVBAR */
import React from "react";
import CartWidget from "../CartWidget/cartwidget";
import { Link } from "react-router-dom";
const NavBar =() =>{
  const verProducto= ()=>{
    console.log("Ver Productos")
     }
     const ProductoEnCarrito =()=>{
      console.log ("Producto en carrito")
     }
    return(
<nav class="navbar navbar-expand-lg header__edit">
  <div class="container-fluid">
    <a class="navbar-brand nav-link ">El mercado</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <a class="nav-link " aria-current="page"> Inicio</a>
        <a class="nav-link" href="#">Ofertas</a>
        <a class="nav-link" href="/" onClick={verProducto}><Link to="/Productos">Productos</Link></a>
        <a class="nav-link" onClick={ProductoEnCarrito}><CartWidget/></a>
        
      </div>
    </div>
  </div>
</nav>

    )
}
    export default NavBar;
