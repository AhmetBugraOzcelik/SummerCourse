const menuBtn = document.querySelector('.burger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }

  else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const navMenu = document.querySelector("#nav-items");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.classList.toggle("active");
});

 document.querySelectorAll(".dropdown .dropdown-click").forEach(function(dropdown) {
  dropdown.addEventListener("click", function (dd) {
    if (dropdown.parentNode.classList.contains("open")) {
      dropdown.parentNode.classList.remove("open");
      return
    }

    if (document.querySelector(".dropdown.open")) {

      document.querySelector(".dropdown.open").classList.remove("open")
    }
    dropdown.parentNode.classList.add("open");
  });
});

const header1 = document.getElementsByTagName("header");
console.log(header1)

var n = 0;
$( "div.dropdown" )
  .mouseenter(function() {
    $("header").removeClass("active");
    
  })
  .mouseleave(function() {
    $("header").addClass("active");
  });
