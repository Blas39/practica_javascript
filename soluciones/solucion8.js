let materias = { //es un objeto
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
    },

    geografia : {
        profesor : "Ronaldo",
        alumnos : ["fernando", "roberto", "hannah", "pedro"]
    }
}

function toUpperCaseFirstLetter(str) {return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();} 
//toma el primer caracter, le aplica el uppercase y al resto del string lowercase

function verMateria(materia) {
    if (!materias[materia]) return document.write(`<p style="color:red;"><strong>MATERIA NO ENCONTRADA</strong></p>`);

    let alumnosName = materias[materia]["alumnos"].map(alumno => toUpperCaseFirstLetter(alumno)).join(", ");
    document.write(`
        <h2 style="font-family:sans-serif;">${toUpperCaseFirstLetter(materia)}</h2>
        <p><strong>Profesor:</strong> ${materias[materia].profesor}</p>
        <p><strong>Alumnos:</strong> ${alumnosName}</p>
    `);
}

function verClasesDeAlumno(alumno) {
    let clases = [];

    for (let materia in materias) {
        if (materias[materia].alumnos.includes(alumno)) clases.push(materia);
    }

    if (clases.length == 0) 
        return document.write(`<p style="color:red;">${toUpperCaseFirstLetter(alumno)} no está inscrito en ninguna clase.</p>`);

    let profesores = clases.map(clase => materias[clase].profesor);
    clases.forEach((clase, i) => { 
        clases[i] = toUpperCaseFirstLetter(clase)
    });

    let listaClases = '';
    for (let i = 0; i < clases.length; i++) listaClases += `<li>${clases[i]} [Profesor : ${profesores[i]}]</li>`;

    document.write(`
        <h2 style="font-family:sans-serif;">${toUpperCaseFirstLetter(alumno)}</h2>
        <p>Está en ${clases.length} clases:</p>
        <ul style="font-family:sans-serif;">${listaClases}</ul>
    `)
}


function inscribir(alumno, materia) {
    if (!materias[materia]) {
        alert(`La materia "${materia}" no existe`);
    }else if (materias[materia].alumnos.includes(alumno)) {
        alert(`${alumno} ya está inscrito en este curso`);
    } else if (materias[materia].alumnos.length >= 20) {
        alert(`El curso ya está lleno`);
    } else {
        materias[materia].alumnos.push(alumno);
        alert(`${alumno} se ha inscrito en el curso ${materia}`);
    }
    ejecutarComando();
}

function ejecutarComando() {
    let comando = prompt("Elige comando (materia_info, clases_alumno, inscribir_alumno)").toLowerCase();
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
        default:
            alert("No has seleccionado ningún comando")
            break;
    }
}

// MAIN
document.title = "MATERIAS";
//document.write(`<h1 style="text-align: center;">INFORMACIÓN DE MATERIAS</h1>`);
document.body.innerHTML = `<h1 style="text-align: center;">INFORMACIÓN DE MATERIAS</h1>`;
ejecutarComando();
