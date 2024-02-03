const mask = document.getElementById("mask");
const main = document.getElementById("mainBox");
const site = document.getElementById("siteUnderConstruction");
const hi = document.getElementById("hi");
const nameTitle = document.getElementById("nameTitle");
const title = document.getElementById("title");
// ToDo sections
const section1 = document.getElementById("toDoSection1");
const section2 = document.getElementById("toDoSection2");

window.addEventListener("scroll", function () {
  let section1 = document.querySelector("#toDoSection1");
  let section1Position = section1.getBoundingClientRect().top;
  let section2 = document.querySelector("#toDoSection2");
  let section2Position = section1.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  if (section1Position < screenPosition) {
    console.log("test");
    section1.classList.remove("hidden");
    section1.classList.add("visible");
  }
  if(section2Position < screenPosition){
    console.log('test 2')
    section2.classList.remove("hidden");
    section2.classList.add("visible");
  }
});

function loadIntro() {
  setTimeout(() => {
    mask.classList.add("hidden");
  }, 1500);
  setTimeout(() => {
    main.classList.remove("hidden");
    main.classList.add("visible");
  }, 2000);
  setTimeout(() => {
    hi.classList.remove("hidden");
    hi.classList.add("visible");
  }, 2200);
  setTimeout(() => {
    nameTitle.classList.remove("hidden");
    nameTitle.classList.add("visible");
  }, 2500);
  setTimeout(() => {
    title.classList.remove("hidden");
    title.classList.add("visible");
  }, 2800);
}
loadIntro();
