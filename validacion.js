// Script de validación personalizado
(function () {
    'use strict';

    // Selección de los elementos del formulario
    const form = document.querySelector('.needs-validation');
    const password = document.getElementById('validationCustomPassword');
    const confirmPassword = document.getElementById('validationCustomConfirmPassword');

    // Agregar evento de submit al formulario
    form.addEventListener('submit', function (event) {
        // Verificar si el formulario es válido
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Verificar si las contraseñas coinciden
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
            } else {
                confirmPassword.setCustomValidity('');
                // Aquí se puede mostrar la alerta de registro exitoso
                alert('Usuario registrado\nBienvenido D-Play');
            }
        }

        // Agregar las clases de validación de Bootstrap
        form.classList.add('was-validated');
    }, false);

    // Agregar eventos de input para verificar las contraseñas mientras se escriben
    password.addEventListener('input', function () {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    confirmPassword.addEventListener('input', function () {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Las contraseñas no coinciden.');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });
})();
