import "./style.css";

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
