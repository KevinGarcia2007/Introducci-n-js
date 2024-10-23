
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
    let Pnombre = document.getElementById("PrimerNombre");

    if (isNaN(identificacion.value)) {
        alert("Identificación No Válida. Debe ser un número.");
        identificacion.focus();
        identificacion.value = "";
    }

    else if (isNaN(contacto.value)) {
        alert("Número de Contacto no válido. Debe ser un número.");
        contacto.focus();
        contacto.value = "";
    }
}
function validarNombre() {
    let primerNombre = document.getElementById("PrimerNombre").value;
    let segundoNombre = document.getElementById("SegundoNombre").value;
    let primerApellido = document.getElementById("PrimerApellido").value;
    let segundoApellido = document.getElementById("SegundoApellido").value;

    if (primerNombre.trim() === "" || !isNaN(primerNombre)) {
        alert("El Primer Nombre no es válido. Debe contener texto.");
        PrimerNombre.focus();
        PrimerNombre.value = "hola";
        return;
    }
    else if (segundoNombre.trim() === "" || !isNaN(segundoNombre)) {
        alert("El Segundo Nombre no es válido. Debe contener texto.");
        SegundoNombre.focus();
        SegundoNombre.value = "hola";
        return;
    }
    else if (primerApellido.trim() === "" || !isNaN(primerApellido)) {
        alert("El Primer Apellido no es válido. Debe contener texto.");
        PrimerApellido.focus();
        PrimerApellido.value = "hola";
        return;
    }
    else if (segundoApellido.trim() === "" || !isNaN(segundoApellido)) {
        alert("El Segundo Apellido no es válido. Debe contener texto.");
        SegundoApellido.focus();
        SegundoApellido.value = "hola";
        return;
    }

}   
