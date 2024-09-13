//exercicio aula 3, html e css

//retorne no console todas as imagens do site

const imagens = document.querySelectorAll('img');
console.log(imagens);

//retorne no console apenas as imagens 
//que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descrição h2');
console.log(primeiroH2);

//selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);

