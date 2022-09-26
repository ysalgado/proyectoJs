

let cupo = 0
    
function materia () {
    let respuesta = prompt ("Ingresa la materia optativa Internacional a la que queres inscribirte");
    if (respuesta == "economia"){
        alert("ok")
    } else if (respuesta !== "economia"){
        alert ("Esa materia no existe")
    }
        if (respuesta == "economia" && cupo <= 20){
        cupo = cupo +1;
        alert("inscripto!")
    } else if (respuesta !== "economia") {
        alert ("Selecciona otra materia.")
    }
    else {
        alert ("No hay mas cupo para la materia.")
    }
    return respuesta
}

materia()
console.log (cupo)

function materia2 () {
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

    alert ("Felicitaciones! te inscribiste a las materias" (respuesta + respuesta2))








