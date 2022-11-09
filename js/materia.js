
const materiasInternacionales = [
    {
    id: 1,
    nombre: "Economia Internacional",
    cupo: 20,
    modalidad: "Presencial",
},
{
    id: 2,
    nombre: "Ejecucion y Control en entornos inciertos",
    cupo: 30,
    modalidad: "Híbrida",
},
{
    id: 3,
    nombre: "Integral Entreprenership",
    cupo: 25,
    modalidad: "Online",
},
{
    id: 4,
    nombre: "Asset Managment",
    cupo: 25,
    modalidad: "Online",
}
]

let ofertaAcademica = document.getElementById('items')
let course = document.getElementById("course")
let misMaterias = []

loadCourseFromStorage()
renderCourse()

materiasInternacionales.forEach((mei) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-xs-4')
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
    cardButton.classList.add('btn', 'btn-outline-secondary')
    cardButton.innerText = `Quiero inscribirme`
    button.setAttribute('cupo', mei.id)
    button.addEventListener('click', inscripcion)

    cardBody.append(cardTitle)
    cardBody.append(cardCupo)
    cardBody.append(cardButton)
    container.append(cardBody)
    ofertaAcademica.append(container)

})

function inscripcion(event){
    misMaterias.push(event.target.getAttribute('cupo'))
    renderCourse()
}
function renderCourse(){

    saveMisMateriasToStorage()

    course.innerHTML = ''

    function saveMisMateriasToStorage(){
    localStorage.setItem('course', JSON.stringify(course))
    }
} 
function loadCourseFromStorage(){
    if(localStorage.getItem('course') !== null){
        course = JSON.parse(localStorage.getItem('course'))
    }
}
