import elementosDelDom from "./utils/elementosDelDom.js"
import cambioDePlaceholderDeInput from "./utils/cambioPlaceHolderInput.js"
import manejadorDeTipoDePeticiones from "./utils/manejadorDePeticiones.js"
import buscarCoincidencias from './busquedaCoincidenciasInput/busquedaCoincidencias.js'
let paisABuscar = ''

elementosDelDom.formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    elementosDelDom.elementoContenedorDelPais.style.visibility = "visible"
    elementosDelDom.elementoContenedorDelPais.style.opacity = "1"

    manejadorDeTipoDePeticiones(elementosDelDom.select.value)

    elementosDelDom.formulario.reset()
})

elementosDelDom.select.addEventListener('change',() => {
    cambioDePlaceholderDeInput(elementosDelDom.select,elementosDelDom.pais)
})

elementosDelDom.pais.addEventListener('keypress', (e) => {
    paisABuscar += e.key 
    
    elementosDelDom.contenedorSugerencia.style.display = "block"
    buscarCoincidencias(paisABuscar).forEach(el => {
        elementosDelDom.contenedorSugerencia.innerHTML = `<p class="paisesSugeridos">${el}</p>` 
    })
})