import "./style.css";

const links = document.querySelectorAll("nav a");
const navigation = document.querySelector("nav");
const toggle = document.querySelector(".toggle");
const [top, middle, bottom] = document.querySelectorAll(".toggle > *");

const activeLink = (e) => {
  e.preventDefault();
  const link = e.target;
};
