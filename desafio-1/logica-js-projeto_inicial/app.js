alert('Boas vindas ao nosso site!')
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;


let mensagemDeErro = 'Erro! Preencha todos os campos'
alert(mensagemDeErro)
let nomeU = prompt('Qual o seu nome?')
let idadeU = prompt('Qual a sua idade?')

if (idadeU >= 18){
    alert('Você pode tirar habilitação!')
}else{
    alert('Você é muito novo!')
}
