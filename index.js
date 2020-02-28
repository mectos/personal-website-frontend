// Handling the sticky navbar.
let navbar = document.getElementById("navbar");
let home = document.getElementById("home");
let sticky = navbar.offsetTop;

function stickyHeader() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    // deal with the problem of viewport
    // without it the fixation of the header causes the section to jump.
    home.style.marginBottom = "57px";
  } else {
    navbar.classList.remove("sticky");
    // deals with reseting the margin.
    home.style.marginBottom = "0px";
  }
}


// handling back to top button
// back to top function
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// scroll function to recognize you scroll from top
function scrollFunction() {
  if (window.pageYOffset > 330) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction(); stickyHeader();};
