const hamburgerOpenConst = document.querySelector('hamburgerOpen');
const hamburgerCloseConst = document.querySelector('hamburgerClose');
const menuPageConst = document.querySelector('menuPage');
const pageLinkConst = document.querySelector('pageLink');

hamburgerOpenConst.addEventListener('click', function open(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
});

hamburgerCloseConst.addEventListener('click', function close(){
    mainMenu.style.top = '-100%';
})