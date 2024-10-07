
function validar(){
    let Pnombre=document.getElementById("PrimerNombre");
    let Snombre=document.getElementById("SegundoNombre");
    let Papellido=document.getElementById("PrimerApellido");
    let Sapellido=document.getElementById("SegundoApellido"); 
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
    else if (Snombre.value==null || Snombre.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "El Segundo nombre es obligatorio!",
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
    else if(Sapellido.value==null || Sapellido.value==""){
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "El segundo apellido es obligatorio!",
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

    alert("Enviado!");
    return true;
}