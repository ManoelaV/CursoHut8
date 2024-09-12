//exercicio aula 2, funções
//crie uma função para verificar se um valor é truthy

function isTruthy(valor){
    return !!valor;
}

//crie uma função matemática que retorne o perímetro de um quadrado
//lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadadro(lado){
    return lado * 4;
}

//crie uma função que retorne o seu nome completo
//ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`;
}

//crie uma função que verifica se um número é par

function ePar(numero){
   if(numero % 2 === 0){
       return 'é par';
   }else{
        return 'não é par';
   }
}

//Crie uma função que retorne o tipo de
//dado do argumento passado nela (typeof)

function tipoDado(dado){
    return typeof dado;
}

//addEventListener é uma função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e o segundo o Callback
//utilize essa função para mostrar no console o seu nome completo
//quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log(nomeCompleto('Manoela', 'Moura'));
});

//corrija o erro abaixo
function precisoVisitar(paisesVisitados){
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}
function jaVisitei(paisesVisitados){
    var totalPaises = 193;//faltava declarar totalPaises
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
console.log(isTruthy('Manu'));
console.log(perimetroQuadadro(5));
console.log(nomeCompleto('Manoela', 'Moura'));
console.log(ePar(4));
console.log(tipoDado('Manu'));

