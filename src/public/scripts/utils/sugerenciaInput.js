export default function sugerenciaInput(valorSelect) {
    let sugerencia = ""
    switch(valorSelect) {
        case 'nombre':
            sugerencia = "<h3>Debes digitar el nombre de un pais</h3>"
            break;
        case 'capital':
            sugerencia = "<h3>Debes digitar la capital de un pais</h3>"
            break;
        case 'moneda':
            sugerencia = "<h3>Debes digitar la moneda de un pais</h3>"
            break;
        case 'idioma':
            sugerencia = "<h3>Debes digitar el idioma de un pais</h3>"
            break;
        default:
            if(valorSelect.match(/[0-9]/)) {
                sugerencia = "<h3>No se permiten numeros</h3>"
            }
    }
    return sugerencia;
}