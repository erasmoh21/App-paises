import elementosDelDom from "./elementosDelDom.js"
import busquedaDePaisPorNombre from "./tiposDeBusqueda/busquedaPaisPorNombre.js"
import busquedaDelPaisPorCapital from "./tiposDeBusqueda/busquedaPorCapital.js"
import busquedaDelPaisPorIdioma from "./tiposDeBusqueda/busquedaPorIdioma.js"
import busquedaDePaisPorMoneda from "./tiposDeBusqueda/busquedaPorMoneda.js"
import cambioDePlaceholderDeInput from "./cambioPlaceHolderInput.js"
const select = document.getElementById('tipoDeBusqueda')

elementosDelDom.formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    elementosDelDom.elementoContenedorDelPais.style.visibility = "visible"
    elementosDelDom.elementoContenedorDelPais.style.opacity = "1"

    if(select.value == "capital") {
        busquedaDelPaisPorCapital(elementosDelDom.pais.value)
        .then(response => {
            elementosDelDom.elementoContenedorDelPais.innerHTML = response
        })
    }
    else if(select.value == "idioma") {
        busquedaDelPaisPorIdioma(elementosDelDom.pais.value)
        .then(response => {
            elementosDelDom.elementoContenedorDelPais.innerHTML += response
        })
    }
    else if(select.value == "moneda") {
        busquedaDePaisPorMoneda(elementosDelDom.pais.value)
        .then(response => {
            elementosDelDom.elementoContenedorDelPais.innerHTML += response
        })
    }
    else {
        busquedaDePaisPorNombre(elementosDelDom.pais.value)
        .then(response => {
            elementosDelDom.elementoContenedorDelPais.innerHTML = response
        })
    }

    elementosDelDom.formulario.reset()
})

select.addEventListener('change',() => {
    cambioDePlaceholderDeInput(select,elementosDelDom.pais)
})