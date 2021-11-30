const formulario = document.getElementById('form')
const pais = document.getElementById('inputFormulario')
const elementoContenedorDelPais = document.documentElement.querySelector('.contenedorPais')
var cierreBanner = document.documentElement.querySelector('.simboloCierre')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${pais.value}`)
    .then(res => res.json())
    .then(pais => {
        elementoContenedorDelPais.style.visibility = "visible"
        elementoContenedorDelPais.style.opacity = "1"

        let paisEspecifico = `
            <div class="pais">
                <div class="hola">
                    <div class="cierreBanner">
                        <p class="simboloCierre">X<p>
                    </div>
                    <header>
                        <h2>${pais[0].name.common}</h2>
                    </header>

                    <figure>
                        <img src="${pais[0].flags.svg}">
                    </figure> 
                    
                    <div>
                        <p>Capital: ${pais[0].capital[0]}
                        <p>Poblacion: ${pais[0].population} </p>
                        <p>Continente: ${pais[0].subregion}</p>
                        <p>Mapa de ${pais[0].name.common}: <a href="${pais[0].maps.googleMaps}
                        target="_blank" rel="noopener">Link</a> </p>
                    </div>
                </div>
            </div>           
        `
        console.log(pais)
        elementoContenedorDelPais.innerHTML = paisEspecifico
    })

    formulario.reset()
})

console.log(document.documentElement)