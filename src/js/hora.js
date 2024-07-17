// ---- FECHA -----

//Captura DOM
const mostrarHora = document.getElementById('hora');
const mostrarFecha = document.getElementById('fecha');

let fechaActual = new Date(); // Datos de la fecha en directo de la zona en la que estamos
let mesAnual = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] // getMonth cuenta desde el 0, le doy los números para que empiece desde 1 (Enero)

const numCero = (num) => // FUNCIÓN PARA ANTEPONER UN CERO A LOS NÚMEROS < 10
    num <= 9 ? `0${num}` : `${num}`;

    // Captura enn variables del día/mes/año
let dia = numCero(fechaActual.getDate()) 
let mes = numCero(mesAnual[fechaActual.getMonth()])
let year = fechaActual.getFullYear();

mostrarFecha.innerHTML = `${dia}/${mes}/${year}`; // Insertar fecha con todos los datos anteriores

// --- HORA ----- 

const hora = () => {
    setInterval(() => {
        let horaActual = new Date();
        mostrarHora.innerHTML = horaActual.toLocaleTimeString()
    }, 1000)
}

hora()