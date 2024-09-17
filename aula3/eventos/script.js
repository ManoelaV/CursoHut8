//exercicio aula 3, eventos
//quando o usuario clicar nos links internos da pagina
//adicione a classe ativo ao item clicado
//e remova dos demais itens caso eles possuam a mesma.
//previsa o comportamento padrao desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');
function handleLink(event){
    event.preventDefault();
    linksInternos.forEach((link) => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
}
linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

//selecionar todos os elementos do site começando a partir do body,
//ao clicar mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event) {
    console.log('Elemento clicado:', event.currentTarget);
}

todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});

//utilizando o codigo anterior, ao inves de mostrar no console,
//remova o elemento que esta sendo clicado, o metodo remove() remove um elemento
function handleElemento(event){
    event.currentTarget.remove();
}
todosElementos.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});


//se o usuario clicar na tecla t, aumente todo o texto do site
document.addEventListener('keydown', function(event) {
  if (event.key === 't' || event.key === 'T') {
      const currentFontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
      document.body.style.fontSize = (currentFontSize + 2) + 'px';
  }
});