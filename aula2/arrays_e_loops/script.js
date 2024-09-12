//exercicio aula 2, arrays e loops
//crie um array com os anos que o brasil ganhou a copa
//1959, 1962, 1970, 2002

var brasilCampeao = [1959, 1962, 1970, 2002];

//interaja com a array utilizando um loop, para mostrar
//no console a seguinte mensagem, 'o brasil ganhou a copa de ${ano}'
for(var i = 0; i < brasilCampeao.length; i++){
    console.log(`O Brasil ganhou a copa de ${brasilCampeao[i]}`);
}

//interaja com um loop nas frutas abaixo e para ao chegar em pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];
for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}

//coloque a ultima fruta da array acima em uma variavel 
//sem remover a mesma da array
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);


                   

