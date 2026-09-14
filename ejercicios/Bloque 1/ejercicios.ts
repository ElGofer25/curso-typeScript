// Ejercicio 1
const  input = prompt('Put your temperature in celsius, please: ');
const temperature = Number(input);

if ( temperature <= 0){
    console.log("Frío"); //Para imprimir un valor se usa console.log
} else if( temperature > 0 && temperature <= 24){
    console.log('Templado');
} else if( temperature > 25 && temperature <= 34){
    console.log('Caliente');
} else if( temperature > 35 && temperature <= 40){
    console.log('Muy caliente');
} else if(temperature < 0 && temperature > 40){
    console.log('Temperatura extrema')
}