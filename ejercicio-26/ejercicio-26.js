"use strict";

let numero;
let contador = 0;
let acumulador = 0;
let min, max;
// Uso do while ya que no se la cantidad de datos que se van a ingresar
do {
    contador ++;
    // Le pido el número al usuario
    do {
        numero = parseInt(prompt("Ingrese el número"));
    } while(isNaN(numero))
    // Verifico si el número se ingreso en orden par o impar. Para esto necesito un contador.
    if (contador % 2 != 0) {
        acumulador += numero;
        // acumulador = acumulador + numero
    }

    if (contador == 1) {
        min = numero;
        max = numero;
    } else {
        if (numero < min) {
            min = numero;
        }
        if (numero > max) {
            max = numero;
        }
    }

// El usuario decide si seguir ingresando o no   
} while(confirm("Quiere seguir ingresando números?"))

document.write(`La suma de todos los valores que se ingresaron en orden impar es de ${acumulador}. El valor máximo ingresado es de ${max}, y el mínimo es de ${min}`);