const images = document.querySelectorAll('.image');

images.forEach(image => {
image.addEventListener('click', function(e) {

if (document.querySelector(".fullscreen")) {
if (e.target.tagName === "IMG") {
return;
} else {
document.body.removeChild(document.querySelector(".fullscreen"));
document.body.classList.remove('no-scroll');
return;
}
}

const fullscreen = document.createElement('div');

fullscreen.classList.add('fullscreen');
setTimeout(function() {
  fullscreen.style.opacity = "1";
}, 10);

const img = document.createElement('img');

img.src = this.src;
fullscreen.appendChild(img);
var close = document.createElement('span');
close.classList.add('close');
close.innerHTML = "×";
fullscreen.appendChild(close);
document.body.appendChild(fullscreen);
document.body.classList.add('no-scroll');

fullscreen.addEventListener('click', function(e) {
  if (e.target.classList.contains('close') || e.target === this) {
    fullscreen.style.opacity = "0";
    setTimeout(function() {
      document.body.removeChild(fullscreen);
      document.body.classList.remove('no-scroll');
    }, 200);
  }
});
});
});

images.forEach(image => {
  image.style.cursor = "pointer";
})