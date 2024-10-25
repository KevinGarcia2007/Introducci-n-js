
function validar(event){
    event.preventDefault();
    let Pnombre=document.getElementById("PrimerNombre");
    let Papellido=document.getElementById("PrimerApellido");
    let Identificacion=document.getElementById("id"); 
    let Contacto=document.getElementById("contacto"); 
    let correo=document.getElementById("email");
    let contrasena=document.getElementById("contrasena");
    let confirmarContrasena=document.getElementById("confirmarContrasena");
    let opciones=document.getElementsByName("ElGenero");
    let seleccion= false;

    if (Pnombre.value==null || Pnombre.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "El primer nombre es obligatorio!",
          });
        return false;
    }

    else if(Papellido.value==null || Papellido.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "El primer apellido es obligatorio!",
          });
        return false;
    }


    else if(Identificacion.value==null || Identificacion.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "La identificación es obligatoria!",
          });
        return false;
    }
    else if(Contacto.value==null || Contacto.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "el número de teléfono es obligatorio!",
          });
        return false;
    }
    else if(correo.value==null || correo.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "el correo es obligatorio!",
          });
        return false;
    }
    if (contrasena.value == null || contrasena.value == "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "La contraseña es obligatoria!",
        });
        return false;
    } else if (contrasena.value.length > 5) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Contraseña muy larga, máximo 5 caracteres!",
        });
        return false;
    }
    if (!confirmarContrasena.value) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Confirmar la contraseña es obligatorio!",
        });
        return false;
    }
    if (contrasena.value !== confirmarContrasena.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Las contraseñas no coinciden!",
        });
        return false;
    }
    else {
        for (let i = 0; i < opciones.length; i++) {
            if (opciones[i].checked) {
                seleccion = true;
                break;
            }
        }
        if (!seleccion) {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Debe seleccionar un género!",
            });
            return false;
        }
    }
    Swal.fire({
        icon: "success",
        title: "Terminado",
        text: "Todo salió bien :D!",
    }).then(() => {
        location.reload(); 
    });

    return true;
}
function revisar() {
    let identificacion = document.getElementById("id");
    let contacto = document.getElementById("contacto");

    if (isNaN(identificacion.value)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Identificación no válida. Debe ser un número.",
            confirmButtonText: "OK"
        }).then(() => {
            identificacion.focus();
            identificacion.value = "";
        });
    } else if (isNaN(contacto.value)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Número de contacto no válido. Debe ser un número.",
            confirmButtonText: "OK"
        }).then(() => {
            contacto.focus();
            contacto.value = "";
        });
    }
}
function validarNombre() {
    let primerNombreElem = document.getElementById("PrimerNombre");
    let segundoNombreElem = document.getElementById("SegundoNombre");
    let primerApellidoElem = document.getElementById("PrimerApellido");
    let segundoApellidoElem = document.getElementById("SegundoApellido");

    if (primerNombreElem.value.trim()!=="" && !isNaN(primerNombreElem.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El primer nombre no es válido. Debe contener texto.',
            confirmButtonText: 'OK'
        }).then(() => {
            primerNombreElem.focus();
            primerNombreElem.value = "";
        });
    } else if (segundoNombreElem.value.trim() !== "" && !isNaN(segundoNombreElem.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El segundo nombre no es válido. Debe contener texto.',
            confirmButtonText: 'OK'
        }).then(() => {
            segundoNombreElem.focus();
            segundoNombreElem.value = "";
        });
    } else if (primerApellidoElem.value.trim() !== "" && !isNaN(primerApellidoElem.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El primer apellido no es válido. Debe contener texto.',
            confirmButtonText: 'OK'
        }).then(() => {
            primerApellidoElem.focus();
            primerApellidoElem.value = "";
        });
    } else if (segundoApellidoElem.value.trim() !== "" && !isNaN(segundoApellidoElem.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El segundo apellido no es válido. Debe contener texto.',
            confirmButtonText: 'OK'
        }).then(() => {
            segundoApellidoElem.focus();
            segundoApellidoElem.value = "";
        });
    }
}

