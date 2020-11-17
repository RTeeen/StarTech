let urlpath = window.location.href;
let last = urlpath.split("/").pop();
let page = last.slice(0, -5);
let tab = document.getElementById(page);
tab.classList.add("active");
