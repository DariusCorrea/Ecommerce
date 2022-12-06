
import{
    BrowserRouter,
    Routes,
    Route,
    } 
    from "react-router-dom"
    import Inicio from "./Page/Inicio"
    import Productos from "./Page/Productos"
    import Detalles from "./Page/Detalles"
    import NavBar from "./components/Navbar/Navbar"
import ItemsListContainer from "./components/ItemListContainer/itemListContainer"
import Boton from "./components/Navbar/Boton"
function App() {
    return (
    <BrowserRouter>
    <NavBar/>
    <ItemsListContainer greeting={"Bienvenidos al Mercado"}/>
    <Boton/>
    <Routes>
    <Route exact path="Inicio" element={<Inicio/>}/>
    <Route path="Productos" element= {<Productos/>}/>
    <Route path="Detalles/:name/:categoria" element= {<Detalles/>}/>
    </Routes>
    </BrowserRouter> 

);
}

export default App