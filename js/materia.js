
const materiasInternacionales = [
    {
    id: 1,
    nombre: "economia internacional",
    cupo: 20,
    modalidad: "presencial",
},
{
    id: 2,
    nombre: "ejecucion y control en entornos inciertos",
    cupo: 30,
    modalidad: "hibrida",
},
{
    id: 3,
    nombre: "integral entreprenership",
    cupo: 25,
    modalidad: "online",
},
{
    id: 4,
    nombre: "asset managment",
    cupo: 25,
    modalidad: "online",
}
]

let button = document.getElementById ("button")
button.addEventListener ("click", inscripcion)

materiasInternacionales.forEach((mei) => {
    //CUPO
    
    //BOTON
    button.setAttribute('cupo', mei.id)
    button.addEventListener('click', inscripcion)

})
let cupoMateria1 = 0
    
function inscripcion () {
    let materiaElegida = materiasInternacionales ["id"]
    if (materiaElegida == cupoMateria1 <= 20){
        cupoMateria1 = cupoMateria1 +1;
        console.log ("inscripto")
    } 
    else if (materiaElegida == cupoMateria1 >= 20){
        console.log ("No hay mas cupo para la materia.")
}
}




/*function materia2 () {
    let respuesta2 = prompt ("Ingresa la materia optativa Regular a la que queres inscribirte");
    if (respuesta2 == "bitcoin"){
        alert("ok")
    } else if (respuesta2 !== "bitcoin"){
        alert ("Esa materia no existe")
    }
        if (respuesta2 == "bitcoin" && cupo <= 20){
            cupo = cupo +1;
        alert("inscripto!")
    } else if (respuesta2 !== "bitcoin") {
        alert ("Selecciona otra materia.")
    }
    else {
        alert ("No hay mas cupo para la materia.")
    }
    return respuesta2
    
}

materia2()
console.log (cupo)

    alert ("Felicitaciones! te inscribiste a las materias" (respuesta + respuesta2))*/


    



