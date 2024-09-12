//exercicio aula 2, boolean e condicionais
//verifica se a sua idade é maior do que a de algum parente
//dependendo do resultado apresenta no console a mensagem "é maior", "é iguaç" "ou é menor"

var minhaIdade = 20;
var idadeParente = 25;

if(minhaIdade > idadeParente){
    console.log('é maior');
} else if(minhaIdade === idadeParente){
    console.log('é igual');
} else {
    console.log('é menor');
}

//qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);


//verifica se as seguintes variaveis são truthy ou falsy
var nome = 'Manu';//true
var idade = 20;//true
var possuiDoutorado = false;//false
var empregoFuturo;//false
var dinheiroNaConta = 0;//false



//compare o total de habitantes do Brasil com a China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes');
} else if(brasil === china){
    console.log('Brasil e China tem o mesmo número de habitantes');
} else {
    console.log('Brasil tem menos habitantes');
}


//o que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else {
    console.log('Falso');
}
//falso, pq a string 'Gato' é diferente de 'gato'

//o que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
//cão, pq o operador && retorna o ultimo valor verdadeiro

console.log(expressao);
console.log(!! nome, !! idade, !! possuiDoutorado, !! empregoFuturo, !! dinheiroNaConta);