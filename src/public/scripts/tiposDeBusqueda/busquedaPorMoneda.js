import plantillaDelPais from "./plantillaDePais.js"

export default function busquedaDePaisPorMoneda(moneda) {
    return fetch(`https://restcountries.com/v3.1/currency/${moneda}`)
    .then(res => res.json())
    .then(paises => {
        return plantillaDelPais(paises)
    })
}