const hamburgerOpenConst = document.querySelector('.hamburgerOpen');
const hamburgerCloseConst = document.querySelector('.hamburgerClose');
const menuPageConst = document.querySelector('.menuPage');
const pageLinkConst = document.querySelectorAll('.pageLink');

function openMenu() {
  menuPageConst.style.display = 'flex';
  menuPageConst.style.top = '0';
}

function closeMenu() {
  menuPageConst.style.top = '-100%';
}

function handlePageLinkClick() {
  closeMenu();
  
  // Get the target section id from the href attribute of the clicked link
  const targetSectionId = this.getAttribute('href');
  
  // Use the target section id to get the corresponding section element
  const targetSection = document.querySelector(targetSectionId);
  
  // Scroll to the target section using smooth scrolling behavior
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

hamburgerOpenConst.addEventListener('click', openMenu);
hamburgerCloseConst.addEventListener('click', closeMenu);

pageLinkConst.forEach((item) => {
  item.addEventListener('click', handlePageLinkClick);
});
