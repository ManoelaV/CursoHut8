//exercicio aula 2, atribuição e ternario

//some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll);

//atribua true para a variavel darCredito
//caso o cliente possua carro e casa
//e false caso o contrário
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? 'dar credito' : 'não dar credito';

console.log(darCredito);
