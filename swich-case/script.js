 
function convertirCastellano(x){
    let palabra;
    switch(x){
        case 0: palabra = "cero"; break;
        case 1: palabra = "uno"; break;
        case 2: palabra = "dos";break;
        case 3: palabra = "tres";break;
        case 4: palabra = "cuatro";break;
        case 5: palabra = "cinco";break;
        case 6: palabra = "seis";break;
        case 7: palabra = "siete";break;
        case 8: palabra = "ocho";break;
        case 9: palabra = "nueve";break;
        default: "seleccione solo entre el 0 y el 9";  break; 
    }
        return palabra;
}
let valor = parseInt(prompt("Ingrese un valor entre 0 y 9"));
let r = convertirCastellano(valor);
document.write(r);

// substring = extraer un elemento de una cadena

// tarea: hacer que el prompt pida un valor decimal ejemplo 3.6 y pasarlo a texto y si es 3.6999999 no redondear, en ese caso deberia imprimir ("tres punto seis") 