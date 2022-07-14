export default function plantillaError(nombreDelPais="") {
    return `
        <div class="plantillaError">
            <div class="plantillaError_container1">
                <div class="plantillaError_container2">
                    <div>
                        <p class="mensajeDeError"><span>${nombreDelPais}</span> no fue encontrado</p> 
                        <p class="cierreCard">X</p>
                    </div>
                    <div class="contenedorImagen">
                        <figure>
                            <img src="../imgs/undraw_page_not_found_re_e9o6.svg" class="not_found"></img>
                        </figure>
                    </div>    
                </div>
            </div>
        </div>
    `
}