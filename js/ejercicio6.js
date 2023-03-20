//6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//●	La fórmula del perímetro  es p = 2*(a +b)
//Ejemplo:
//Input:
//lado A = 24
//lado B = 5
//Output: 58 


const perimetro = (altura,base) => 2*(altura+base);
let ladoA = parseInt(prompt('Ingrese el valor de un lado del triangulo'));
let ladoB = parseInt(prompt('Ingrese el otro valor de un lado del triangulo'));
document.write(`El perimetro de su triangulo es de ${perimetro(ladoA,ladoB)}`)
