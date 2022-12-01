
import React from "react"

import NavBar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemListContainer/itemListContainer"
function App() {
    return (
<div>
        <NavBar/>
        
    <ItemsListContainer greeting={"Bienvenidos al Mercado"}/>

    

</div>

    )
}

export default App