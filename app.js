/* DESAFIOS:
1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3.- Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.
5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

//1.- Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log('¡Hola, mundo!');
}

//2.- Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.


function pideNombre(){
    let nombre = prompt('Ingrese su nombre: ');
    holaNombre(nombre);
}

function holaNombre(nombre){
    console.log('¡Hola, ' + nombre + '!');
}

//3. - Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function pideUnNumero(){
    let numeroDeUsuario=parseInt(prompt('Ingrese un número entero: '));
    let numeroDoble = dobleDelNumero(numeroDeUsuario);
    alert('El doble de ' + numeroDeUsuario + ' es ' + numeroDoble);
}

function dobleDelNumero(numeroUsuario){
    return numeroUsuario * 2;
}

//4.- Crear una función que reciba tres números como parámetros y devuelva su promedio.
function pideTresNumeros(){
    let numero1 = parseFloat(prompt('Ingrese el primer número: '));
    let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
    let numero3 = parseFloat(prompt('Ingrese el tercer número: '));
    let numPromedio=promedio(numero1, numero2, numero3);
    alert('El promedio entre ' + numero1 + ', ' + numero2 + ' y ' + numero3 + ' es ' + numPromedio);
}

function promedio(num1, num2, num3){
    return (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;
}

//5.- Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function pideDosNumeros(){
    let numero1 = parseFloat(prompt('Ingrese el primer número: '));
    let numero2 = parseFloat(prompt('Ingrese el segundo número: '));
    let numMayor=numeroMayor(numero1, numero2);
}
function numeroMayor(num1, num2){
    if (num1>num2) {
        alert('Entre ' + num1 + ' y ' + num2 + ' el primer número es el mayor: ' + num1);
    }
    else if(num1<num2){
        alert('Entre ' + num1 + ' y ' + num2 + ' el segundo número es el mayor: ' + num2);
    }
    else {
        alert('Los números son iguales: ' + num1 + ' y ' + num2);
    }
}

//6.- Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function pideUnNumeroParaElCuadrado(){
    let numeroDeUsuario=parseInt(prompt('Ingrese un número: '));
    let numCuadrado = cuadradoDeUnNumero(numeroDeUsuario);
    alert('El cuadrado de ' + numeroDeUsuario + ' es ' + numCuadrado);
}

function cuadradoDeUnNumero(numeroUsuario){
    return numeroUsuario*numeroUsuario;
}

//Función para asignar texto a un elemento de la página HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


asignarTextoElemento('h1','Curso 2 - Lógica de programación y JavaScript');
asignarTextoElemento('h2','Práctica del Aula 2');
asignarTextoElemento('h3','Para ver los resultados de los ejercicios 1 y 2 habilitar la vista de la consola, en Herramientas para desarrolladores del navegador');