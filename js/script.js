const nav = document.querySelector('#mobile');
const menu = document.querySelector('.menu');
const navWrap = document.querySelector('.navWrap');
const navImg = document.querySelector('#smallLogo');
const opacityDivs = document.querySelectorAll('.opacity');


document.querySelector('html').addEventListener('click touchstart', function(e){
  e.preventDefault()
});
document.querySelector('html').addEventListener('click touchend', function(e){
  e.preventDefault();
});
document.querySelector('body').addEventListener('click touchstart', function(e){
  e.preventDefault();
});
document.querySelector('body').addEventListener('click touchend', function(e){
  e.preventDefault();
});

const navsocial = document.querySelector('.sociallink');
navsocial.addEventListener('click', function(e){
  e.preventDefault();
});

const navlisten = document.querySelector('.listenlink');
navlisten.addEventListener('click', function(e){
  console.log(tour);
  e.preventDefault();
});

function menuToggle(){
  if (menu.innerHTML === "menu"){
    menu.innerHTML = "close";
    menu.classList.add('highlight');
    nav.classList.remove('closed');
    navImg.classList.remove('none');
    setTimeout(
      function(){
      opacityDivs.forEach( opacityDiv => opacityDiv.classList.add('showOpacity'));
      },
    200);
  }
  else{

    opacityDivs.forEach( opacityDiv => opacityDiv.classList.remove('showOpacity'));

    setTimeout(
      function(){
        nav.classList.add('closed');
        navImg.classList.add('none');
        menu.innerHTML = "menu";
        menu.classList.remove('highlight');
      },
    300);
  }
}

nav.addEventListener('click', menuToggle);
