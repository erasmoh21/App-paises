import paisesTraducidosAlEspanol from "./traduccionNombrePaises.js";
const paisesTraducidosEspanol = JSON.parse(paisesTraducidosAlEspanol);

export default function busquedaPais(pais="") {
    let paisBuscado =""
    paisesTraducidosEspanol.forEach((paises) => {
        if(Object.keys(paises) == pais) {
            paisBuscado = Object.values(paises) 
            return;
        } 
    });
    return paisBuscado;
}
