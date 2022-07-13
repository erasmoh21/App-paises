export default function plantillaDelPais(pais) {
        return `
        <div class="pais">
            <div class="contenedorCaracteristicasDelPais">
            
                <header>
                    <h1>${pais[0].name.common}</h1>
                    <p class="cierreCard">X</p>
                </header>
    
                <figure>
                    <img src="${pais[0].flags.svg}">
                </figure> 
                        
                <div>
                    <p>Capital: ${pais[0].capital[0]}
                    <p>Poblacion: ${pais[0].population} </p>
                    <p>Continente: ${pais[0].subregion}</p>
                    <p>Mapa de ${pais[0].name.common}: <a href="${pais[0].maps.googleMaps}"> Link</a> </p>
                </div>
            </div>
        </div>        
      `
}