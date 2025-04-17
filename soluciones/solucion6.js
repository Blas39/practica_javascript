//c) Cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones del Play Store ya que quiere jugar juegos que sean
// muy populares, que tengan buena puntuacion y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares
// y sabe que si se descarga todas, probablemente juegue con todas, pero él se va a descargar solo 2 para tener perdidas
// innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas
// aplicaciones es la que va a descargar.

class App {
    constructor(cantidadDescargas, puntuacion, peso) {
        this.cantidadDescargas = cantidadDescargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.instalado = false;
        this.abierto = false;
    }

    instalar() {
        if(this.instalado){
            alert("La Aplicacion ya esta Instalada");
        }else{
            alert("Instalando Aplicacion...")
            this.instalado = true;
        }
    }

    abrir() {
        if(this.instalado){
            if(this.abierto) {
                alert("La Aplicacion ya esta abierta...");
            }else{
                alert("Abriendo Aplicacion...");
                this.abierto = true;
            }
        }else{
            alert("La Aplicacion no esta Instalada")
        }
    }

    cerrar() {
        if(this.instalado){
            if(this.abierto) {
                alert("Cerrando Aplicacion...");
                this.abierto = false;
            }else{
                alert("La Aplicacion no esta abierta...");
            }
        }else{
            alert("La Aplicacion no esta Instalada")
        }
    }

    desinstalar() {
        if(this.instalado){
            alert("Desinstalando Aplicacion");
            this.instalado = this.abierto = false;
        }else{
            alert("La Aplicacion no estaba instalada...")
        }
    }

    verInfo() {
        return `La Aplicacion tiene una puntuacion de ${this.puntuacion}, ${this.cantidadDescargas} descargas y un peso de ${this.peso}`;
    }

}

const app1 = new App("9K", "5/5", "180mb");
const app2 = new App("15K", "4.6/5", "300mb");
const app3 = new App("98K", "4/5", "2gb");
const app4 = new App("5K", "3.5/5", "4gb");
const app5 = new App("100K", "4.8/5", "2.5gb");
const app6 = new App("1K", "2/5", "150mb");
const app7 = new App("98K", "4/5", "2gb");

app1.instalar();
app1.abrir();
app1.desinstalar();
app1.abrir();

document.write(
    `
    ${app1.verInfo()} <br>
    ${app2.verInfo()} <br>
    ${app3.verInfo()} <br>
    ${app4.verInfo()} <br>
    ${app5.verInfo()} <br>
    ${app6.verInfo()} <br>
    ${app7.verInfo()} <br>
    `
)