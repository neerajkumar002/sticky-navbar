const header = document.querySelector("header");
const navbar = document.querySelector("nav");

let navTop = navbar.offsetTop;

 window.onscroll  = function(){ 
    handleStickyNavbarOnScroll();   
}

function handleStickyNavbarOnScroll(){
    if(window.scrollY>=navTop){
        navbar.classList.add("fixed-navbar");
      }
      else{
          navbar.classList.remove("fixed-navbar");
          
    }
}

