async function revisar(event) {
    if (event) event.preventDefault();
    
    let hora = document.getElementById("hora");
    let minuto = document.getElementById("minuto");
    let segundo = document.getElementById("segundo");
    let esValido = true;

    if (isNaN(hora.value) || hora.value === "" || hora.value < 0 || hora.value > 23) {
        await Swal.fire({
            icon: "error",
            title: "Error en Hora",
            text: "La hora debe ser un número entre 0 y 23.",
            confirmButtonText: "OK"
        });
        hora.focus();
        hora.value = "";
        esValido = false;
    } else if (isNaN(minuto.value) || minuto.value === "" || minuto.value < 0 || minuto.value > 59) {
        await Swal.fire({
            icon: "error",
            title: "Error en Minuto",
            text: "Los minutos deben ser un número entre 0 y 59.",
            confirmButtonText: "OK"
        });
        minuto.focus();
        minuto.value = "";
        esValido = false;
    } else if (isNaN(segundo.value) || segundo.value === "" || segundo.value < 0 || segundo.value > 59) {
        await Swal.fire({
            icon: "error",
            title: "Error en Segundo",
            text: "Los segundos deben ser un número entre 0 y 59.",
            confirmButtonText: "OK"
        });
        segundo.focus();
        segundo.value = "";
        esValido = false;
    }

    if (esValido) {
        ajustarReloj(hora.value, minuto.value, segundo.value);
    }

    return esValido; 
}


function ajustarReloj(hora, minuto, segundo) {
    const hourHand = document.getElementById("hour-hand");
    const minuteHand = document.getElementById("minute-hand");
    const secondHand = document.getElementById("second-hand");
    const infoGrados = document.getElementById("info-grados");

    const horaAngle = (hora % 12) * 30;
    const minutoAngle = minuto * 6; 
    const segundoAngle = segundo * 6; 

    hourHand.style.transform = `rotate(${horaAngle}deg)`;
    minuteHand.style.transform = `rotate(${minutoAngle}deg)`;
    secondHand.style.transform = `rotate(${segundoAngle}deg)`;

    let gradosHoraMinuto = Math.abs(horaAngle - minutoAngle);
    let gradosMinutoSegundo = Math.abs(minutoAngle - segundoAngle);
    let gradosHoraSegundo = Math.abs(horaAngle - segundoAngle);

    if (gradosHoraMinuto > 180) {
        gradosHoraMinuto = 360 - gradosHoraMinuto;
    }
    if (gradosMinutoSegundo > 180) {
        gradosMinutoSegundo = 360 - gradosMinutoSegundo;
    }
    if (gradosHoraSegundo > 180) {
        gradosHoraSegundo = 360 - gradosHoraSegundo;
    }

    infoGrados.innerHTML = `
        Grados entre Hora y Minuto: ${gradosHoraMinuto.toFixed(2)}° <br>
        Grados entre Minuto y Segundo: ${gradosMinutoSegundo.toFixed(2)}° <br>
        Grados entre Hora y Segundo: ${gradosHoraSegundo.toFixed(2)}°
    `;
}
