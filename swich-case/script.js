function convertirCastellanoParteEntera(x) {
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

function convertirCastellanoDecimal(decimal) {
    return convertirCastellanoParteEntera(parseInt(decimal[0]));
}

let valor = parseFloat(prompt("Ingrese un valor decimal entre 0 y 9"));
let valorStr = valor.toString();
let parteEntera = valorStr.substring(0, valorStr.indexOf('.'));
let parteDecimal = valorStr.substring(valorStr.indexOf('.') + 1);

let resultado = "";
if (parteEntera >= "0" && parteEntera <= "9") {
    resultado = convertirCastellanoParteEntera(parseInt(parteEntera));

    if (parteDecimal) {
        resultado += " punto " + convertirCastellanoDecimal(parteDecimal);
    }
} else {
    resultado = "Error: solo se permite un dígito en la parte entera (entre 0 y 9)";
}

document.write(resultado);
