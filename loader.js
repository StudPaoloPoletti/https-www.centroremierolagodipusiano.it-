const loader = document.querySelector("div#loader");
const imgloader = document.querySelector("div#loader img");
const body = document.querySelector("body")

loader.style.opacity = "1";
imgloader.style.opacity = "1";
body.style.overflow = "hidden";


setTimeout(function() {
    loader.style.opacity = "0";
  }, 3000);
  loader.addEventListener('transitionend', function () {
    loader.style.display = 'none';
    body.style.overflow = "auto";
  });

  setTimeout(function() {
    imgloader.style.opacity = "0.3";
  }, 1000);

