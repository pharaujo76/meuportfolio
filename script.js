class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
 
AOS.init({ 
    once: true,
    duration: 1350
});

let p = document.getElementById('mudar');

function enter (){
    var img = document.getElementById('sobre-foto');
    img.style.opacity = '100%'
    img.style.borderLeftColor = 'white'
}

function sair () {
    var img = document.getElementById('sobre-foto');
    img.style.opacity = '70%'
    img.style.borderLeftColor = '#03e9f4'
}

function entrando () {
    var img = document.getElementById('enter1');
    img.src = "./src/imagens/imglinguagens/html3.svg";
    img.style.width = '77px'
    p.innerHTML = "<strong>HTML</strong><br> <br>É uma linguagem de marcação utilizada na construção de páginas na Web."
    p.style.marginTop = '-29px'
}

function clicando () {
    var img = document.getElementById('enter1');
    img.src = "./src/imagens/imglinguagens/html3.svg";
    img.style.width = '77px'
    p.innerHTML = "<strong>HTML</strong><br> <br>É uma linguagem de marcação utilizada na construção de páginas na Web."
    p.style.marginTop = '-29px'
}

function saindo () {
    var img = document.getElementById('enter1');
    img.src = "src/imagens/imglinguagens/html.png";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}

function entrando2 () {
    var img = document.getElementById('enter2');
    img.src = "src/imagens/imglinguagens/cssfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>CSS</strong><br> <br>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web"
    p.style.marginTop = '-29px'
}

function clicando2 () {
    var img = document.getElementById('enter2');
    img.src = "src/imagens/imglinguagens/cssfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>CSS</strong><br> <br>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web"
    p.style.marginTop = '-29px'
}

function saindo2 () {
    var img = document.getElementById('enter2');
    img.src = "src/imagens/imglinguagens/css.png";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}

function entrando3 () {
    var img = document.getElementById('enter3');
    img.src = "src/imagens/imglinguagens/jsfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>JavaScript</strong><br> <br>É uma linguagem de programação de script em alto nível. JavaScript é uma das principais tecnologias da World Wide Web."
    p.style.marginTop = '-29px'
}

function clicando3 () {
    var img = document.getElementById('enter3');
    img.src = "src/imagens/imglinguagens/jsfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>JavaScript</strong><br> <br>É uma linguagem de programação de script em alto nível. JavaScript é uma das principais tecnologias da World Wide Web."
    p.style.marginTop = '-29px'
}

function saindo3 () {
    var img = document.getElementById('enter3');
    img.src = "src/imagens/imglinguagens/js.png";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}

function entrando4 () {
    var img = document.getElementById('enter4');
    img.src = "src/imagens/imglinguagens/gitfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>GitHub</strong><br> <br>é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
    p.style.marginTop = '-29px'
}

function clicando4 () {
    var img = document.getElementById('enter4');
    img.src = "src/imagens/imglinguagens/gitfixo.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>GitHub</strong><br> <br>é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git."
    p.style.marginTop = '-29px'
}

function saindo4 () {
    var img = document.getElementById('enter4');
    img.src = "src/imagens/imglinguagens/giithub.svg";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}

function entrando5 () {
    var img = document.getElementById('enter5');
    img.src = "src/imagens/imglinguagens/bootstrap.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>Bootstrap</strong><br> <br>É um framework com código-fonte aberto para desenvolvimento de aplicações web."
    p.style.marginTop = '-29px'
}

function clicando5 () {
    var img = document.getElementById('enter5');
    img.src = "src/imagens/imglinguagens/bootstrap.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>Bootstrap</strong><br> <br>É um framework com código-fonte aberto para desenvolvimento de aplicações web."
    p.style.marginTop = '-29px'
}

function saindo5 () {
    var img = document.getElementById('enter5');
    img.src = "src/imagens/imglinguagens/bootstrap.png";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}


function entrando6 () {
    var img = document.getElementById('enter6');
    img.src = "src/imagens/imglinguagens/reactfoxp.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>React (Em breve)</strong><br> <br>É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário.  "
    p.style.marginTop = '-29px'
}

function clicando6 () {
    var img = document.getElementById('enter6');
    img.src = "src/imagens/imglinguagens/reactfoxp.svg"
    img.style.width = '77px'
    p.innerHTML = "<strong>React (Em breve) </strong><br> <br>É uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário. "
    p.style.marginTop = '-29px'
}

function saindo6 () {
    var img = document.getElementById('enter6');
    img.src = "src/imagens/imglinguagens/react.png";
    img.style.width = '77px'
    p.innerHTML = "*Click ou passe o mouse em cima de cada habilidade para ler a descrição.*"
    p.style.marginTop = '25px'
}

function enterandroid () {
    var imgandroid = document.getElementById('android');
    imgandroid.style.opacity = '67%';
    imgandroid.style.borderLeftColor = 'purple'
}

function leaveandroid () {
    var imgandroid = document.getElementById('android');
    imgandroid.style.opacity = '40%';
    imgandroid.style.borderLeftColor = '#03e9f4'
}

function entertlou () {
    var imgtlou = document.getElementById('tlou');
    imgtlou.style.opacity = '90%';
    imgtlou.style.borderLeftColor = 'purple'
}

function leavetlou () {
    var imgtlou = document.getElementById('tlou');
    imgtlou.style.opacity = '55%';
    imgtlou.style.borderLeftColor = '#03e9f4'
}

function enternetflix () {
    var imgtlou = document.getElementById('netflix');
    imgtlou.style.opacity = '90%';
    imgtlou.style.borderLeftColor = 'purple'
}

function leavenetflix () {
    var imgtlou = document.getElementById('netflix');
    imgtlou.style.opacity = '55%';
    imgtlou.style.borderLeftColor = '#03e9f4'
}

function enterlanding () {
    var imgtlou = document.getElementById('landingpage');
    imgtlou.style.opacity = '90%';
    imgtlou.style.borderLeftColor = 'purple'
}

function leavelanding () {
    var imgtlou = document.getElementById('landingpage');
    imgtlou.style.opacity = '55%';
    imgtlou.style.borderLeftColor = '#03e9f4'
}

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 215 * i)

  });
}
const titulo = document.querySelector('#nomepedro');
typeWrite(titulo);
