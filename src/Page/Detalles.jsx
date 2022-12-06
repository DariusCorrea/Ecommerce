
    import React from "react";
    import{
        useParams
    } from "react-router-dom";
    function Detalles (){
        const {name, categoria} = useParams();
        return(
            <h1>Detalle producto {name} / {categoria}</h1>
        )
    }
export default Detalles;

