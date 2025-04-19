class MateriaDatos {
    constructor() {}

    materias = { //es un objeto
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

    verMateria(materia) {
        if (!this.materias[materia]) return document.write(`<p style="color:red;"><strong>MATERIA NO ENCONTRADA</strong></p>`);
    
        let alumnosName = this.materias[materia]["alumnos"].map(alumno => toUpperCaseFirstLetter(alumno)).join(", ");
        document.write(`
            <h2 style="font-family:sans-serif;">${toUpperCaseFirstLetter(materia)}</h2>
            <p><strong>Profesor:</strong> ${this.materias[materia].profesor}</p>
            <p><strong>Alumnos:</strong> ${alumnosName}</p>
        `);
    }

    verClasesDeAlumno(alumno) {
        let clases = [];
    
        for (let materia in this.materias) {
            if (this.materias[materia].alumnos.includes(alumno)) clases.push(materia);
        }
    
        if (clases.length == 0) 
            return document.write(`<p style="color:red;">${toUpperCaseFirstLetter(alumno)} no está inscrito en ninguna clase.</p>`);
    
        let profesores = clases.map(clase => this.materias[clase].profesor);
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

    inscribir(alumno, materia) {
        if (!this.materias[materia]) {
            alert(`La materia "${materia}" no existe`);
        }else if (this.materias[materia].alumnos.includes(alumno)) {
            alert(`${toUpperCaseFirstLetter(alumno)} ya está inscrito en este curso`);
        } else if (this.materias[materia].alumnos.length >= 20) {
            alert(`El curso ya está lleno`);
        } else {
            this. materias[materia].alumnos.push(alumno);
            alert(`${toUpperCaseFirstLetter(alumno)} se ha inscrito en el curso ${materia}`);
        }
        ejecutarComando();
    }
}

function toUpperCaseFirstLetter(str) {return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();} 
//toma el primer caracter, le aplica el uppercase y al resto del string lowercase

const datos = new MateriaDatos();
function ejecutarComando() {
    let comando = prompt("Elige comando (materia_info, clases_alumno, inscribir_alumno)").toLowerCase();
    switch (comando) {
        case "materia_info":
            datos.verMateria(prompt("Escribe la Materia para ver Info").toLowerCase());     
            break;
        case "clases_alumno":
            datos.verClasesDeAlumno(prompt("Escribe Estudiante").toLowerCase());
            break;
        case "inscribir_alumno":
            datos.inscribir(prompt("Escribe Estudiante").toLowerCase(), prompt("Escribe la Materia para inscribir").toLowerCase());
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
