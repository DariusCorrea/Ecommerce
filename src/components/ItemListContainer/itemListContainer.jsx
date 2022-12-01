import react from "react";



export const ItemsListContainer = (Prop) =>{
    return(
<div>
<button type="button" class="btn btn-secondary editar__boton">{Prop.greeting}</button>

  <h1>Productos a vender</h1>

  </div>
    )
}

export default ItemsListContainer 
