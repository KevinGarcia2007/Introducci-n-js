function validar(event) {
    event.preventDefault();
    
    let documento = document.getElementById("identificacionInput").value;
    let carrera = document.getElementById("carreraInput").value;

    if (documento === "" || documento == null) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Debe ingresar su número de documento",
        });
        return false;
    }

    mostrarDatos(documento, carrera); 
    return true;  
}

function convertirCastellanoDecimal(x) {
    let palabra;
    switch (x) {
        case 0: palabra = "cero"; break;
        case 1: palabra = "uno"; break;
        case 2: palabra = "dos"; break;
        case 3: palabra = "tres"; break;
        case 4: palabra = "cuatro"; break;
        case 5: palabra = "cinco"; break;
        case 6: palabra = "seis"; break;
        case 7: palabra = "siete"; break;
        case 8: palabra = "ocho"; break;
        case 9: palabra = "nueve"; break;
        default: palabra = "solo valores entre 0 y 9"; break;
    }
    return palabra;
}

function convertirDecimalATexto(promedio) {
    let entero = Math.floor(promedio);
    let decimal = Math.floor((promedio - entero) * 10); 
    let textoEntero = convertirCastellanoDecimal(entero);
    let textoDecimal = "";

    if (decimal > 0) {
        textoDecimal = " punto " + convertirCastellanoDecimal(decimal);
    }

    return textoEntero + textoDecimal;
}

function mostrarDatos(documento, carrera) {
    let datos = [
        ["51662369","Sandra Milena Castellanos Marín","Medicina","VI","2.6","2.6","3.4","1.5"],
        ["80223220","Luis Andrés Montoya Montoya","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
        ["79444555","Francisco Martínez Marin","Ingeniería de Alimentos","III","3.4","4.5","4.4","3.0"],
        ["79001003","Luis Francisco Castañeda Roa","Ingeniería de Sistemas","VIII","3.3","3.4","4.5","4.4"],
        ["79003003","Pedro José Pineda Pineda","Odontología","VI","4.0","4.1","3.9","4.5"],
        ["52900901","Ruth Paola Mahecha Mahecha","Odontología","VII","3.6","3.6","3.8","3.9"],
        ["26900345","Lucia Valderrama Pineda","Fisioterapia","VIII","4.4","4.5","4.1","3.1"],
        ["35676900","Mariela Lucia Olguín Ramírez","Medicina","V","3.0","3.1","4.6","3.7"],
        ["27101234","Lucila Peñaranda Peñaranda","Enfermería","II","2.5","4.6","3.4","4.6"],
        ["80231678","Milena Palacios Palacios","Ingeniería Mecánica","III","3.6","3.4","3.5","4.5"],
        ["1030617979","Luis Alberto Castellanos Frias","Odontología","VI","4.0","4.1","3.9","4.5"],
        ["1019066342","Nercy Aleidis Rengifo Rengifo","Fisioterapia","VII","3.6","3.6","3.8","3.9"],
        ["1014249436","Fabián Raúl Moreno Carvajal","Medicina","VIII","4.4","4.5","4.1","3.1"],
        ["1022380843","Jonathan Mauricio Baez Baez","Enfermería","V","3.0","3.1","4.6","3.7"],
        ["1012353083","Germán Dario Rodríguez Baez","Ingeniería Mecánica","II","2.5","4.6","3.4","4.6"],
        ["1030630231","Diego Fernando Giraldo Romero","Ingeniería de Petróleo","III","3.6","3.4","3.5","4.5"],
        ["1020765332","Luz Herminda Fonseca Daza","Psicología","VI","4.0","4.1","3.9","4.5"],
        ["1022357137","Rhonald Dahian Jiménez García","Ingeniería Civil","VI","1.9","1.6","3.3","1.1"],
        ["52263227","Edgar Andrés Bejarano Pérez","Ingeniería Civil","IV","3.0","3.3","4.2","4.5"],
        ["1013579638","Diego Fernando Bautista Gómez","Ingeniería Civil","III","3.4","4.5","4.4","3.0"],
        ["1030617979","Luis Alberto Jaime Hernández","Ingeniería  de Sistemas","II","4.0","4.1","3.9","4.5"],
        ["1019066342","Zabala Pereira Nercy Aleidys","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
        ["1014249436","Fabian Raul Duarte Serrano","Medicina","IV","3.6","3.6","3.8","3.9"],
        ["1022380843","Jhonatan Mauricio Rodríguez  C.","Ingeniería de Petróleos","I","3.4","4.5","4.4","3.0"],
        ["1012353083","German Dario González  Riaño","Ingeniería de Petróleos","III","3.4","4.5","4.4","3.0"],
        ["96040605441","Michael Duvan Beltran Salcedo","Medicina","IV","3.0","3.3","4.2","4.5"],
        ["1013641467","Romero Piña Dylan David","Fisioterapia","II","3.6","3.6","3.8","3.9"],
        ["1030632107","Ruben Dario Fuquene C.","Ingeniería Mecánica","V","3.0","3.3","4.2","4.5"],
        ["53072770","Maryory Cuesta Rodríguez","Ingeniería de Telecomunicaciones","IV","3.0","3.3","4.2","4.5"],
        ["1014245401","Cristian Camilo Ortiz Ortiz","Ingeniería de Telecomunicaciones","VI","2.0","3.1","4.8","1.5"],
        ["95070115361","Yuly Katherine Sierra","Ingeniería Mecánica","V","2.7","3.9","4.7","4.5"],
        ["1020796896","Daniel Andres Zapata Bello","Ingeniería Mecánica","IV","3.0","3.3","4.2","4.5"],
        ["1003819124","José Eitner Montiel  Aldana","Medicina","IV","3.0","3.3","4.2","4.5"],
        ["1031131906","Luis Guillermo Andrade Cifuentes","Medicina","VIII","3.9","3.8","2.6","4.5"],
        ["1019018284","Jairo Joel Noguera Melo","Medicina","VIII","3.7","3.7","4.7","4.0"],
        ["1014218719","Bryan Andrés Ortegón","Medicina","IV","3.0","3.3","4.2","4.5"],
        ["1030611565","Mónica Andrea Plaza Bernal","Medicina","IV","3.6","3.8","4.8","4.0"]
    ];
    
    let encontrado = false;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i][0] === documento && datos[i][2].toLowerCase() === carrera.toLowerCase()) {
            let nombre = datos[i][1];
            let semestre = datos[i][3];

            let Nota1 = parseFloat(datos[i][4]);
            let Nota2 = parseFloat(datos[i][5]);
            let Nota3 = parseFloat(datos[i][6]);
            let Nota4 = parseFloat(datos[i][7]);
            
            let Promedio = (Nota1 + Nota2 + Nota3 + Nota4) / 4;
            let promedioTexto = convertirDecimalATexto(Promedio); 

            document.getElementById("resultado").classList.remove("d-none");
            let tbody = document.getElementById("tablaResultados").getElementsByTagName("tbody")[0];
            tbody.innerHTML = "";  
            tbody.innerHTML = `
                <tr>
                    <td>${nombre}</td>
                    <td>${carrera}</td>
                    <td>${semestre}</td>
                    <td>${Nota1.toFixed(1)}</td> 
                    <td>${Nota2.toFixed(1)}</td>
                    <td>${Nota3.toFixed(1)}</td>
                    <td>${Nota4.toFixed(1)}</td>
                    <td>${Math.floor(Promedio * 10) / 10}</td>
                    <td>${promedioTexto}</td>
                </tr>
            `;
            encontrado = true;
            break;
        }
    }
    
    if (!encontrado) {
        document.getElementById("resultado").classList.add("d-none");
        Swal.fire({
            icon: "error",
            title: "No encontrado",
            text: "No se encontraron datos con ese número de documento y carrera.",
        });
    }
}

function convertirDecimalATexto(promedio) {
    let entero = Math.floor(promedio);
    let decimal = promedio - entero;
    let textoDecimal = "";

    if (decimal > 0) {
        let primerDecimal = Math.floor(decimal * 10); 
        textoDecimal = " punto " + convertirCastellanoDecimal(primerDecimal);
    }

    return convertirCastellanoDecimal(entero) + textoDecimal;
}
