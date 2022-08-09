// Get all Variables  
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav a");
const menuMobile = document.querySelectorAll(".nav-action");
const search = document.querySelectorAll(".search-action");
const searchClose = document.querySelectorAll(".close-search");
var iconTheme = document.getElementById("change-theme");


// Active Menu Links On its Sections
window.onscroll = function()  {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop -95) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });

  // sticky header
  if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
    document.getElementById("header").classList.add("active");
  } else {
    document.getElementById("header").classList.remove("active")
  }
};

// open Search Form
search[0].addEventListener("click", function(){
  document.getElementById("search-form").classList.add("active");
});

// close Search Form
searchClose[0].addEventListener("click", function(){
  document.getElementById("search-form").classList.remove("active");
});

// Responsive Menu Toggle 
menuMobile[0].addEventListener("click", function(){
  document.getElementById("header-main-nav").classList.toggle("active");
});

// Dark theme Toggle 

let localData = localStorage.getItem('theme');
if(localData == null){
  localStorage.setItem('theme','light');
}

if(localData == 'light'){
  document.body.classList.remove("dark-theme");
}else if(localData == 'dark'){
  document.body.classList.add("dark-theme");
}


iconTheme.onclick=function(){
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem('theme','dark');
  }else{
    localStorage.setItem('theme','light');
  }
  
}
 






