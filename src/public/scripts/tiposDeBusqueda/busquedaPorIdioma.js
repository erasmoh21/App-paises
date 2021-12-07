
export default function busquedaDelPaisPorIdioma(idioma) {
    return fetch(`https://restcountries.com/v3.1/lang/${idioma}`)
    .then(res => res.json())
    .then(pais => {
        return pais
    })
}