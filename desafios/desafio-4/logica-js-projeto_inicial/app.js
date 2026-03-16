console.log('Boas-vindas.');
let nome = 'Vinícius';
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}!`)

let linguagem = prompt('Qual é a linguagem de programação que você mais gosta?')
console.log(linguagem)

let valor1 = 15;
let valor2 = 7;
let resultado = (valor1 + valor2)
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`)

let idade = prompt('Qual a sua idade?')

if (idade >= 18){
    console.log('Você é maior de idade!')
}else {
    console.log('Você é menor de idade!')
}

var numero = parseFloat(prompt("Digite um número:"));


if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}