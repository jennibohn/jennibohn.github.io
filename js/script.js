window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".mhc-navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
    }
  });