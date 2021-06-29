/*let usuario = prompt("ingrese su nombre");
let saludo = "hola como estas"
console.log((saludo + " " + usuario).toLowerCase());
console.log((saludo + " " + usuario).toUpperCase());

//2
let num1 = parseInt(prompt("ingrese su primer numero"))
let num2 = parseInt(prompt("ingrese su segundo numero"))

function suma(n1, n2) {
    return n1 + n2
}

function resta(n1, n2) {

    return n1 - n2
}
console.log(suma(num1, num2))
console.log(resta(num1, num2))


//3

let ingreseTexto = prompt("ingrese un texto");
let pregunta = parseInt(prompt("ingrese 1 si quiere ver el resultado en pantalla o 2 si quiere verlo en consola"))
if (pregunta === 1) {
    alert(ingreseTexto.toUpperCase())
}
if (pregunta === 2) {
    console.log(ingreseTexto.toUpperCase())
}


//4 y 5
let siguiente = true
let continuar
while (siguiente) {
    let num1 = parseInt(prompt("ingrese su primer numero"))
    let num2 = parseInt(prompt("ingrese su segundo numero"))

    console.log(suma(num1, num2))
    console.log(resta(num1, num2))
    console.log(multiplicacion(num1, num2))
    console.log(division(num1, num2))
    console.log(potencia(num1, num2))


    continuar = prompt("desea continuar");
    if (continuar === "si".toLocaleLowerCase()) {
        siguiente = true
    } else {
        siguiente = false
    }



}

function suma(n1, n2) {
    return n1 + n2
}

function resta(n1, n2) {

    return n1 - n2
}

function multiplicacion(n1, n2) {
    return n1 * n2
}

function division(n1, n2) {
    if (n1 < n2) {
        console.log("el numero es divisible pero me da con decimal")
    }
    return n1 / n2
}

function potencia(base, exponente) {
    let r = 1
    for (let i = 0; i < exponente; i++) {
        r = r * base

    }
    return r
}

//6
let miArray = []
siguiente = true


while (siguiente) {
    let nombre = prompt("ingrese nombres para el curso")
    miArray.push(nombre)
    console.log(miArray)
    let continuar = prompt("desea continuar agregando alumnos?")
    if (continuar != "si".toLowerCase()) {
        siguiente = false
    }

}
console.log(miArray)


//7

const ej7Nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];

for (let i = 0; i < ej7Nombres.length; i++) {
    ej7Nombres[i].replace(0).toUpperCase();
    console.log(ej7Nombres[i])
}

//8

const ej8Mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX"];

for (let i = 0; i < ej8Mascotas.length; i++) {

    let variable = ej8Mascotas[i]

    if (variable.length > 6) {
        console.log("el nombre es largo")
    }
    if (variable.length <= 3) {
        console.log("el nombre es corto")
    }
    if (ej8Mascotas[i] === "Fido" || ej8Mascotas[i] === "Gertrudis") {
        console.log("hay que vacunarlo contra la rabia")
    }
    if (ej8Mascotas[i] === "Tuerca") {
        console.log("entregar alimento balanceado")
    }
    console.log(variable)


}

//9


const ej9restaurant = [25, 17, 18, 44, 12, 9, 36, 50]
let menuNiño = 450
let menuAdulto = 700;
let contador = 0;
let menor = 0
let mayor = 0
let descuento = 0.10

let resultado = 0

for (let i = 0; i < ej9restaurant.length; i++) {
    let variable = ej9restaurant[i]
    if (variable >= 18) {
        contador = contador + 700;
        mayor = mayor + 1
    } else {
        contador = contador + 450
        menor = menor + 1
    }
    resultado = contador
    if (mayor >= 4) {
        let totaldescuento = contador * descuento
        resultado = contador - totaldescuento
    }
}

console.log("el precio a pagar es de " + contador)
console.log("cantidad de adultos " + mayor)
console.log("cantidad de menores " + menor)
console.log("total descuento " + totaldescuento)
console.log("factura a pagar " + resultado)
*/
//

//10



let valorServicio = 0
let pacienteNuevo = []
let miArray = []
let consulta = true
while (consulta) {
    let codigo = parseInt(prompt("ingrese su codigo de obra social"))


    if (codigo >= 1 && codigo <= 99) {
        console.log("paciente VIP")
        valorServicio = parseInt(prompt("como valora la calidad del servicio del 1 al 10"))
        miArray.unshift(codigo)

    }
    if (codigo >= 100 && codigo <= 500) {
        console.log("paciente Prepaga")
        miArray.shift(codigo)

    }
    if (codigo >= 501 && codigo <= 999) {
        console.log("paciente Nuevo")
        posiblePaciente = prompt("desea ser paciente VIP")
        if (posiblePaciente === "si".toLowerCase()) {
            pacienteNuevo.push(codigo)
        } else {
            miArray.shift(codigo)
        }


    }
    let salida = prompt("desea salir")
    if (salida === "si") {
        consulta = false
    }
}
console.log(valorServicio)
console.log(pacienteNuevo)