//exercicio aula 3, dimensões e distancias
//verifique a distancia da primeira imagem em relação ao topo da página

const primeiraImagem = document.querySelector('img');
const distanciaPrimeiraImagem = primeiraImagem.offsetTop;

console.log(distanciaPrimeiraImagem);

//retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

//verifique se os links da página 
//possuem o minimo recomendado para telas 
//utilizadas com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade');
  } else {
    console.log(link, 'Não possui acessibilidade');
  }
});

//se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;
if (browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
console.log(browserSmall);

console.log(somaImagens());
