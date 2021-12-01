export default function plantillaDelPais(pais) {
    if(pais.length > 1) {
        for(let i = 0; i < pais.length; i++) {
            `
            <div class="pais">
                <div class="hola">
                    <div class="cierreBanner">
                        <p class="simboloCierre">X<p>
                    </div>
                    <header>
                        <h2>${pais[i].name.common}</h2>
                    </header>

                    <figure>
                        <img src="${pais[i].flags.svg}">
                    </figure> 
                    
                <div>
                    <p>Capital: ${pais[i].capital[0]}
                    <p>Poblacion: ${pais[i].population} </p>
                    <p>Continente: ${pais[i].subregion}</p>
                    <p>Mapa de ${pais[i].name.common}: <a href="${pais[i].maps.googleMaps}target="_blank" rel="noopener">Link</a> </p>
                </div>
            </div>
        </div>        
        `
        }
    }
    else {
        return `
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
                    <p>Mapa de ${pais[0].name.common}: <a href="${pais[0].maps.googleMaps}target="_blank" rel="noopener">Link</a> </p>
                </div>
            </div>
        </div>        
        `
    }
}