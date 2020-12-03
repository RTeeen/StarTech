

let photo = document.getElementById("eimage");
let Navbar = document.getElementById("navbar");
let pageContent = document.getElementById("content");
var photoRotate = document.getElementById('eimage');

var path = window.location.pathname;
var pages = path.split("/").pop();
console.log( pages );

window.onscroll = function() {
if(pages == "index.html"){
  photo.style.transform = "rotate("+window.pageYOffset/15+"deg)";
  console.log(window.pageYOffset);
  if ( window.pageYOffset > 1000 ) {
    console.log("hello");
      photoRotate.style.position = "absolute";
      photoRotate.style.marginTop ="1080px";
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