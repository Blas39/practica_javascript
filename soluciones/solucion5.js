
//4) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
// de todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 telefonos especificamente,
// El problema es que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutaente nada ... pero claro:
// el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahi
// entramos nosotros.

class Celular {
    constructor(color, peso, pantalla_resolucion, camara_resolucion, ram) {
        this.color = color;
        this.peso = peso;
        this.pantalla_resolucion = pantalla_resolucion;
        this.camara_resolucion = camara_resolucion;
        this.ram = ram;
        this.estaPrendido = false;
    }

    presionarBotonEncendido() {
        if(!this.estaPrendido) alert("Prendiendo Celular");
        else alert("Apagando Celular");
        this.estaPrendido = !this.estaPrendido;
    }

    reiniciar() {
        if(this.estaPrendido){
            alert("Reiniciando Celular");
        }else{
            alert("El Celular no esta prendido")
        }
    }

    tomarFoto() {
        if(!this.estaPrendido){
            alert("El Celular no esta prendido");
        }else{
            alert(`Tomaste una foto en la resolucion de ${this.camara_resolucion}`);
        }
    }

    grabarVideo() {
        if(!this.estaPrendido){
            alert("El Celular no esta prendido");
        }else{
            alert(`Grabaste un video en la resolucion de ${this.camara_resolucion}`);
        }
    }
    
    info() {
        return `Color : ${this.color}, Peso: ${this.peso}, Resolucion de Pantalla: ${this.pantalla_resolucion}, Resolucion de Camara: ${this.camara_resolucion}, Memoria Ram: ${this.ram}`;
    }
}


class CelularGamaAlta extends Celular {
    constructor(color, peso, pantalla_resolucion, camara_resolucion, ram, camara_extra_resolucion) {
        super(color, peso, pantalla_resolucion, camara_resolucion, ram);
        this.camara_extra_resolucion = camara_extra_resolucion;
    }

    grabarVideoLento() {
        if(!this.estaPrendido){
            alert("El Celular no esta prendido");
        }else{
            alert(`Grabaste un video en la resolucion de ${this.camara_resolucion} y en camara superlenta`);
        }
    }

    probarReconocimientoFacial() {
        if(!this.estaPrendido){
            alert("El Celular no esta prendido");
        }else{
            alert(`Usaste el Reconocimiento Facial`);
        }
    }

    info() {
        return `Color : ${this.color}, Peso: ${this.peso}, Resolucion de Pantalla: ${this.pantalla_resolucion}, Resolucion de Camara 1: ${this.camara_resolucion}, Resolucion de Camara 2: ${this.camara_extra_resolucion}, Memoria Ram: ${this.ram}`;
    }
}

const celular1 = new Celular("rojo", "120 gramos", "1440x720", "32mp", "4GB");
const celular2 = new Celular("negro", "125 gramos", "1280x720", "8mp", "3GB");
const celular3 = new Celular("negro", "150 gramos", "1280x720", "64mp", "2GB");

/*celular1.presionarBotonEncendido();
celular1.tomarFoto();

document.write(`
    ${celular1.info()} <br>
    ${celular2.info()} <br>
    ${celular3.info()} <br>
    `
);*/

const celular4 = new CelularGamaAlta("negro", "150 gramos", "2160x1080", "128mp", "6GB", "32mp");
const celular5 = new CelularGamaAlta("negro", "155 gramos", "1440x720", "64mp", "8GB", "32mp");
const celular6 = new CelularGamaAlta("negro", "160 gramos", "1920x1080", "64mp", "16GB", "32mp");

celular4.presionarBotonEncendido();
celular4.probarReconocimientoFacial();
celular4.grabarVideoLento();

document.write(`
    ${celular4.info()} <br>
    ${celular5.info()} <br>
    ${celular6.info()} <br>
    `
);