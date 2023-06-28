const hamburgerOpenConst = document.querySelector(".hamburgerOpen");
const hamburgerCloseConst = document.querySelector(".hamburgerClose");
const menuPageConst = document.querySelector(".menuPage");
const pageLinkConst = document.querySelectorAll(".pageLink");

function openMenu() {
  menuPageConst.style.display = "flex";
  menuPageConst.style.top = "0";
}

function closeMenu() {
  menuPageConst.style.top = "-100%";
}

function handlePageLinkClick() {
  closeMenu();

  const targetSectionId = this.getAttribute("href");

  const targetSection = document.querySelector(targetSectionId);

  targetSection.scrollIntoView({ behavior: "smooth" });
}

hamburgerOpenConst.addEventListener("click", openMenu);
hamburgerCloseConst.addEventListener("click", closeMenu);

pageLinkConst.forEach((item) => {
  item.addEventListener("click", handlePageLinkClick);
});

// popup
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

const projects = [
  {
    name: "Multi Post Stories",
    description: " A daily selection of privately personalized reads",
    image: "popupImg.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
  {
    name: "Professional Art Printing Data",
    description: " A daily selection of privately personalized reads",
    image: "screen.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
  {
    name: "Professional Art Printing Data",
    description: " A daily selection of privately personalized reads",
    image: "screen.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
  {
    name: "Professional Art Printing Data",
    description: " A daily selection of privately personalized reads",
    image: "screen.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
  {
    name: "Professional Art Printing Data",
    description: " A daily selection of privately personalized reads",
    image: "screen.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
  {
    name: "Professional Art Printing Data",
    description: " A daily selection of privately personalized reads",
    image: "screen.png",
    technologies: ["HTML", "Bootstrap", "Ruby On Rails"],
    liveLink: "https://examplelinkofpage.com/live",
    sourceLink: "https://examplelinkofpage.com/source",
  },
];

function openPopup(index) {
  const project = projects[index];

  const popup = document.getElementById("popup");
  const popupName = document.getElementById("popupName");
  const popupTechnologies = document.getElementById("popupTechnologies");
    const popupImage = document.getElementById("popupImage");
  const popupDescription = document.getElementById("popupDescription");
  const popupLiveLink = document.getElementById("popupLiveLink");
         const popupSourceLink = document.getElementById("popupSourceLink");

  popupName.textContent = project.name;

  popupTechnologies.innerHTML = project.technologies.map(tech => `<li>${tech}</li>`).join("");
  popupImage.src = project.image;

  popupDescription.textContent = project.description;
  popupLiveLink.onclick = () => window.open(project.liveLink);
  popupSourceLink.onclick = () => window.open(project.sourceLink);

  popup.classList.add("open-popup");
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.remove("open-popup");
}
