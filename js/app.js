/* Entrega Condicional 1  */ 


let nombre = prompt('Hola como te llamas');
alert('Segun la edad que tengas podras ingresar o no')
let edad = parseInt(prompt('cuantos años tienes'));

if (edad >= 18){

alert(`Bienvenido ${nombre} como tenes ${edad} podes ingresar`);
}

else{
    alert(`Disculpa ${nombre} eres menor de edad`)
}


/* Condicional 2 */

/* let nombre = prompt('Hola como te llamas');
let dia = parseInt(prompt('que dia naciste'));
let mes = parseInt(prompt('que numero de mes'));


if (dia >= 21 && mes == 3  || dia <=19 && mes == 4 ){
    alert('tu signo es aries');
}
else if (dia >= 20 && mes == 4  || dia <=20 && mes == 5 ){
    alert('tu signo es Tauro')
}
else if (dia >= 21 && mes == 5  || dia <=20 && mes == 6 ){
    alert('tu signo es Geminis')
}
else if (dia >= 21 && mes == 6  || dia <=22 && mes == 7 ){
    alert('tu signo es Cancer')
}
else if (dia >= 23 && mes == 7  || dia <=22 && mes == 8 ){
    alert('tu signo es Leo')
}
else if (dia >= 23 && mes == 8  || dia <=22 && mes == 9 ){
    alert('tu signo es Virgo')
}
else if (dia >= 23 && mes == 9  || dia <=22 && mes == 10 ){
    alert('tu signo es Libra')
}
else if (dia >= 23 && mes == 10  || dia <=21 && mes == 11 ){
    alert('tu signo es Escorpion')
}
else if (dia >= 22 && mes == 11  || dia <=21 && mes == 12 ){
    alert('tu signo es Sagitario')
}
else if (dia >= 22 && mes == 12  || dia <=19 && mes == 1 ){
    alert('tu signo es Capricornio')
}
else if (dia >= 20 && mes == 1  || dia <=18 && mes == 2 ){
    alert('tu signo es Acuario')
}
else if (dia >= 19 && mes == 2  || dia <=20 && mes == 3 ){
    alert('tu signo es Piscis')
}
else{
    alert('no ingresaste una fecha correcta')
}
 */



/* Ejemplo For */



/* let numeroelegido = 7 ;
let nombre2 = prompt('Hola como te llamas?')
let numeroingresado = parseInt(prompt(`Perfecto ${nombre2} Juguemos un juego.. ingresa un numero  del 1 al 15`));

for (let i = 0; i <= 15; i++) {
if (numeroelegido!=numeroingresado)
numeroingresado= prompt(`Ese no era el numero ${nombre2}!.Por favor escoge otro numero`);
else{
    break;
}
    
}
alert(`Felicitaciones ${nombre2} Adivinaste el numero!`);

 */



