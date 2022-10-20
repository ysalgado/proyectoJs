
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

let ofertaAcademica = document.getElementById('items')
/*let button = document.getElementById ("button")
button.addEventListener ("click", inscripcion)*/

materiasInternacionales.forEach((mei) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h4")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = mei.nombre
    //CUPO
    let cardCupo= document.createElement("p")
    cardCupo.classList.add('card-text')
    cardCupo.innerText = `Vacantes: ${mei.cupo}`
    //BOTON
    let cardButton= document.createElement("button")
    cardButton.classList.add('btn', 'btn-secondary')
    cardButton.innerText = `Quiero inscribirme`
    button.setAttribute('cupo', mei.id)
    button.addEventListener('click', inscripcion)

    cardBody.append(cardTitle)
    cardBody.append(cardCupo)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(container)

})

    
/*function inscripcion () {
    let materiaElegida = materiasInternacionales ["id"]
    if (materiaElegida == cupoMateria1 <= 20){
        cupoMateria1 = cupoMateria1 +1;
        console.log ("inscripto")
    } 
    else if (materiaElegida == cupoMateria1 >= 20){
        console.log ("No hay mas cupo para la materia.")
}
}*/





