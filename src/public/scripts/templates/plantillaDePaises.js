export default function plantillaDeVariosPaises(pais,iterator) {
    return`
        <div class="pais">
            <div class="hola">
                <header>
                    <h2>${pais[iterator].name.common}</h2>
                </header>

                <figure>
                    <img src="${pais[iterator].flags.svg}">
                </figure> 
                    
                <div>
                    <p>Capital: ${pais[iterator].capital[0]}
                    <p>Poblacion: ${pais[iterator].population} </p>
                    <p>Continente: ${pais[iterator].subregion}</p>
                    <p>Mapa de ${pais[iterator].name.common}: <a href="${pais[iterator].maps.googleMaps}target="_blank" rel="noopener">Link</a> </p>
                </div>
            </div>
        </div>        
    `
}