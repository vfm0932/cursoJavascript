let usuario = prompt("ingrese su usario");
let password = prompt("ingrese su contraseña");
let saldoactual = 100;
let retirardinero;
let depositardinero;
let cambiarclave;
alert("hola " + usuario)

let operacion = parseInt(prompt("que operacion desea hacer \n  1 si quiere ver su saldo actual \n  2 Retirar dinero \n 3 depositar dinero en su cuenta \n 4 cambiar su clave"))

if (operacion === 1) {
    alert("la catidad de saldo actual es de " + saldoactual)
}
if (operacion === 2) {

    retirardinero = parseFloat(prompt("ingrese la cantidad de dinero a retirar"))
    if (saldoactual < retirardinero) {
        alert("no tenes suficientes fondos")
    } else {
        saldoactual = saldoactual - retirardinero;
        alert("te queda en la cuenta " + saldoactual)
    }


}
if (operacion === 3) {

    depositardinero = parseFloat(prompt("ingrese la cantidad de dinero que desea depositar"));
    saldoactual = saldoactual + depositardinero;
    alert("se a depositado " + depositardinero + " su total es de " + saldoactual)

}
if (operacion === 4) {

    cambiarclave = prompt("ingrese la clave nueva");
    password = cambiarclave;
    alert("su contraseña a cambiado")

}