//B) Cofla vuelve de la comisaría exausto y por lo cansado que estaba se fue a dormir ...
// Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere ser programador y se incribió en la
// facultad de ingeniería para estudiar desarrollo de software).
// En su curso en total son 19 alumnos, pero surgió un problema que complico un poco a la facultad:
// se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de
// ningun tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.

let alumnos = new Array(19).fill(0); //Crea un aray con 19 casillas de 0
let dias = 30; //cantidad de dias
//los deje como variables para poder modificarlos a gusto

function validarPresencia(presente, alumno) {
    if(presente) alumnos[alumno] +=1;
}

function estaReprobado(alumno) {
    let asistencias = alumnos[alumno];
    let inasistencias = dias - asistencias;

    return (inasistencias > asistencias);
}

for (let e = 0; e < dias; e++) {
    for (let i = 0; i < alumnos.length; i++) {
        validarPresencia(prompt(`alumno ${i+1} esta presente?, dia${e+1}`).toLowerCase() == "si", i);
    }
}

for (let i = 0; i < alumnos.length; i++) {
    alert(`Alumno ${i+1} tiene ${alumnos[i]} presentes y ${dias - alumnos[i]} ausentes, esta Reprobado? ${estaReprobado(i)}`)
}