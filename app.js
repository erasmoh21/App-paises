const formulario = document.getElementById('form')
const pais = document.getElementById('inputFormulario')

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    fetch(`https://restcountries.com/v3.1/name/${pais.value}`)
    .then(res => res.json())
    .then(pais => {
        console.log(pais)
    })

    formulario.reset()

})