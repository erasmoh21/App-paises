import elementosDelDom from "./elementosDelDom.js";
import busquedaDePaisPorNombre from "../tiposDeBusqueda/busquedaPaisPorNombre.js";
import busquedaDelPaisPorIdioma from "../tiposDeBusqueda/busquedaPorIdioma.js";
import busquedaDePaisPorCapital from "../tiposDeBusqueda/busquedaPorCapital.js";
import busquedaDePaisPorMoneda from "../tiposDeBusqueda/busquedaPorMoneda.js";
import plantillaDeVariosPaises from "../templates/plantillaDePaises.js";

export default function manejadorDeTipoDePeticiones(valorSelect) {

    switch(valorSelect) {
        case "capital":
            busquedaDePaisPorCapital(elementosDelDom.pais.value)
            .then(response => {
                elementosDelDom.elementoContenedorDelPais.innerHTML = response
            })
            break;

        case "idioma":
            busquedaDelPaisPorIdioma(elementosDelDom.pais.value)
            .then(response => {
                for(let i = 0; i < response.length; i++) {
                    elementosDelDom.otroContendor.innerHTML += plantillaDeVariosPaises(response,i)
                }
            })
            break;

        case "moneda":
            busquedaDePaisPorMoneda(elementosDelDom.pais.value)
            .then(response => {
                for(let i = 0;i  < response.length; i++) {
                    elementosDelDom.otroContendor.innerHTML += plantillaDeVariosPaises(response,i)
                }
            })
            break;

        case "nombre":
            busquedaDePaisPorNombre(elementosDelDom.pais.value)
            .then(response => {
                elementosDelDom.elementoContenedorDelPais.innerHTML = response
            })
            break
    }
}