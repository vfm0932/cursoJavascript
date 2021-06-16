/*let texto = "fernando"

console.log("la longitud del string es " + texto.length)
console.log("la posicion del caracter es " + texto.charAt(0))
console.log("todo el texto en minuscula" + texto.toLowerCase())
console.log("todo el texto en mayuscula" + texto.toUpperCase())
console.log("buscar primer letra" + texto.indexOf("d"))
console.log("remplazamos las a" + texto.replace("o", "u"))
console.log("verificar si tiene una letra" + texto.includes("r")) // da un true o un false
console.log("corta una parte " + texto.slice(0, 3))
*/
/*
Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
Solicitar un texto y mostrarlo todo menos la primera letra.
Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
*/

/*let ingresetexto = prompt("ingrese un texto")
let resultado = ingresetexto.includes("a");
console.log(resultado)


let ingresetexto = prompt("ingrese un texto")
let minusculas = ingresetexto.toLowerCase();
console.log(minusculas)
let mayusculas = ingresetexto.toUpperCase();
console.log(mayusculas)


let texto = prompt("ingrese una palabra")
let letra = texto.charAt(0)
console.log(letra)


let frase = prompt("ingrese una frase por favor");
let resultado = frase.length
console.log(resultado)



let numero = prompt("ingrese un numero ")
let cantidad = numero.length
console.log(cantidad)



let palabra = prompt("ingresar una palabra")
let termina = palabra.length
console.log(palabra.charAt(termina - 1))



let cadenatexto = prompt("ingrese una cadena de texto")
let cambio = cadenatexto.replace(" ", "*")
console.log(cambio);



let letra = prompt("ingrese una letra");
let cadenatexto = prompt("ingrese una cadena de texto")
let resultado = cadenatexto.includes(letra);
console.log(resultado)



let texto = prompt("ingresar un texto");
resultado = texto.slice(1);
console.log(resultado)



let ingresenombre = prompt("ingrese su nombre en minuscula");
let letra = ingresenombre.charAt(0).toUpperCase()
let todojunto = letra + ingresenombre.slice(1);
console.log(todojunto)



//  Condicionales I

//1 ??


let edad = prompt("ingrese su edad ")
if (edad < 18) {
    alert("el usuario es menor de edad")
} else {
    alert("el usuario es mayor de edad")
}



let helado = prompt("ingrese el sabor del helado que quiere")
let cobertura = prompt("¿desea cobertura?").toLowerCase()
if (cobertura === "si") {
    alert("el precio de su helado " + helado + " es de 180")
} else {
    alert("el precio de su helado de " + helado + " es de 150")
}

// falta el 4



let numero = prompt("ingrese un numero");
if (numero < 0) {
    alert("este numero es negativo")
} else {
    alert("este numero es positivo")
}



let ingresarmonto = parseFloat(prompt("ingrese un monto"))
let descuento = 0.10
let descuentorealizado;

if (ingresarmonto > 2000) {

    descuentorealizado = ingresarmonto * descuento
    let total = ingresarmonto - descuentorealizado
    console.log("el descuento realizado es de " + descuentorealizado)
    console.log("total a pagar " + total)
}



let cadena = prompt("ingresar una cadena de texto por favor")
let numero = parseInt(prompt("ingresar una posicion"));
let numeracion = cadena.charAt(numero + 1);
let posicion = numeracion



if (posicion === "a" || posicion === "e" || posicion === "i" || posicion === "o" || posicion === "u") {

    alert("esta es una vocal")

    if (posicion === " ") {
        alert(" el espacio esta en blanco")
    }
} else {
    alert("no es una vocal")
}



let usuario = parseFloat(prompt("ingrese una nota del 1 al 10"))
if (usuario < 4) {
    alert("aplazado")
}
if (usuario > 3 && usuario < 6) {
    alert("reprobado")
}
if (usuario > 5) {
    alert("aprobado")
}



let num1 = prompt("ingrese el primer valor")
let num2 = prompt("ingrese el segundo valor")

if (num1 < num2) {
    alert("el segundo valor es mas grande")
}
if (num1 > num2) {
    alert("el primer valor es mas grande")
}
if (num1 === num2) {
    alert("ambos valores son iguales")
}



let mes = parseInt(prompt("indique un numero de mes"))
switch (mes) {
    case 1:
        mes = 1
        alert("el mes tiene 31 dias")
        break;
    case 2:
        mes = 2
        alert("el mes tiene 28/29 dias depende el año")
        break;
    case 3:
        mes = 3
        alert("el mes tiene 31 dias")
        break;
    case 4:
        mes = 4
        alert("el mes tiene 30 dias")
        break;
    case 5:
        mes = 5
        alert("el mes tiene 31 dias")
        break;
    case 6:
        mes = 6
        alert("el mes tiene 30 dias")
        break;
    case 7:
        mes = 7
        alert("el mes tiene 31 dias")
        break;
    case 8:
        mes = 8
        alert("el mes tiene 31 dias")
        break;
    case 9:
        mes = 9
        alert("el mes tiene 30 dias")
        break;
    case 10:
        mes = 10
        alert("el mes tiene 31 dias")
        break;
    case 11:
        mes = 11
        alert("el mes tiene 30 dias")
        break;
    case 12:
        mes = 12
        alert("el mes tiene 31 dias")
        break;


}



let num1 = parseInt(prompt("dame el primer numero"))
let num2 = parseInt(prompt("dame segundo numero"))
let num3 = parseInt(prompt("dame el tercer numero"))

if (num1 > num2 && num1 > num3) {
    alert("el numero 1 es el mas grande")
}
if (num2 > num1 && num2 > num3) {
    alert("el numero 2 es el mas grande")
}
if (num3 > num1 && num3 > num2) {
    alert("el numero 3 es el mas grande")
}



let edad = parseInt(prompt("ingrese su edad por favor"));
let bebida = parseInt(prompt("ingrese una bebida por favor  1 cerveza  2 jugo  3 agua "))
let cerveza = 100
let agua = 60
let jugo = 80

if (bebida === 1 && edad >= 18) {
    alert("el precio del agua es " + cerveza)
    let pago = parseInt(prompt("con cuanto desea abonar"))
    if (cerveza < pago) {
        let pagocerveza = pago - cerveza
        alert("su vuelto es de " + pagocerveza)
    } else {
        alert("le falta dinero para el pago ")
    }
} else {
    alert("esta persona no es mayor de edad")
}

if (bebida === 2) {
    alert("el precio del jugo es " + jugo)
    let pago = parseInt(prompt("con cuanto desea abonar"))
    if (jugo < pago) {
        let pagojugo = pago - jugo
        alert("su vuelto es de " + pagojugo)
    } else {
        alert("le falta dinero para el pago")
    }
}
if (bebida === 3) {
    alert("el precio del agua es " + agua)
    let pago = parseInt(prompt("con cuanto desea abonar"))
    if (agua < pago) {
        let pagoagua = pago - agua
        alert("su vuelto es de " + pagoagua)
    } else {
        alert("le falta dinero para el pago")
    }
}


let mes = parseInt(prompt("indique un numero de mes"))
switch (mes) {
    case 1:
        mes = 1
        alert("enero")
        break;
    case 2:
        mes = 2
        alert("febrero")
        break;
    case 3:
        mes = 3
        alert("marzo")
        break;
    case 4:
        mes = 4
        alert("abril")
        break;
    case 5:
        mes = 5
        alert("mayo")
        break;
    case 6:
        mes = 6
        alert("junio")
        break;
    case 7:
        mes = 7
        alert("julio")
        break;
    case 8:
        mes = 8
        alert("agosto")
        break;
    case 9:
        mes = 9
        alert("septiembre")
        break;
    case 10:
        mes = 10
        alert("octubre")
        break;
    case 11:
        mes = 11
        alert("noviembre")
        break;
    case 12:
        mes = 12
        alert("diciembre")
        break;


}

*/