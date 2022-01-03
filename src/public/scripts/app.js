import elementosDelDom from "./utils/elementosDelDom.js"
import cambioDePlaceholderDeInput from "./utils/cambioPlaceHolderInput.js"
import manejadorDeTipoDePeticiones from "./utils/manejadorDePeticiones.js"

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