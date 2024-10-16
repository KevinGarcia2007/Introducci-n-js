let datos = [
    ["Antioquia", "Medellín", "20°"],
    ["Cundinamarca", "Bogotá", "15°"],
    ["Magdalena", "Santa Marta", "38°"],
    ["Boyaca", "Tunja", "11°"]
];

document.write("Valor Matriz: " + datos[3][2]);
document.write("<br>" + "Matriz de Datos:");

for (let i = 0; i < datos.length; i++) {
    document.write("<br>");
    for (let j = 0; j < 3; j++) {
        document.write(datos[i][j] + " ");
    }
}   