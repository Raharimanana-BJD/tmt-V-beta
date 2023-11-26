import "./style.css";
import "@fontsource/poppins";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = document.querySelectorAll("nav a");
const navigation = document.querySelector("nav");
const toggle = document.querySelector(".toggle");
const [top, middle, bottom] = document.querySelectorAll(".toggle > *");

const activeLink = (e) => {
  e.preventDefault();
  const link = e.target;
  if (link.classList.contains("active")) {
    return;
  } else {
    link.parentElement.querySelector(".active").classList.remove("active");
    link.classList.add("active");
  }
};

const showAndHideMobileMenu = () => {
  navigation.classList.toggle("active");
  top.classList.toggle("active");
  middle.classList.toggle("active");
  bottom.classList.toggle("active");
};

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    activeLink(e);
    toggle.classList.remove("active");
  });
});

toggle.addEventListener("click", showAndHideMobileMenu);

gsap.utils.toArray(".flex-col").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 20,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
});

function updateLayout() {
  const mainSection = document.getElementById("mainSection");
  const windowHeight = window.innerHeight;

  if (windowHeight <= 658) {
    mainSection.classList.add("center-items");
  } else {
    mainSection.classList.remove("center-items");
  }
}

// Mettez à jour la mise en page initiale lors du chargement de la page
updateLayout();

// Mettez à jour la mise en page lorsque la fenêtre est redimensionnée
window.addEventListener("resize", updateLayout);
