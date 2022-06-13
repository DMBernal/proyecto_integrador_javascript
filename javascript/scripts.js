
const valorTicket = 200;

const descuentoEstudiante = 80;
const descuentoTrainee = 50;
const descuentoJunior = 15;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let totalPagar = document.getElementById("totalPagar");

function eliminarErrorValidaciones() {
    let array = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < array.length; i++) {
        array[i].classList.remove('is-invalid');
    }
}

function totalPorPagar() {

    eliminarErrorValidaciones();

    if (nombre.value === "") {
        alert("Por favor, ingrese su nombre");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return;    
    }

    if (apellido.value === "")  {
        alert("Por favor, ingrese su apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }

    const correoValido = correo => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
    }

    if (!correoValido(correo.value)) {
        alert("Por favor, ingrese una dirección de correo electrónico válido");
        correo.classList.add("is-invalid");
        correo.focus();
        return;
    }

    if ((cantidad.value == 0) || (isNaN(cantidad.value))) {
        alert("Por favor, ingrese una cantidad de tickets válida.");
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }

    if (categoria.value == "") {
        alert("Por favor, seleccione una categoría");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;        
    }

    let totalTickets = (cantidad.value) * valorTicket;

    if (categoria.value == "general") {
        totalTickets = totalTickets;
    }
    if (categoria.value == "estudiante") {
        totalTickets = totalTickets - (totalTickets * descuentoEstudiante)/100;
    }
    if (categoria.value == "trainee") {
        totalTickets = totalTickets - (totalTickets * descuentoTrainee)/100;
    }    
    if (categoria.value == "junior") {
        totalTickets = totalTickets - (totalTickets * descuentoJunior)/100;
    }    

    totalPagar.innerHTML = totalTickets;
}   

botonResumen.addEventListener('click', totalPorPagar);

function resetearTotalPorPagar() {
    eliminarErrorValidaciones();
    totalPagar.innerHTML = "";
}

botonBorrar.addEventListener('click', resetearTotalPorPagar);