const cookieBanner = document.getElementById("cookie-banner");
const acceptCookie = document.getElementById("accept-cookie");

const lastAcceptedDate = getCookie("lastAcceptedDate");
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

if (lastAcceptedDate === "" || new Date(lastAcceptedDate) < oneYearAgo) {
  cookieBanner.style.display = "flex";
  document.body.style.overflow = "hidden";
} else {
  cookieBanner.style.opacity = "0";
  setTimeout(() => cookieBanner.style.display = "none", 1000);
}

acceptCookie.addEventListener("click", function () {
  setCookie("lastAcceptedDate", new Date().toUTCString(), 365);
  cookieBanner.style.opacity = "0";
  document.body.style.overflow = "auto";
  setTimeout(() => cookieBanner.style.display = "none", 1000);
});

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return "";
}
