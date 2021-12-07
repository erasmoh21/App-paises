export default function plantillaDelPais(pais) {
        return `
        <div class="pais">
            <div class="hola">
            
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
                    <p>Mapa de ${pais[0].name.common}: <a href="${pais[0].maps.googleMaps}target="_blank" rel="noopener">Link</a> </p>
                </div>
            </div>
        </div>        
        `
}
