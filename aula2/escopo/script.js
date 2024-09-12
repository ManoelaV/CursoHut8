//exercicio aula 2, escopo
'use strict';

//por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    console.log(cor, marca, portas);//adiciona o console.log dentro do bloco
}
//console.log(cor, marca, portas);


//como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2;
    return x + dois;
}
function dividirDois(x) {
    const dois = 2;//adiciona a const dois resolve o problema
    return x + dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));