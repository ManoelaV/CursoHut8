//exercicio aula 3, classes e atributos
//adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

//remove a classe ativo de todos os itens do menu
//e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const possuiAlt = img.hasAttribute('alt');
  console.log(img, possuiAlt);
});

//modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"]');

if (linkExterno) {
    linkExterno.setAttribute('href', 'https://www.google.com');
    console.log(linkExterno);
} else {
    console.log('Nenhum link externo encontrado.');
}

//modificado pois não tem link externo, diferente do exemplo da aula
//eu optei por não adicionar link pois eu n tinha nenhum para adicionar

