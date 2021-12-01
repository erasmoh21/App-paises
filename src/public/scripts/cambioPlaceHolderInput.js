export default function cambioDePlaceholderDeInput(valorSelect,input) {
    if(valorSelect.value == "nombre") {
        return input.setAttribute("placeholder","Digite el nombre del pais")
    }
    else if(valorSelect.value == "capital") {
        return input.setAttribute("placeholder","Digite la Capital del pais")
    }
    else if(valorSelect.value == "idioma") {
        return input.setAttribute("placeholder","Digite el Idioma del pais")
    }
    else if(valorSelect.value == "moneda") {
        return input.setAttribute("placeholder","Digite la moneda del pais")
    }
}