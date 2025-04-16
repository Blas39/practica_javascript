function suma(num1, num2){return (parseInt(num1) + parseInt(num2))}
function resta(num1, num2){return (parseInt(num1) - parseInt(num2))}
function mult(num1, num2){return (parseInt(num1) * parseInt(num2))}
function divi(num1, num2){return (parseInt(num1) / parseInt(num2))}

function realizarOperacion(id) {
    if(id < 1 || id > 4) {
        alert("Operacion no VALIDA");
        return;
    }

    let numero1 = prompt("Ingrese Numero 1");
    let numero2 = prompt("Ingrese Numero 2");

    switch (id) {
        case 1:
            alert(suma(numero1, numero2));            
            break;

        case 2:
            alert(resta(numero1, numero2));  
            break;
            
        case 3:
            alert(mult(numero1, numero2));
            break;

        case 4:
            alert(divi(numero1, numero2));
            break;
    }
}

let operacion = parseInt(prompt("Que Operacion quieres realizar, 1 = suma, 2 = resta, 3 = multiplicacion, 4 = division"));
realizarOperacion(operacion);
