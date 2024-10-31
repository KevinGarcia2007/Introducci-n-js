const clientes = [
    ["Juan Perez", "CC", "123456789", 1500],
    ["Ana Gómez", "TI", "987654321", 2000],
    ["Carlos Ruiz", "CC", "123123123", 1200],
    ["Marta López", "CE", "321321321", 1800],
    ["Kevin Garcia", "TI", "1032940369", 20000000],
    ["Victor Manuel Moreno Perez","CC","10101253241", 1950000]
];

function revisar(valor) {
    if (isNaN(valor) || valor <= 0) {
        Swal.fire({
            icon: "warning",
            title: "Valor no válido",
            text: "Debe ser un número positivo.",
        }).then(() => {
            const numeroDocumento = document.getElementById("numeroDocumento");
            numeroDocumento.focus();
            numeroDocumento.value = "";
        });
        return false;
    }
    return true;
}

function validar(event) {
    event.preventDefault();
    const numeroDocumento = document.getElementById("numeroDocumento").value;
    const tipoDocumento = document.getElementById("tipoDocumento").value;
    const opciones = document.getElementsByName("operaciones");
    let seleccion = false;
    let operacion = "";

    if (tipoDocumento === "") {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "El tipo de documento es obligatorio!",
        });
        return false;
    }

    if (!revisar(numeroDocumento)) {
        document.getElementById("numeroDocumento").value = "";
        return false;
    }

    const clienteData = clientes.find(cliente => cliente[1] === tipoDocumento && cliente[2] === numeroDocumento);
    if (!clienteData) {
        Swal.fire({
            icon: "error",
            title: "Cliente no encontrado",
            text: "No existe un cliente con ese tipo y número de documento.",
        });
        return false;
    }

    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = true;
            operacion = opciones[i].id;
            break;
        }
    }

    if (!seleccion) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Por favor, selecciona una opción!",
        });
        return false;
    }
     let cliente = new Cliente(clienteData[0], clienteData[1], clienteData[2], clienteData[3]); //instanciamiento de la clase Cliente. creación del objeto "cliente"

    if (operacion === "saldo") {
        mostrarResultado(cliente);
        return true;
    }

    let monto = 0;
    if (operacion === "meter") {
        monto = parseFloat(prompt("Ingresa el monto a depositar:"));
        if (!revisar(monto)) return false;
        cliente.depositar(monto);
    } else if (operacion === "sacar") {
        monto = parseFloat(prompt("Ingresa el monto a retirar:"));
        if (!revisar(monto)) return false; 
        if (monto > cliente.saldo) {
            Swal.fire({
                icon: "error",
                title: "Saldo insuficiente",
                text: "No tienes suficiente saldo para esta operación.",
            });
            return false;
        }
        cliente.extraer(monto);
    }

    clienteData[3] = cliente.saldo;

    Swal.fire({
        icon: "success",
        title: "Operación exitosa",
        text: "Operación realizada correctamente!",
    });

    mostrarResultado(cliente);
    return true;
}

function Cliente(nombre, tipoDocumento, numeroDocumento, saldo) {
    this.nombre = nombre; // al lado izquierdo del igual es un atributo de la clase y al lado derecho del igual es un parametro 
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.saldo = saldo;


    this.depositar = function(dinero) {
        this.saldo += dinero;
    };


    this.extraer = function(dinero) {
        this.saldo -= dinero;
    };
}

function mostrarResultado(cliente) {
    document.getElementById("resultado").innerHTML = 
        `<p><strong>Nombre del cliente:</strong> ${cliente.nombre}</p>
         <p><strong>Tipo de documento:</strong> ${cliente.tipoDocumento}</p>
         <p><strong>Número de documento:</strong> ${cliente.numeroDocumento}</p>
         <p><strong>Saldo actual:</strong> $${cliente.saldo.toFixed(2)}</p>`;
}
