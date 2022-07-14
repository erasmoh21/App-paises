import elementosDelDom from "./utils/elementosDelDom.js"
import validacionInputPrincipal from "./utils/validarInputPrincipal.js"
import cambioDePlaceholderDeInput from "./utils/cambioPlaceHolderInput.js"
import manejadorDeTipoDePeticiones from "./utils/manejadorDePeticiones.js"
import buscarCoincidencias from './busquedaCoincidenciasInput/busquedaCoincidencias.js'
import plantillaDelPais from './templates/plantillaDePais.js'
let paisABuscar = ''

elementosDelDom.formulario.addEventListener('submit',(e) => {
    e.preventDefault()
    const pais = elementosDelDom.pais.value
    const valorDelSelect = elementosDelDom.select.value

    if(validacionInputPrincipal(pais,valorDelSelect) != null) {
        elementosDelDom.contenedorMain.innerHTML += validacionInputPrincipal(pais,valorDelSelect)
    }
    else {
        elementosDelDom.elementoContenedorDelPais.style.visibility = "visible"
        elementosDelDom.elementoContenedorDelPais.style.opacity = "1"
        manejadorDeTipoDePeticiones(valorDelSelect,pais)
        elementosDelDom.formulario.reset()
    }
})

elementosDelDom.select.addEventListener('change',() => {
    cambioDePlaceholderDeInput(elementosDelDom.select,elementosDelDom.pais)
})

elementosDelDom.pais.addEventListener('keyup', (e) => {
    if(e.key == "Backspace") {
        paisABuscar = elementosDelDom.pais.value.trim()
    }
    else {
        if(!e.metaKey) {
            paisABuscar += e.key 
        }
    }
    
    elementosDelDom.contenedorSugerencia.style.display = "block"
    buscarCoincidencias(paisABuscar).forEach(el => {
        elementosDelDom.contenedorSugerencia.innerHTML = `<p class='paisesSugeridos'>${el}</p>` 
    })
})

elementosDelDom.contenedorSugerencia.addEventListener('click',(e) => {
    const paisDeBarraSugerencia = e.target.innerHTML

    fetch(`https://restcountries.com/v3.1/name/${paisDeBarraSugerencia}`)
    .then(res => res.json())
    .then(pais => {
        elementosDelDom.elementoContenedorDelPais.style.visibility = "visible"
        elementosDelDom.elementoContenedorDelPais.style.opacity = "1"
        elementosDelDom.elementoContenedorDelPais.innerHTML = plantillaDelPais(pais) 
    })
})

elementosDelDom.elementoContenedorDelPais.addEventListener('click',(e) => {
    if(e.target.className == 'cierreCard') {
        elementosDelDom.elementoContenedorDelPais.style.visibility = "hidden"
        elementosDelDom.elementoContenedorDelPais.style.opacity = "0"
        document.querySelector('.pais').remove()
        paisABuscar=''
    }
})