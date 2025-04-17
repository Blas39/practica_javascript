class Calculadora {
    static suma(num1, num2){return (parseInt(num1) + parseInt(num2))}
    static resta(num1, num2){return (parseInt(num1) - parseInt(num2))}
    static mult(num1, num2){return (parseInt(num1) * parseInt(num2))}
    static division(num1, num2){return (parseInt(num1) / parseInt(num2))}
    static potencia(num1, num2) {return Math.pow(num1, num2)}
    static raizcuadrada(num1) {return Math.sqrt(num1)}
    static raizcubica(num1) {return Math.cbrt(num1)}
}

function realizarOperacion(id) {
    if(id < 1 || id > 7 || isNaN(id)) {
        return "Operacion no VALIDA";
    }    

    let numero1, numero2 = 0;

    numero1 = parseFloat(prompt("Ingrese Numero 1"));
    if(id < 6) numero2 = parseFloat(prompt("Ingrese Numero 2"));
    if(isNaN(numero1) || isNaN(numero2)) return "Numeros NO VALIDOS";

    switch (id) {
        case 1: return Calculadora.suma(numero1, numero2);          
        case 2: return Calculadora.resta(numero1, numero2);     
        case 3: return Calculadora.mult(numero1, numero2);
        case 4: return Calculadora.divsion(numero1, numero2);
        case 5: return Calculadora.potencia(numero1, numero2);
        case 6: return Calculadora.raizcuadrada(numero1);
        case 7: return Calculadora.raizcubica(numero1);
    }
}

let operacion = parseInt(prompt("Que Operacion quieres realizar, 1 = suma, 2 = resta, 3 = multiplicacion, 4 = division, 5 = potencia, 6 = raiz cuadrada, 7 = raiz cubica"));
document.write(`Resultado: ${realizarOperacion(operacion)}`);
