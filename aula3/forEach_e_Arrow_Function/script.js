//exercicio aula 3, forEach e Arrow Function

//mostre no console cada paragrafro do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
    });
    
//mostre o texto dos paragrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
    });


//como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

