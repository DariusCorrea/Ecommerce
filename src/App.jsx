
import React from "react"

import NavBar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemListContainer/itemListContainer"
import CartWidget from "./components/CartWidget/cartwidget"
function App() {
    return (
<div>
        <NavBar/>
    <ItemsListContainer greeting={"Bienvenidos al Mercado"}/>
    

</div>

    )
}

export default App