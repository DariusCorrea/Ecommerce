import react from "react";



export const ItemsListContainer = (props) =>{
    return(
<div>
<button type="button" class="btn btn-secondary editar__boton">{props.greeting}</button>

  <h1>Productos a vender</h1>

  </div>
    )
}

export default ItemsListContainer 
