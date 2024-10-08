//exercicio aula 3, scroll suave
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');


  if(tabMenu.length && tabContent.length){
    function activeTab(index){
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
      })
    });
  }
}
initTabNav();

function iniAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ativoClass = 'ativo';
  if(accordionList.length){
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    function activeAccordion(evet){
      this.classList.toggle(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
      })
  }
}
iniAccordion();

function initScrollSuave(){ 
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });


  /*const topo = section.offsetTop;
  window.scrollTo({
    top: topo,
    behavior: 'smooth',
  });*/
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
initScrollSuave();

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) {
        section.classList.add('ativo');
      }else{
        section.classList.remove('ativo');
      }
    })
  }
  animaScroll();

  window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();