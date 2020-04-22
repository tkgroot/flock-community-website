
document.addEventListener("click", function(e) {
  if(e.target.classList.contains('hamburger__menu--link')) {
    document.querySelector('.checkbox-toggle').click();
  }
  if(e.target.classList.contains('navbar-toggler')) {
    document.querySelector('.nav-menu').classList.toggle("show");
  }
  if(e.target.classList.contains('hamburger__menubar--link')) {
    document.querySelector('.nav-menu').classList.toggle("show");
  }
});

var scroll = new SmoothScroll("a[data-scroll]");
