const chiSiamo = document.querySelector("#ulchisiamomenuridfinepag");
const clubHouse = document.querySelector("#ulclubhousemenuridfinepag");
const foresteria = document.querySelector("#ulforesteriamenuridfinepag");
const boatHouse = document.querySelector("#ulboathousemenuridfinepag");
const centroEstivo = document.querySelector("#ulcentroestivomenuridfinepag");
const canottaggio = document.querySelector("#ulcanottaggiomenuridfinepag");
const regate = document.querySelector("#ulregatemenuridfinepag");
const rwc = document.querySelector("#ulrwcmenuridfinepag");
const chiSiamoimg = document.querySelector("#xchisiamo");
const clubHouseimg = document.querySelector("#xclubhouse");
const foresteriaimg = document.querySelector("#xforesteria");
const boatHouseimg = document.querySelector("#xboathouse");
const centroEstivoimg = document.querySelector("#xcentroestivo");
const canottaggioimg = document.querySelector("#xcanottaggio");
const regateimg = document.querySelector("#xregate");
const rwcimg = document.querySelector("#xrwc");
const chiSiamop = document.querySelector("#pxchisiamo");
const clubHousep = document.querySelector("#pxCH");
const foresteriap = document.querySelector("#pxforesteria");
const boatHousep = document.querySelector("#pxBH");
const centroEstivop = document.querySelector("#pxCE");
const canottaggiop = document.querySelector("#pxcanottaggio");
const regatep = document.querySelector("#pxregate");
const rwcp = document.querySelector("#pxrwc");



chiSiamo.style.height = "0px";
chiSiamoimg.style.transform = "rotate(0deg)"
clubHouse.style.height = "0px";
clubHouseimg.style.transform = "rotate(0deg)"
foresteria.style.height = "0px";
foresteriaimg.style.transform = "rotate(0deg)"
boatHouse.style.height = "0px";
boatHouseimg.style.transform = "rotate(0deg)"
centroEstivo.style.height = "0px";
centroEstivoimg.style.transform = "rotate(0deg)"
canottaggio.style.height = "0px";
canottaggioimg.style.transform = "rotate(0deg)"
regate.style.height = "0px";
regateimg.style.transform = "rotate(0deg)"
rwc.style.height = "0px";
rwcimg.style.transform = "rotate(0deg)"

chiSiamop.style.cursor = "pointer";
clubHousep.style.cursor = "pointer";
foresteriap.style.cursor = "pointer";
boatHousep.style.cursor = "pointer";
centroEstivop.style.cursor = "pointer";
canottaggiop.style.cursor = "pointer";
regatep.style.cursor = "pointer";
rwcp.style.cursor = "pointer";



chiSiamop.addEventListener("click", function() {
    if (chiSiamo.style.height === "0px") {
      chiSiamo.style.transition = "height 0.3s ease-in-out";
      chiSiamoimg.style.transition = "transform 0.3s ease-in-out";
      chiSiamo.style.height = "120px";
      chiSiamoimg.style.transform = "rotate(45deg)";
    } else {
      chiSiamo.style.transition = "height 0.3s ease-in-out";
      chiSiamoimg.style.transition = "transform 0.3s ease-in-out";
      chiSiamo.style.height = "0px";
      chiSiamoimg.style.transform = "rotate(0deg)";
    }
});

clubHousep.addEventListener("click", function() {
    if (clubHouse.style.height === "0px") {
      clubHouse.style.transition = "height 0.3s ease-in-out";
      clubHouseimg.style.transition = "transform 0.3s ease-in-out";
      clubHouse.style.height = "120px";
      clubHouseimg.style.transform = "rotate(45deg)";
    } else {
      clubHouse.style.transition = "height 0.3s ease-in-out";
      clubHouseimg.style.transition = "transform 0.3s ease-in-out";
      clubHouse.style.height = "0px";
      clubHouseimg.style.transform = "rotate(0deg)";
    }
});

foresteriap.addEventListener("click", function() {
    if (foresteria.style.height === "0px") {
      foresteria.style.transition = "height 0.3s ease-in-out";
      foresteriaimg.style.transition = "transform 0.3s ease-in-out";
      foresteria.style.height = "60px";
      foresteriaimg.style.transform = "rotate(45deg)";
    } else {
      foresteria.style.transition = "height 0.3s ease-in-out";
      foresteriaimg.style.transition = "transform 0.3s ease-in-out";
      foresteria.style.height = "0px";
      foresteriaimg.style.transform = "rotate(0deg)";
    }
});

boatHousep.addEventListener("click", function() {
    if (boatHouse.style.height === "0px") {
      boatHouse.style.transition = "height 0.3s ease-in-out";
      boatHouseimg.style.transition = "transform 0.3s ease-in-out";
      boatHouse.style.height = "30px";
      boatHouseimg.style.transform = "rotate(45deg)";
    } else {
      boatHouse.style.transition = "height 0.3s ease-in-out";
      boatHouseimg.style.transition = "transform 0.3s ease-in-out";
      boatHouse.style.height = "0px";
      boatHouseimg.style.transform = "rotate(0deg)";
    }
});

centroEstivop.addEventListener("click", function() {
    if (centroEstivo.style.height === "0px") {
      centroEstivo.style.transition = "height 0.3s ease-in-out";
      centroEstivoimg.style.transition = "transform 0.3s ease-in-out";
      centroEstivo.style.height = "90px";
      centroEstivoimg.style.transform = "rotate(45deg)";
    } else {
      centroEstivo.style.transition = "height 0.3s ease-in-out";
      centroEstivoimg.style.transition = "transform 0.3s ease-in-out";
      centroEstivo.style.height = "0px";
      centroEstivoimg.style.transform = "rotate(0deg)";
    }
});

canottaggiop.addEventListener("click", function() {
    if (canottaggio.style.height === "0px") {
      canottaggio.style.transition = "height 0.3s ease-in-out";
      canottaggioimg.style.transition = "transform 0.3s ease-in-out";
      canottaggio.style.height = "90px";
      canottaggioimg.style.transform = "rotate(45deg)";
    } else {
      canottaggio.style.transition = "height 0.3s ease-in-out";
      canottaggioimg.style.transition = "transform 0.3s ease-in-out";
      canottaggio.style.height = "0px";
      canottaggioimg.style.transform = "rotate(0deg)";
    }
});

regatep.addEventListener("click", function() {
    if (regate.style.height === "0px") {
      regate.style.transition = "height 0.3s ease-in-out";
      regateimg.style.transition = "transform 0.3s ease-in-out";
      regate.style.height = "60px";
      regateimg.style.transform = "rotate(45deg)";
    } else {
      regate.style.transition = "height 0.3s ease-in-out";
      regateimg.style.transition = "transform 0.3s ease-in-out";
      regate.style.height = "0px";
      regateimg.style.transform = "rotate(0deg)";
    }
});

rwcp.addEventListener("click", function() {
    if (rwc.style.height === "0px") {
      rwc.style.transition = "height 0.3s ease-in-out";
      rwcimg.style.transition = "transform 0.3s ease-in-out";
      rwc.style.height = "90px";
      rwcimg.style.transform = "rotate(45deg)";
    } else {
      rwc.style.transition = "height 0.3s ease-in-out";
      rwcimg.style.transition = "transform 0.3s ease-in-out";
      rwc.style.height = "0px";
      rwcimg.style.transform = "rotate(0deg)";
    }
});
