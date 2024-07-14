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



// ------ CONTRASEÑAS SEGURAS ------

const inputCarateres = document.getElementById('caracteres')
const contraseñaGenerada = document.getElementById('contraseñaGenerada')
const buttonPassword = document.getElementById('buttonPassword')



const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const minusculas = "abcdefghijklmnopqrstuvwxyz"
const numeros = "0123456789"
const simbolos = "!@#$%^&*()-_=+"


//Función para generar aleatoriedad, devuelve el caracter correspondiente a la posición

const aleatoria = (variables) => {
    return variables[Math.floor(Math.random() * variables.length)]
    }

// FUNCIÓN PARA GENERAR CONTRASEÑA 

const generarPassword = () => {
    let allVariables = mayusculas + numeros + minusculas + simbolos; // todas las cadenas combinadas en una larga
    let password = '';
    let numCaracteres = inputCarateres.value
    
    
        for (let num = 0; num < numCaracteres; num++) { // Se inicializa la variable con 0, cuantas veces se ejecutará el bucle
            password += aleatoria(allVariables)    // Si la condición: num < numCaracteres sea verdadera continúa, el bucle termina cuando es falsa
        }                                           //numCaracteres es el número total de iteraciones que se quiere que realice el bucle (el número de caracteres en la contraseña).
       contraseñaGenerada.innerText = password      //Dentro del cuerpo del bucle, se ejecuta esta línea de código 'password += aleatoria(allVariables)' en cada iteración
       aleatoria(allVariables)                      //genera un carácter aleatorio de la cadena allVariables.
                                                    //password += ... agrega (concatena) este carácter aleatorio a la variable password.
        }

        buttonPassword.addEventListener('click', generarPassword)
