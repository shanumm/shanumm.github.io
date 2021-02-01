const image1 = document.querySelector(".cursor1");
const image2 = document.querySelector(".cursor2");
const image3 = document.querySelector(".cursor3");
const image4 = document.querySelector(".cursor4");
const image5 = document.querySelector(".cursor5");
const image6 = document.querySelector(".cursor6");
const image7 = document.querySelector(".cursor7");
const image8 = document.querySelector(".cursor8");
const overlay = document.querySelector(".overlay");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const top_section = document.querySelector(".top-section");
const project = document.querySelector(".projects-section");
const image = document.querySelector(".hover-image");

project.addEventListener("mousemove", (e) => {
  const left = e.clientX;
  const top = e.clientY;
  image.style.top = top + "px";
  image.style.left = left + "px";
  const skewX = left / 100;
  const skewy = top / 100;
  image.style.opacity = 0.7;
  image.style.transform = `skew(-${skewy}deg,-${skewX}deg) rotateZ(${skewX}deg)`;
  console.log(`skew(${skewX}deg,${skewy}deg)`);
});

project.addEventListener("mouseleave", (e) => {
  image.style.opacity = 0;
});

image1.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (533).png')";
});
image2.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (526).png')";
});
image3.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (527).png')";
});
image4.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (528).png')";
});
image8.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (529).png')";
});
image5.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (530).png')";
});
image6.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (531).png')";
});
image7.addEventListener("mouseover", (e) => {
  image.style.backgroundImage = "url('./images/Screenshot (532).png')";
});

window.addEventListener("onscroll", (e) => {
  image.style.opacity = 0;
});

overlay.addEventListener("animationend", (e) => {
  overlay.style.display = "none";
});

// black effect
var cursor = document.getElementById("object");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

top_section.addEventListener("mouseleave", (e) => {
    cursor.style.display = "none";
    cursor.style.width = 0 + "px";
    cursor.style.height = 0 + "px";
});

top_section.addEventListener("mouseenter", (e) => {
    cursor.style.display = "block";
    cursor.style.width = 100 + "px";
    cursor.style.height = 100 + "px";
});