//exercicio aula 2, numeros e operadores

//qual resultado da seguinte expressao?
var total = 10 +5 * 2 / 2 + 20;

//crie duas expressoes que retornem NaN
var expressao1 = 'numero 4' / 2 ;
var expressao2 = 'numero 5' * 5;

//somar a string '200' como o numero 50 e retornar 250
var soma = +'200' + 50;

//incremente o numero 5 e retorne o seu valor incrementado
var incremento = 5;
console.log('valor incrementado: '+ ++incremento);

//como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade;
var pesoPorDois = peso / 2; //NaN (Not a Number) 
var pesoPorDoisCerto = +numero /2 + unidade;

console.log('Expressao: '+total);
console.log('Expressao1 NAN: ' + expressao1);
console.log('Expressao1 NAN: ' + expressao2);
console.log('Soma de string + numero: ' + soma);
console.log('Peso dividido por dois: ' + pesoPorDoisCerto);
