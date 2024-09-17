//exercicio aula 3, traversing e manipulação
//duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

//selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');
console.log(primeiroDt);

//selecione o DD referente ao primeiro DT
const proximoDd = primeiroDt.nextElementSibling;
console.log(proximoDd);

//substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
console.log(faq);
