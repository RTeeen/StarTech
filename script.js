let urlpath = window.location.href;
let last = urlpath.split("/").pop();
let page = last.slice(0, -5);
let tab = document.getElementById(page);
tab.classList.add("active");

function togglespecs(e) {
  let tgId = "#" + e.target.attributes.tg.value;
  let itemspec = document.querySelector(tgId);
  if (itemspec.style.display == "flex") {
    itemspec.style.display = "none";
  } else {
    itemspec.style.display = "flex";
  }
}

window.addEventListener("load", function () {
  let specs = document.getElementsByClassName("specs");
  for (let i = 0; i < specs.length; i++) {
    const element = specs[i];
    element.style.display = "none";
  }
});


