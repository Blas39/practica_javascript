
/*for (let i = 6; i >= 6, i--;) {
    document.write(i + "<br>")
}

let alimentos = ["pure", "pollo", "chuleta", "menestra"]

for(alimento of alimentos) document.write(alimento);*/

function saludar() {
    alert("hola");
    return "funcion"
}

function suma(a, b) {
    return a + b;
}

let saludo = saludar();

document.write(suma(2, 5))