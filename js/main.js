
//saludo
let nombre = prompt("¿Cómo te llamas?")
function saludar(nombre) {
    return `Hola ${nombre}, eres colosal!!!`
}


//suma de 2 numeros
function suma(num1, num2) {
    return num1 + num2
}
let numero1 = parseInt(prompt("Introduce el primer sumando"))
let numero2 = parseInt(prompt("Introduce el segundo sumando"))
console.log(`Los numeros ${numero1} y ${numero2} suman ${suma(numero1, numero2)}`)


//calcular paridad de un numero
function paridad(num) {
    if (num % 2 === 0) {
        return "El numero es par"
    } else {
        return "El numero es impar"
    }
}
let num = parseInt(prompt("Introduce un numero para saber su paridad"))
console.log(paridad(num));


//calcular mayor de 3 numeros
function mayor(num1, num2, num3) {
    mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }
}
let numeroA = parseInt(prompt("Introduce el primer numero"))
let numeroB = parseInt(prompt("Introduce el segundo numero"))
let numeroC = parseInt(prompt("Introduce el tercer numero"))
console.log(`El número mas grande de los introducidos es ${mayor(numeroA, numeroB, numeroC)}`)


//conversion celsius farenheit
function convertir(celsius) {
    return (celsius * 9 / 5) + 32;
}
let celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius"))
console.log(`${celsius}ºC son ${convertir(celsius)}ºF`)