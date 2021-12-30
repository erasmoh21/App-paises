import plantillaDelPais from "../templates/plantillaDePais.js"

export default function busquedaDePaisPorCapital(nombrePais) {
    return fetch(`https://restcountries.com/v3.1/capital/${nombrePais}`)
    .then(res => res.json())
    .then(pais => {
        return plantillaDelPais(pais)
    })
}