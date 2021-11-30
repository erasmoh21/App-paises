const formulario = document.getElementById('form')
const pais = document.getElementById('inputFormulario')
const elementoContenedorDelPais = document.querySelector('.contenedorPais')
const cierreBanner = document.querySelector('.cierreBanner')

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
                    <header>
                        <h2>${pais[0].name.common}</h2>
                        <p class="cierreBanner">X<p>
                    </header>

                    <figure>
                        <img src="${pais[0].flags.svg}">
                    </figure> 
                    
                    <div>
                        <p>Capital: ${pais[0].capital[0]}
                        <p>Poblacion: ${pais[0].population} </p>
                        <p>Continente: ${pais[0].subregion}</p>
                        <p>Nombre de la moneda: ${pais[0].currencies.COP.name}</p>
                        <p>Simbolo de la moneda: ${pais[0].currencies.COP.symbol}</p>
                        <p>Mapa de ${pais[0].name.common}: <a href="${pais[0].maps.googleMaps}
                        target="_blank">Link</a> </p>
                    </div>
                </div>
            </div>
             
        `
        console.log(pais)
        elementoContenedorDelPais.innerHTML = paisEspecifico
    })

    formulario.reset()

})

cierreBanner.addEventListener('click',() => {
    elementoContenedorDelPais.style.visibility = "hidden"
    elementoContenedorDelPais.style.opacity = "0"
})