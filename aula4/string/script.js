//exercicio aula 4, string
//utilizando foreach na array abaixo
//some os valores de taxa e os valres de recebimento

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$', '');
    if(item.descricao.slice(0, 4) === 'Taxa'){
        taxaTotal += numeroLimpo;
    } else if(item.descricao.slice(0, 4) === 'Rece'){
        recebimentoTotal += numeroLimpo;
    }
});
console.log(taxaTotal);
console.log(recebimentoTotal);

//retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);


//substitua todos os span's por a

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
            </ul>`;

html = html.split('span').join('a');

//retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice( - 1));

//retorne o total de taxas
const transacoes2 = [ 'Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado',
     'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim();
    item.slice(0, 4);
    if(item === 'taxa'){
        taxasTotal++;
    }
});

console.log(taxasTotal);