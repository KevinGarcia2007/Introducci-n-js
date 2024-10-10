let edades = ["17", "45", "53", "78", "33"];
let suma = 0;
let promedio = 0;

for (let i = 0; i < edades.length; i++) {
    document.write("Las edades del arreglo son: " + edades[i] + "<br>");
    suma += parseInt(edades[i]); 
    promedio = suma / edades.length;
}



document.write("La suma de las edades es: " + suma + "<br>");
document.write("El promedio de las edades es: " + promedio + "<br>");

for (let i = 0; i < edades.length; i++) {
    if (parseInt(edades[i]) < promedio) {
        document.write("Las edades menores al promedio son: " + edades[i] + "<br>");
    }
    else{
        document.write("Las edades mayores al promedio son: " + edades[i] + "<br    >");
    }
}
