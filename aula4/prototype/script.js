//exercicio aula 4, prototype
//cria uma função contrurora de pessoas
//deve conter nome, sobrenome e idade
//crie um metodo no prototipo que retorne
//o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome;
}

var pessoa1 = new Pessoa('Lucas', 'Fernandes', 25);
console.log(pessoa1.nomeCompleto());

//liste os metodos acessados por
//dados criados com NodeList,
//HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

//liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; //HTMLLIElement
li.click; //Function
li.innerText; //String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined

//qual o construtor do dado abaixo:
li.hidden.constructor.name; //String