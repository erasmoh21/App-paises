import plantillaDelPais from "../templates/plantillaDePais.js"
import busquedaPais from "../traduccionPaises/buscarPaisTraducidosAlEspanol.js"

export default async function busquedaDePaisPorNombre(nombrePais) {
    const pais = await busquedaPais(nombrePais) || nombrePais;
    return fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then(res => res.json())
    .then(pais => {
        return plantillaDelPais(pais)
    })
}