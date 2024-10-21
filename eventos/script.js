
function VerifiqueEdad(){
    var Edad=document.getElementById('edad');
    if (isNaN(Edad.value)){
        alert("Edad No Válida");
        Edad.focus();
        Edad.value="";
    }
}

function Revisar(){
    var Edad=document.getElementById('edad');
    var Nombre=document.getElementById('nombre');
    if(Edad.value=="" || Nombre.value==""){
        if(Nombre.value==""){
            Nombre.focus();
        }
        else{
            Edad.focus();
        }
        alert("Diligencie el Formulario");
    }
    else{
        alert('Bienvenido'+' '+Nombre.value);
    }
}
