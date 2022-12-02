
import React from "react"
import NavBar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemListContainer/itemListContainer"
import Boton from "./components/Navbar/Boton"

function App() {
    return (
<div>
        <NavBar/>
    <ItemsListContainer greeting={"Bienvenidos al Mercado"}/>
    <Boton/>
</div>
)
}

export default App