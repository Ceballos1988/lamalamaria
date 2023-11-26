// Objeto para almacenar la información del formulario
let formData = {};

// Funciones de validación

function validarNombre() {
    let nombreInput = document.getElementById('nombre');
    let nombreValue = nombreInput.value.trim();
    let regex = /^[a-zA-Z]+$/;

    if (nombreValue === '') {
        setError(nombreInput, 'Campo obligatorio');
    } else if (!regex.test(nombreValue)) {
        setError(nombreInput, 'Solo se permiten letras');
    } else {
        setSuccess(nombreInput);
        formData.nombre = nombreValue; // Almacena el valor en el objeto
    }
}

function validarApellido() {
    let apellidoInput = document.getElementById('apellido');
    let apellidoValue = apellidoInput.value.trim();
    let regex = /^[a-zA-Z]+$/;

    if (apellidoValue === '') {
        setError(apellidoInput, 'Campo obligatorio');
    } else if (!regex.test(apellidoValue)) {
        setError(apellidoInput, 'Solo se permiten letras');
    } else {
        setSuccess(apellidoInput);
        formData.apellido = apellidoValue; // Almacena el valor en el objeto
    }
}

function validarEmail() {
    let emailInput = document.getElementById('email');
    let emailValue = emailInput.value.trim();
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
        setError(emailInput, 'Campo obligatorio');
    } else if (!regex.test(emailValue)) {
        setError(emailInput, 'Debe ingresar un correo electrónico válido');
    } else {
        setSuccess(emailInput);
        formData.email = emailValue; // Almacena el valor en el objeto
    }
}

function validarCelular() {
    let celularInput = document.getElementById('celular');
    let celularValue = celularInput.value.trim();
    let regex = /^[0-9]{10}$/;

    if (celularValue === '') {
        setError(celularInput, 'Campo obligatorio');
    } else if (!regex.test(celularValue)) {
        setError(celularInput, 'Debe ingresar 10 dígitos numéricos');
    } else {
        setSuccess(celularInput);
        formData.celular = celularValue; // Almacena el valor en el objeto
    }
}



function validarProposito() {
    let propositoInput = document.getElementById('proposito');

    if (propositoInput.value === '') {
        setError(propositoInput, 'Campo obligatorio');
    } else {
        setSuccess(propositoInput);
        formData.proposito = propositoInput.value; // Almacena el valor en el objeto
    }
}


// Funciones de estilo
function setError(element, message) {
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
    let invalidFeedback = element.nextElementSibling;
    invalidFeedback.innerHTML = message;
}

function setSuccess(element) {
    element.classList.remove('is-invalid');
    element.classList.add('is-valid');
    let invalidFeedback = element.nextElementSibling;
    invalidFeedback.innerHTML = '';
}

// Asignar eventos de validación
document.getElementById('nombre').addEventListener('blur', validarNombre);
document.getElementById('apellido').addEventListener('blur', validarApellido);
document.getElementById('email').addEventListener('blur', validarEmail);
document.getElementById('celular').addEventListener('blur', validarCelular);
document.getElementById('proposito').addEventListener('change', validarProposito);



// Controlador de eventos al botón de enviar
document.getElementById('formularioIngreso').addEventListener('submit', function (event) {
    // Prevenir el envío del formulario por defecto
    event.preventDefault();

    // Llamadas a funciones de validación para actualizar el objeto formData
    validarNombre();
    validarApellido();
    validarEmail();
    validarCelular();
    validarProposito();
   

    // Verifica si todas las validaciones fueron exitosas
    let isValid = document.querySelectorAll('.is-invalid').length === 0;

    // Si todas las validaciones son exitosas, convierte el objeto formData a JSON
    if (isValid) {
        let formDataJSON = JSON.stringify(formData, null, 2);
        console.log(formDataJSON);

    // Mostrar un cuadro de diálogo de confirmación
    let confirmacion = window.confirm('¿Estás seguro de enviar el formulario?');

    // Si el usuario confirma, enviar el formulario
    if (confirmacion) {
        
        alert('Formulario enviado correctamente.');
        limpiarFormulario();
        
    } else {
        alert('Envío del formulario cancelado.');
    }
} else {
    alert('Por favor, complete correctamente todos los campos del formulario.');
}
});

/*Limpiar el formulario*/

function limpiarFormulario() {
    let form = document.getElementById('formularioIngreso');
    let campos = form.querySelectorAll('input, select, textarea');

    campos.forEach((campo) => {
        campo.value = '';
        campo.classList.remove('is-invalid', 'is-valid');
        campo.nextElementSibling.innerHTML = '';
    });
}


// Función para desplazarse hacia arriba suavemente
function goToTop() {
window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function () {
var btnTop = document.getElementById('btnTop');
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
btnTop.style.display = 'block';
} else {
btnTop.style.display = 'none';
}
};
