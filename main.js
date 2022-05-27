const carrito = [];

class Pedal {
    constructor(nombre, efecto, precio){
        this.nombre = nombre;
        this.efecto = efecto;
        this.precio = precio;
    }
}


const totalCarrito = () =>{
    let sumaTotal = 0;
    carrito.forEach((producto)=>{
        sumaTotal += producto.precio;
    })
    return sumaTotal;
}

const mensaje = (pedalElegido) =>{
    switch(pedalElegido){
        case "nautilus":
            console.log(`${pedalNautilus.nombre} Agregado al carrito`);
            break;
        case "lighthouse":
            console.log(`${pedalLighthouse.nombre} Agregado al carrito`);
            break;
        case "andromeda":
            console.log(`${pedalAndromeda.nombre} Agregado al carrito`);
            break;
        case "apocalipsis":
            console.log(`${pedalApocalipsis.nombre} Agregado al carrito`);
            break;
        case "fuzzilla":
            console.log(`${pedalFuzzilla.nombre} Agregado al carrito`);
            break;
        default:
            break;
    }
}

const pedalNautilus = new Pedal ("Nautilus", "Delay-Chorus",18000);
const pedalLighthouse = new Pedal ("Lighthouse", "Phaser analógico", 18000);
const pedalAndromeda = new Pedal ("Andromeda", "Reverb digital", 20000);
const pedalApocalipsis = new Pedal ("Apocalipsis", "Overdrive", 20000);
const pedalFuzzilla = new Pedal ("Fuzzilla", "Overdrive", 18500);

const agregarPedal = () => {
    const pedalElegido = prompt(`Elija su pedal:
                            🐙${pedalNautilus.nombre}
                            🌊${pedalLighthouse.nombre}
                            🚀${pedalAndromeda.nombre}
                            🧟‍♂️${pedalApocalipsis.nombre}
                            🦖${pedalFuzzilla.nombre}`).toLowerCase();
    
    mensaje(pedalElegido);

    switch(pedalElegido){
        case "nautilus":
           carrito.push(pedalNautilus);
           break;
        case "lighthouse":
           carrito.push(pedalLighthouse);
           break;
        case "andromeda":
           carrito.push(pedalAndromeda);
           break;
        case "apocalipsis":
           carrito.push(pedalApocalipsis);
           break;
        case "fuzzilla":
           carrito.push(pedalFuzzilla);
           break;
        default:
            alert("ASEGURESE DE HABER ESCRITO CORRECTAMENTE EL NOMBRE DEL PEDAL");
            break;
    }

    let continuar = confirm("¿DESEA AGREGAR OTRO PEDAL A SU COMPRA?");
    if(continuar){
        agregarPedal();
    }else{
        console.log(`Total a abonar $${totalCarrito()}`);
    }

}

agregarPedal();




