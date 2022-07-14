import paisesTraducidosAlEspanol from '../traduccionPaises/traduccionNombrePaises.js'
const paisesTraducidosEspanol = JSON.parse(paisesTraducidosAlEspanol)

export default function buscarCoincidencias(nombrePais="") {
    let arregloDePaises = []
    let validador = false
    let paisComoArray = nombrePais.split('')

    paisesTraducidosEspanol.forEach(pais => {
        for(let i = 0; i < paisComoArray.length; i++) {
            if(Object.keys(pais)[0].charAt(i).includes(paisComoArray[i])) {
                validador = true;
            }
            if(Object.keys(pais)[0].charAt(i) !== paisComoArray[i]) {
                validador = false
                break
            }
            if(i+1 == nombrePais.length && validador) {
                arregloDePaises.push(Object.keys(pais)[0])
            }
        }
    })
   return arregloDePaises
}