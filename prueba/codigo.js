let palitoAgua = 0.6;
let palitoCrema = 1;
let bombomHeladix = 1.6;
let bombomHeladovich = 1.7;
let bombomHelardo = 1.8;
let poteConfites = 2.9;
let poteCuarto = 2.9;

alert("HOLA")
dinero = parseInt(prompt("Cuanto dinero tienes"))

if(dinero >= poteCuarto) {
    alert(`Puedes Comprar el Potecito de helado con Confites o el Pote de 1/4KG`)
    alert(`Tu vuelto ${dinero - poteCuarto}`)
}
else if (dinero >= bombomHelardo) {
    alert("Puedes comprar el Bombon helado marca helardo")
    alert(`Tu vuelto ${dinero - bombomHelardo}`)
}
else if (dinero >= bombomHeladovich) {
    alert("Puedes comprar el Bombon helado marca heladovich")
    alert(`Tu vuelto ${dinero - bombomHeladovic}`)
}
else if (dinero >= bombomHeladix) {
    alert("Puedes comprar el Bombon helado marca heladix")
    alert(`Tu vuelto ${dinero - bombomHeladix}`)
}
else if (dinero >= palitoCrema) {
    alert("Puedes comprar el palito de helado de crema")
    alert(`Tu vuelto ${dinero - palitoCrema}`)
}
else if (dinero >= palitoAgua) {
    alert("Puedes comprar el palito de helado de agua")
    alert(`Tu vuelto ${dinero - palitoAgua}`)
}
else{
    alert("NO TE ALCANZA PARA NADOTA")
}