let materias = {
    matematica : {
        profesor : "Jose",
        alumnos : ["pedro", "juan", "luis", "ana"]
    },
    
    letras : {
        profesor : "Pablo",
        alumnos : ["cofla", "gilito", "andrea", "ana"]
    },
    
    historia : {
        profesor : "Juancho",
        alumnos : ["alberto", "mario", "julio", "bob"]
    }
}

function verMateria(materia) {
    alert(`El Profesor es : ${materias[materia]["profesor"]}`);
    alert(`Lista de Alumnos: ${materias[materia]["alumnos"].join(", ")}`);
}

function verClasesDeAlumno(alumno) {
    let clases = [];

    for (let materia in materias) {
        if (materias[materia].alumnos.includes(alumno)) {
            clases.push(materia);
        }
    }

    let profesores = clases.map(clase => materias[clase]["profesor"]);

    alert(`${alumno} esta en ${clases.length} clases`);
    alert(`${alumno} esta en las clases de ${clases.join(", ")} con los profesores ${profesores.join(", ")}`);
}

function inscribir(alumno, materia) {
    if(materias[materia]["alumnos"].includes(alumno)) {
        alert(`${alumno} ya esta inscrito en este curso`);
    }else if(materias[materia]["alumnos"].length >= 20){
        alert(`El curso ya esta lleno`);
    }else{
        materias[materia]["alumnos"].push(alumno);
        alert(`${alumno} se ha inscrito en el curso ${materia} `);
    }
}

function ejecutarComando(comando) {
    switch (comando) {
        case "materia_info":
            verMateria(prompt("Escribe la Materia para ver Info").toLowerCase());        
            break;
        case "clases_alumno":
            verClasesDeAlumno(prompt("Escribe Estudiante").toLowerCase());
            break;
        case "inscribir_alumno":
            inscribir(prompt("Escribe Estudiante").toLowerCase(), prompt("Escribe la Materia para inscribir").toLowerCase());
            break;
        case "terminar":
            continuar = false;
            break;
        default:
            alert("No haz seleccionado ningun comando")
            break;
    }
}

let continuar = true;

//EJECUCION
while(continuar) {
    comando = prompt("Elige comando (materia_info, clases_alumno, inscribir_alumno, terminar").toLowerCase();
    ejecutarComando(comando);
}