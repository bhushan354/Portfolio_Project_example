const hamburgerOpenConst = document.querySelector('.hamburgerOpen');
const hamburgerCloseConst = document.querySelector('.hamburgerClose');
const menuPageConst = document.querySelector('.menuPage');
const pageLinkConst = document.querySelectorAll('.pageLink');


function open() {
    menuPageConst.style.display = 'flex';
    menuPageConst.style.top = '0';
  }
  
  function close() {
    menuPageConst.style.top = '-100%';
  }
  
  hamburgerOpenConst.addEventListener('click', open);
  hamburgerCloseConst.addEventListener('click', close);
