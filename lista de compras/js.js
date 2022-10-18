let boton = document.getElementsByName('boton')[0];         // Variable que toma el button
let lista = document.getElementsByName('lista')[0];         // Variable que toma el div donde se van a almacenar las tareas añadidas
let tarea_input = document.querySelector('input');          // Variable que toma el input

tarea_input.addEventListener('keypress', function (tecla) { // Validacion para agregar la tarea del intup con tecla ENTER
    if (tecla.key === "Enter") {                            // Comprobacion de tecla pulsada, si es ENTER activa la funcion tareaNueva
        tareaNueva();                                          
    }
})

boton.addEventListener('click', tareaNueva);                // Añadido al boton el evento CLICK para ejecutar tambien la funcion tareaNueva

function tareaNueva() {
    if (tarea_input.value != "") {                          // Valido que el input tenga contenido escrito, o sea, si es diferente a VACIO
        nuevo_div = document.createElement('div');          // Defino variable para la creacion del nuevo DIV
        nuevo_div.innerText = tarea_input.value;            // Al InnerText de esta variable le asingo el valor del input
        lista.appendChild(nuevo_div);                       // Aca se añade el div creado a lo ultimo del div LISTA
        tarea_input.value = "";                             // Al input lo dejo vacio para ingresar un nuevo dato
    }
}