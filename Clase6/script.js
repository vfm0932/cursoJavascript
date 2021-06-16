/*
//0

 const usuario = "usuario";
 let saldo = 1000; 
 let pass = 1234; 
 let usuarioIngresado = prompt("Ingrese su usuario");
 let operacion="si";

 if (usuarioIngresado !== usuario){
     alert("Usuario incorrecto, el programa se cerrará.");
 }  else {
     let passIngresado = parseInt(prompt("Ingrese su contraseña"));
     if (passIngresado !== pass){
         alert("Contraseña incorrecta, el programa se cerrará.");
    } 
 }

 while (operacion ==="si") {
         let opcion = parseInt(prompt("Elija una de las siguientes opciones:  1- Ver saldo actual  |  2- Retirar dinero | 3- Depositar dinero en su cuenta | 4- Cambiar su clave."));
     switch (opcion){
         case 1:
             alert("Tu saldo actual es de $" + saldo);
             break;
         case 2:
             let retiro = parseInt(prompt("Ingrese el monto a retirar"));
             if (retiro > saldo){
                 alert("El monto ingresado es mayor a su saldo actual. Su saldo actual es de $" + saldo );
             } else {
                 saldo = saldo - retiro;
                 alert("Usted retiró $"+ retiro + ". Su saldo actual es de $" + saldo );
             }
             break;
         case 3:
             let deposito = parseInt(prompt("Ingrese el monto a depositar"));
             saldo = saldo + deposito;
             alert("Usted ingresó $"+ deposito + ". Su nuevo saldo es de $" + saldo );
             break;
         case 4:
             let nuevoPass = parseInt(prompt("Ingrese su nueva clave"));
             let nuevoPassBis = parseInt(prompt("Reingrese su clave"));
             if (nuevoPass === nuevoPassBis){
                 pass = nuevoPass;
                 alert("Su nueva clave es: " + pass);
             } else {
                 alert("Las claves ingresadas no coinciden. El programa se cerrará"); 
             }
             break;
         default:
             alert("Opción no válida. El programa se cerrará.")
     }
       operacion=prompt("Desea realizar otra operacion?Escriba si o no")
 }
     
       
    


 //1) 
    // for (let i = 1; i <= 10; i++) {
    //     console.log(i);
    //  }

 //2) 
     let suma =0;
     for (let i = 1 ; i <=5; i++) {
         let numero = parseFloat(prompt("Ingrese un numero"));
         suma= suma + numero;
     }
      console.log(`La suma es igual a ${suma}`)

     let numero1 = parseInt(prompt("¿Cuantos numeros quiere sumar?"))
     let intentos= 0;
     let suma= 0;
     do {
         let numero= parseInt(prompt("ingrese numero"))
         intentos++;
         suma = suma + numero
     } while (intentos<numero1);

     console.log(`La suma es igual a ${suma}`)

 //4)
     let suma= 0;
     let numero;
         while(numero !== 0) {
             numero= parseInt(prompt("ingrese numeros, cuando ingre se 0 se cortara y mostrara el resultado de los numero ingresados"));
             suma = suma + numero;
         }
     alert(`Usted ingreso el ${numero}, la suma de todos los numero ingresados es ${suma}`);


// 5)
     let suma= 0;
     let numero;
     let cantidadNumero=0;
         while(numero !== 0) {
             numero= parseInt(prompt("ingrese numeros, cuando ingre se 0 se cortara y mostrara el resultado de los numero ingresados")
             suma = suma + numero;
             cantidadNumero++
         }
     promedio = suma/(cantidadNumero-1);
     alert(`Usted ingreso el ${numero}, el promedio de la suma es igual a  ${promedio}`);




//6
let numerointroducido = parseInt(prompt("ingrese un numero"));
for (let i = 1; i < numerointroducido + 1; i++) {
    console.log(i)
}


//7
let num1 = parseInt(prompt("ingrese el primer numero"))
let num2 = parseInt(prompt("ingrese el segundo numero"))
console.log(num1 + " " + num2)
for (let i = num1 + 1; i < num2; i++) {
    console.log(i)

}

//8
let numeromayor = 0
let cuantosnumeros = prompt("cuantos numeros desea ingresar")
for (let i = 0; i < cuantosnumeros; i++) {
    let numero = parseInt(prompt("ingresar numeros"))

    if (numeromayor < numero) {

        numeromayor = numero
    }

    console.log(numeromayor)
}

console.log("el numero mayor es el " + numeromayor)


//9
let numeromenor = 0
let cuantosnumeros = prompt("cuantos numeros desea ingresar")

for (let i = 0; i < cuantosnumeros; i++) {
    let numero = parseInt(prompt("ingresar numeros"))

    if (numeromenor === 0) {
        numeromenor = numero
    }

    if (numeromenor > numero) {
        numeromenor = numero

    }
    console.log(numeromenor)
}
console.log("el numero menor es el " + numeromenor)


//10


let cantidad = parseInt(prompt("ingrese un numero"))

for (let i = 0; i < cantidad; i++) {

    console.log("*")

}


11
let base = parseInt(prompt("ingrese la base"))
let exponente = parseInt(prompt("ingrese el exponente"))
let x = 1
for (let i = 0; i < exponente; i++) {

    x = x * base

}
console.log(x)


12
let factorial = parseInt(prompt("ingrese un numero"))
for (let i = factorial; i > 0; i--) {

    let resultado = i
    console.log(factorial + " multiplicado por " + resultado)

}



//13)
   let numero = parseInt(prompt("ingrese un numero y le diremos sus divisores"));
     for (let i = numero; i > 0; i--) {
       if (numero%i===0) {
        console.log(i);
          }
           }


//14)

     let numero = parseInt(prompt("Ingrese un numero"));
     let cadena = prompt("Ingrese una cadena de caracteres");
   
     for (let i = 0; i < numero ; i++) {
         console.log(cadena.charAt(i).toUpperCase()); 
    
     }


//15) 
       lista = prompt("Ingrese una lista de supermercado, cuando no quiera ingresar mas, escriba fin");
       console.log(lista.replaceAll(" ",","));
  
//16)

 let resto;
 do {
     let numero = parseInt(prompt("ingrese un numero"));
     if (numero%3===0) {
         resto=0;
     }else{
         console.log(numero)
     }
 } while (resto!=0);

 */