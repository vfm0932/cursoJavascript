let nombre = prompt("ingrese su nombre!");
alert("Hola " + nombre);
let apellido = prompt("ingrese su apellido!");
console.log("Hola " + nombre + " " + apellido);


let num1 = prompt("ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");
console.log(parseInt(num1) + parseInt(num2));


let edad = prompt("ingrese la edad que cumple o cumplio este año");
let añoactual = 2021;
resultado = parseInt(añoactual) - edad;
console.log("Usted nacio en el año" + " " + resultado)


let balance = parseInt(2000);
let retirar = prompt("cuanto dinero desea retirar");
let nuevobalance = balance - parseInt(retirar);
console.log(nuevobalance);


let not1 = prompt("ingrese nota 1");
let not2 = prompt("ingrese nota 2");
let not3 = prompt("ingrese nota 3");
let resultado = (parseInt(not1) + parseInt(not2) + parseInt(not3)) / 3;
console.log(resultado);


revisar
let metros = parseFloat(prompt("ingrese su medida en metros"));
let pies = parseFloat(3.2)
let centimetros = parseFloat(100)
let pulgadas = parseFloat(40)
let resultado = " pies " + (metros * pies) + " centimetros " + (metros * centimetros) + " pulgadas " + (metros * pulgadas)
console.log(resultado);


let numero1 = parseInt(prompt("ingrese el primer numero"));
let numero2 = parseInt(prompt("ingrese el segundo numero"));
let resul = numero1 + numero2;
alert(resul)
let numero3 = prompt("ingrese el tercer numero");
let resultadofinal = resul * numero3;
alert(resultadofinal)



let minutos = parseInt(prompt("ingrese una cantidad de minutos"));
let segundos = 60;
let resultado = minutos * segundos
console.log(resultado)



let base = parseInt(prompt("ingrese la base"));
let altura = parseInt(prompt("ingrese la altura"));
let resultado = base * altura;
console.log("el area es " + resultado)


//revisar
let base = parseInt(prompt("ingrese la base"));
let altura = parseInt(prompt("ingrese la altura"));
resultado = (base / 2) * altura
console.log(resultado);



let monto = parseInt(prompt("ingresar monto"));
let descuento = parseInt(prompt("ingresar descuento"));
let precio = (monto * descuento) / 100
resultado = monto - precio
console.log(resultado)


let nombre = prompt("ingrese su nombre")
let edad = parseInt(prompt("ingrese su edad en el año 2021"))
let año = 2021
let añonacimiento = año - edad
let concatenar = "Hola " + nombre + " " + "usted nacio en el año " + añonacimiento
console.log(concatenar)




let nombre = prompt("ingrese su nombre")
let temperatura = parseInt(prompt("ingrese una temperatura"))
let gradospasar = parseFloat((temperatura * 9 / 5) + 32)
console.log(gradospasar)
console.log("Hola " + nombre + " " + " la temperatura en Fahrenheit es la siguiente " + gradospasar)



let nombre = prompt("ingrese su nombre")
let temperatura = parseInt(prompt("ingrese una temperatura"))
let gradospasar = parseFloat((temperatura - 32) * 5 / 9)
console.log(gradospasar)
console.log("Hola " + nombre + " " + " la temperatura en celsius es la siguiente " + gradospasar)



let solicitandonumero = parseFloat(prompt("ingrese un numero"))
let sumando = ((solicitandonumero + 5) * 10) / 3
console.log(parseInt(sumando))



let num1 = prompt("ingresa el primer numero")
let num2 = prompt("ingresa el segundo numero")
unicopaso = num1 + num2
console.log(unicopaso)



let cantidad = parseFloat(prompt("ingrese una cantidad de dias"))
let dia = 86400
let conversor = cantidad * dia;
console.log(cantidad * dia);
año = 365 * dia;
let cantidadAño = parseFloat(prompt("ingrese una cantidad de años"))
console.log(cantidadAño * año)
    //comprobacion
console.log(31536000 / 365)