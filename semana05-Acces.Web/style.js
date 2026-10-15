const formulario = document.getElementById("registroForm");

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const mensajeExito = document.getElementById("mensajeExito");


formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    let formularioValido = true;

    limpiarErrores();
   
    if (nombre.value.trim() === "") {

        mostrarError(
            nombre,
            "errorNombre",
            "El nombre es obligatorio."
        );

        formularioValido = false;
    }

    
    if (apellidos.value.trim() === "") {

        mostrarError(
            apellidos,
            "errorApellidos",
            "Los apellidos son obligatorios."
        );

        formularioValido = false;
    }

   
    if (correo.value.trim() === "") {

        mostrarError(
            correo,
            "errorCorreo",
            "El correo electrónico es obligatorio."
        );

        formularioValido = false;

    } else if (!validarCorreo(correo.value)) {

        mostrarError(
            correo,
            "errorCorreo",
            "Ingrese un correo electrónico válido."
        );

        formularioValido = false;
    }
    
    if (password.value === "") {

        mostrarError(
            password,
            "errorPassword",
            "La contraseña es obligatoria."
        );

        formularioValido = false;

    } else if (password.value.length < 8) {

        mostrarError(
            password,
            "errorPassword",
            "La contraseña debe tener mínimo 8 caracteres."
        );

        formularioValido = false;
    }

   
    if (confirmPassword.value === "") {

        mostrarError(
            confirmPassword,
            "errorConfirmPassword",
            "Debe confirmar la contraseña."
        );

        formularioValido = false;

    } else if (password.value !== confirmPassword.value) {

        mostrarError(
            confirmPassword,
            "errorConfirmPassword",
            "Las contraseñas no coinciden."
        );

        formularioValido = false;
    }

    
    if (formularioValido) {

        mensajeExito.textContent =
            "¡Registro realizado correctamente!";

        formulario.reset();

        nombre.focus();
    }
});

function mostrarError(campo, idError, mensaje) {

    const elementoError = document.getElementById(idError);

    elementoError.textContent = mensaje;

    campo.setAttribute("aria-invalid", "true");
}

function limpiarErrores() {

    const errores = document.querySelectorAll(".error");

    errores.forEach(function (error) {
        error.textContent = "";
    });

    const campos = formulario.querySelectorAll("input");

    campos.forEach(function (campo) {
        campo.removeAttribute("aria-invalid");
    });

    mensajeExito.textContent = "";
}

function validarCorreo(correo) {

    const expresion =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return expresion.test(correo);
}