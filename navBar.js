

let photo = document.getElementById("eimage");
let Navbar = document.getElementById("navbar");
let pageContent = document.getElementById("content");
var photoRotate = document.getElementById('eimage');

var path = window.location.pathname;
var pages = path.split("/").pop();
console.log( pages );

window.onscroll = function() {
if(pages == "index.html"){
  photo.style.transform = "rotate("+window.pageYOffset/20+"deg)";
  console.log(window.pageYOffset);
  if ( window.pageYOffset > 850 ) {
    console.log("hello");
      photoRotate.style.position = "absolute";
      photoRotate.style.marginTop ="850px";
  } else {
    photoRotate.style.position = "fixed";
    photoRotate.style.marginTop ="80px";
  }
  if (window.pageYOffset >= 1600) {
    navbar.classList.add("sticky");
    pageContent.classList.add("content");
  } else {
    navbar.classList.remove("sticky");
    pageContent.classList.remove("content");
  }
}else{
  navbar.classList.add("sticky");
  pageContent.classList.add("content");
}

}
function contactus(event){
  alert("Phone: (778) 123 4567 \n Email: support@startech.ca");
}