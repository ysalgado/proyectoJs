

/*let quieroInscribirme = document.getElementById("button").onclick=prompt ("Estas seguro de inscribirte?")*/


let materiaInternacional1 = {
    nombre: "economia internacional",
    cupo: 20,
    modalidad: "presencial",
}

let materiaInternacional2 = {
    nombre: "ejecucion y control en entornos inciertos",
    cupo: 30,
    modalidad: "hibrida",
}


let cupo = 0
    
function materia () {
    let respuesta = prompt ("Ingresa la materia optativa Internacional a la que queres inscribirte");
    if (respuesta == "economia internacional"){
        alert("ok")
    } else if (respuesta !== "economia"){
        alert ("Lo siento ingresaste una materia incorrecta")
    }
        if (respuesta == "economia internacional" && cupo <= 20){
        cupo = cupo +1;
        alert("inscripto!")
    } else if (respuesta !== "economia internacional") {
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








