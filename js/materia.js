
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
    let course = document.getElementById("course");
    let misMaterias = []
    
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
        cardButton.setAttribute('cupo', mei.id)
        cardButton.addEventListener('click', inscripcion)
    
        cardBody.append(cardTitle)
        cardBody.append(cardCupo)
        cardBody.append(cardButton)
        container.append(cardBody)
        ofertaAcademica.append(container)
    
    })
    
    function inscripcion(event){
        let materiasInscriptas = localStorage.getItem('course');
        let idMateria = event.target.getAttribute('cupo');
        let existeMateria = materiasInscriptas.includes(idMateria); //ACA CHEQUEO SI LA MATERIA YA ESTA EN LA LISTA
    
        if(!existeMateria){ //SOLO LA AGREGO AL ARRAY, SI NO EXISTE
            misMaterias.push(idMateria);
            saveMisMateriasToStorage();
            mostrarMateriaInscripta(idMateria);
        }
    }
    
    function saveMisMateriasToStorage(){
        localStorage.setItem('course', JSON.stringify(misMaterias))
    }
    
    function mostrarMateriaInscripta(id) {
        //ACA GENERAMOS LOS LI PARA MOSTRAR LA MATERIA
            let materia = buscarMateria(id);
            let liMateria = document.createElement('li');
            liMateria.innerHTML = materia.nombre;
            course.appendChild(liMateria);
    }
    
    function buscarMateria(id) {
        return materiasInternacionales.find((materia) => (materia.id == id));
    }
    
    
