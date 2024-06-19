//Ejercico 1
// 1. Tiene dos arreglos de String, ‘clientes’ y ‘empleados’, y deseas combinarlas para
// crear una arreglo de contactos. ¿Qué método sería el más adecuado para esta
// tarea? Prueba todas las opciones y describe el resultado.
// a. concat
// b. join
// c. push
// d. splice 
let clientes = ["cliente1", "cliente2"];
let empleados = ["empleado1", "empleado2"];

let combinar = clientes.concat(empleados);
console.log(combinar);
//la respuesta es concat



//ejercicio 2
// Teniendo el siguiente arreglo:
// var numbers = [5, 32, 43, 4];
// Y la siguiente función:
// numbers.filter(function(n) { return n % 2 !== 0; });
// Agrega una variable para alojar el resultado de la función filter() y explica cual
// es el resultado. 

var numbers = [5, 32, 43, 4];
var resultado = numbers.filter(function(n) { return n % 2 !== 0; });

console.log(resultado);
//la funcion filter verifica si los numeros son pares o impares 
//dando como resultado el 5 y el 43



//ejercicio 3
// Dado el siguiente arreglo de objetos:
// var people = [{
//  id: 1,
//  name: "John",
//  age: 28
// }, {
//  id: 2,
//  name: "Jane",
//  age: 31
// }, {
// id: 3,
//  name: "Peter",
// age: 55 }];
// Genera la función en javascript que filtre a las personas menores de 35 años.

var people = [{
     id: 1,
     name: "John",
     age: 28
    }, {
     id: 2,
     name: "Jane",
     age: 31
    }, {
    id: 3,
     name: "Peter",
    age: 55 }];

var personasMenores = people.filter( function(persona) {
    return persona.age < 35;
});
console.log(personasMenores); 



//ejercicio 4
// Dado el siguiente arreglo de objetos:
// let people = [
// { name: "bob", id=1 }, { name: "john", id=2 },
// { name: "alex", id=3 }, { name: "john", id=3 }
// ];
// Genera la función para obtener el numero de veces que aparece cada nombre. 


let people = [
{ name: "bob", id: 1 }, { name: "john", id: 2 },
{ name: "alex", id: 3 }, { name: "john", id: 3 }
];

function contarNom(people) {
    let nombreGuardado = {};

    people.forEach(personas => {
        if (nombreGuardado[personas.name]) {
            nombreGuardado[personas.name]++
         } else {
            nombreGuardado[personas.name] = 1;
         }
        
    });
  return nombreGuardado;
}
let resultados = contarNom(people);
console.log(resultados);



// Ejercico 5
// Dado el siguiente arreglo:
// var myArray = [1, 2, 3, 4];
// Genera la función para imprimir en consola el numero máximo y el numero
// mínimo.

var myArray = [1, 2, 3, 4];

function maxMin(array) {
    var maximo = Math.max(...array);
    var minimo = Math.min(...array);
    console.log("numero maximo", maximo);
    console.log("numero minimo", minimo);
}

maxMin(myArray);





//ejercicio 6
// Teniendo el siguiente objeto:
// var object = {
//  key1: 10,
//  key2: 3,
//  key3: 40,
//  key4: 20
// };
// Generar la función para pasar cada elemento ‘key’ a un arreglo y ordenarlos
// según su valor.

var object = {
     key1: 10,
     key2: 3,
     key3: 40,
     key4: 20
    };
function ordenar(obj) {
    var keys = Object.keys(obj);

keys.sort(function(a, b) {
    return obj[a] - obj[b];
}); 
    return keys;
}

var ordenarLlaves = ordenar(object);
console.log(ordenarLlaves);








