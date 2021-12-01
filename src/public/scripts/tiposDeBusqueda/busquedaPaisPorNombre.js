import plantillaDelPais from "./plantillaDePais.js";

export default function busquedaDePaisPorNombre(nombrePais) {
    return fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    .then(res => res.json())
    .then(pais => {
        return plantillaDelPais(pais)
    })
}