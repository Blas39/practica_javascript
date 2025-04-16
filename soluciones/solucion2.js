//Un joven muy afortunado logro ganar el primer premio de la loteria ... exacto, estamos hablando del pobre al que cofla le
//dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con
//este milllonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas ...

let alreadyUsedFreePass = false;

document.write("FIESTA")
document.write("<br>");

function validarCliente(tiempo) {
    let edad = prompt("Cuantos Años tienes?")

    if(edad >= 18) {
        if(tiempo >= 2 && tiempo <= 7 && !alreadyUsedFreePass) {
            alert("Puedes Pasar Gratis")
            alreadyUsedFreePass = true
        }else{
            alert("Puedes Pasar pero no gratis")
        }
    }else{
        alert("Menores de edad no pasan")
    }
}

validarCliente(1)
validarCliente(3)
validarCliente(4)
    