import sugerenciaInput from "./sugerenciaInput.js";

export default function validacionInputPrincipal(valorDelPais="",valorSelect="") {
    if(valorDelPais.trim() == '') {
        return sugerenciaInput(valorSelect,valorDelPais)
    }
    else if(valorDelPais.match(/[0-9]/)) {
        return sugerenciaInput(valorSelect,valorDelPais)
    }
    return null;
}