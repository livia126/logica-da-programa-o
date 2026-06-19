let n = 123;

if (numero > 99 && numero < 1000) {
let centenas = (numero - (numero % 100)) / 100;
console.log (`Algarismo das centenas : ${centenas}`);
}else {
    console.log ( "Número fora do intervalo");
}
