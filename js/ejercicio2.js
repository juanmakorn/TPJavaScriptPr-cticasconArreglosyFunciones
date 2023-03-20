// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

// ●	Mostrar la longitud del arreglo.
// ●	Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
// ●	Añade en última posición la ciudad de París.
// ●	Escribe por pantalla el elemento que ocupa la segunda posición.
// ●	Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

// Ejemplo:
// Input:
// [‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

// Output:
 
let cuidades = ['Nueva York, Estados Unidos', 'Barcelona, España', 'Tokio, Japón', 'Londres, Reino Unido','Roma, Italia','Pekín, China', 'Río de Janeiro, Brasil','Ámsterdam, Países Bajos', 'Sídney, Australia', 'El Cairo, Egipto'];


document.write('<h2>Cuidades del Mundo</h2>')
document.write('<ul>')
for(let indice=0;indice<cuidades.length;indice++){
document.write(`<li>${cuidades[indice]}</li>`)
}
document.write('</ul')


document.write('<h2>La cantidades de cuidades del Array</h2>')
document.write('<ul>')
document.write(cuidades.length)
document.write('</ul')


document.write('<ul>')
document.write('<h2>La primera cuidad</h2>')
const primerCuidad = cuidades[0];
document.write(primerCuidad)
document.write('</ul')
document.write('<ul>')
document.write('<h2>La ultima cuidad</h2>')
const ultimaCuidad = cuidades[9];
document.write(ultimaCuidad)
document.write('</ul')
document.write('<ul>')
document.write('<h2>La media cuidad</h2>')
const mediaCuidad = cuidades[5];
document.write(mediaCuidad)
document.write('</ul')




document.write('Elemento posicion 2: '+cuidades[2]);
cuidades[2] = 'Barcelona, España';

document.write('<h2>Modificamos el elemento de la posicion 2 del array</h2>')
document.write('<ul>')
for(let indice=0; indice < cuidades.length; indice++){
    document.write(`<li>${ cuidades[indice] }</li>`)
}
document.write('</ul>')