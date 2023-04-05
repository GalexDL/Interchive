//Story Front Page
//
//

const carousel = document.querySelector(".carousel");
arrowIcons = document.querySelectorAll(".storewrapper i");
firstBut = document.querySelectorAll("a")[0];

let firstButWidth = firstBut.clientWidth + 280;

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () =>{
    console.log(icon);
    carousel.scrollLeft += icon.id =="left" ? -firstButWidth : firstButWidth;
  });
});

//Resources HTML Javascript
//
//
window.onload = function() {
  var tabLinks = document.querySelectorAll('.tab-links li');
  var tabContent = document.querySelectorAll('.tab-content');

  tabLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var id = this.firstChild.getAttribute('href').substr(1);
      tabContent.forEach(function(content) {
        if (content.id === id) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
      tabLinks.forEach(function(link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
};



//Header 
//
//
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}




const copyButtons = document.querySelectorAll(".copy-button");

copyButtons.forEach(button => {
  button.addEventListener("click", () => {
    const codeBlock = button.parentNode.querySelector("code");
    navigator.clipboard.writeText(codeBlock.innerText);
    button.innerText = "Copied!";
    setTimeout(() => {
      button.innerText = "Copy";
    }, 2000);
  });
});



