//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe
// ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


const tablaMulti = (num) => {
    for (let i = 1; i < 11; i++) {
      document.write(`${i} * ${num} = ${i * num}<br>`);
      console.log(i);
    }
  };
  let numero = parseInt(prompt(`Ingrese un numero`));
  document.write(`Tabla del ${numero} <br>`);
  tablaMulti(numero);