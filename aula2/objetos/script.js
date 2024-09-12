//exercicio aula 2, objetos
//crie um objeto com os seus dados pessoais
//deve possuir pelo menos duas propriedades nome e sobrenome

var dadosPessoais = {
    nome: 'Manoela',
    sobrenome: 'Moura',
    idade: 20,
    estado: 'RS',
}

//crie um metodo no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

//modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//crie um objeto de um cachorro que represente um labrador
//preto com 10 anos, que late ao ver um homem

var cachorro = {
    raça: 'labrador', 
    cor: 'preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'Au au';
        } else {
            return 'Nada';
        }
    }
}

console.log(dadosPessoais.nomeCompleto());
console.log(carro.preco);
console.log(cachorro.latir('homem'));
console.log(dadosPessoais);