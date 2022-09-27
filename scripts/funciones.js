console.log("Sesion HS02 funciones");

/**
 * Este es un ejemplo de una funcion declarada (function declaration, function statment).
 * Una caracteristica de las funciones declaradas es que tiene  hoisting (elevacion).
 * Realiza la multiplicacion de 2 numeros
 * @param {Number} a multiplicando 1
 * @param {Number} b multiplicando 2
 * @returns resultado de la multiplicacion de a*b
 */
function multiplica( a, b){
    return a*b;
}
//+++++++++++++++++++ Funcion declarada +++++++++++++++
//llamado a la funcion declarada
console.log("Multiplica 5 * 6 = " + multiplica(5,6))

//++++++++Funcion expresada ++++++++++++++++
/**
 * Las funciones expresadas (function expresions)
 * son declaradas dentro de la asignacion de una variable>
 * 
 * Estas funciones pueden ser anonimas (no tener nombre).
 * Las punciones expresadas no tienen hoisting
 */

/**
 * Sumatoria de 2 numeros
 * @param {Number} a 
 * @param {Number} b 
 * @returns resultado de a+b
 */
const suma = function ( a, b) { return a +b;}

console.log("el resultado de 56 + 4 = " + suma (56, 4) );

//++++++++++++++ Funcion autoinvocada +++++++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anonimas y se ejecutan () en su declaracion.
 */

(function () {
    console.log("=============");
    console.log("Hola crayoli");
    console.log("=============");
})();

//++++++++++++++++++++ Funcipones flecha ++++++++++++++++++++

/**
 * Las funciones flecha (arrow function) funcionan similar a las
 * funciones declaradas, pero no requieren la
 * palabra "function y si tienen solo instruccion
 * y en el retorno, no requiere la instruccion "return".
 */
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta = (a, b) => a-b;

console.log("La resta de 10-5 = " + resta(10,5));

//++++++++++++++++++++ Parametros defaul ++++++++++++++++++++
/**
 * Funcion con parametros inicializados
 */
function divide(a,b=0) {
    return a/b
}

console.log ("La division de a/b = " + divide(4));

//++++++++++++++++++++ Funciones recursivas ++++++++++++++++++++

function factorial(num) {
    if(num<=0) return 1;
    return (num* factorial(num-1));
}

console.log("Factorial de 4 = " + factorial(4));

///+++++++++++++++++++++++++++++ Rest Parameters ++++++++++++++++++

// (parameters => operation)
// (param1, param2) => {

// return data
//};

function sum( a, b, ...resto){
    let suma = a+b;
    resto.forEach( element => {
        suma+= element;
    });
    return suma;
}

console.log("El resultado de sumar varios números es: " + sum(2,3,5,7,3));
