/*Tendina Menu*/ 
const ulmenuRidotto = document.querySelector("#voci");
const menuRidotto = document.querySelector("div#menurid");


ulmenuRidotto.style.display = "none";
menuRidotto.style.height = "60px";


/*Voci del Menu*/
const chiSiamoV = document.querySelector("li#chi-siamorid p b");
const chiSiamoLista = document.querySelector("#ul-chi-siamorid");
const CHV = document.querySelector("li#club-houserid p b");
const CHLista = document.querySelector("ul#ul-club-houserid");
const foresteriaV = document.querySelector("li#foresteriarid p b");
const foresteriaLista = document.querySelector("ul#ul-foresteriarid");
const BHV = document.querySelector("li#boathouserid p b");
const BHLista = document.querySelector("ul#ul-boathouserid");
const CEV = document.querySelector("li#centro-estivorid p b");
const CELista = document.querySelector("ul#ul-centro-estivorid");
const CV = document.querySelector("li#canottaggiorid p b");
const CLista = document.querySelector("ul#ul-canottaggiorid");
const RV = document.querySelector("li#regaterid p b");
const RLista = document.querySelector("ul#ul-regaterid");
const RWCV = document.querySelector("li#rwcrid p b");
const RWCLista = document.querySelector("ul#ul-rwcrid");
const lingueV = document.querySelector("li#linguerid p b");
const lingueLista = document.querySelector("ul#ul-linguerid");

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const menu = document.querySelector('#menurid');
  const body = document.querySelector('body');
  const voci = document.querySelector('#voci');
  
  menuIcon.classList.toggle('open');
  
  if(menuIcon.classList.contains('open')) {
  menu.style.height = "100%";
  body.style.overflow = "hidden";
  voci.style.display = "block";
  } else {
  menu.style.height = "60px";
  body.style.overflow = "auto";
  voci.style.display = "none";
  }
  }



chiSiamoLista.style.height = "0px";

chiSiamoV.addEventListener("click", function() {
  if (chiSiamoLista.style.height === "0px") {
    chiSiamoLista.style.height = "130px";
    CHLista.style.height = "0px";
    CLista.style.height = "0px";
    RLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CELista.style.height = "0px";
    BHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    chiSiamoLista.style.height = "0px";
  }
});


CHLista.style.height = "0px";

CHV.addEventListener("click", function() {
  if (CHLista.style.height === "0px") {
    CHLista.style.height = "130px";
    CELista.style.height = "0px";
    chiSiamoLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CLista.style.height = "0px";
    RLista.style.height = "0px";
    BHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    CHLista.style.height = "0px";
  }
});


foresteriaLista.style.height = "0px";

foresteriaV.addEventListener("click", function() {
  if (foresteriaLista.style.height === "0px") {
    foresteriaLista.style.height = "65px";
    chiSiamoLista.style.height = "0px";
    CHLista.style.height = "0px";
    CLista.style.height = "0px";
    RLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CELista.style.height = "0px";
    BHLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    foresteriaLista.style.height = "0px";
  }
});


BHLista.style.height = "0px";

BHV.addEventListener("click", function() {
  if (BHLista.style.height === "0px") {
    BHLista.style.height = "30px";
    chiSiamoLista.style.height = "0px";
    CELista.style.height = "0px";
    RLista.style.height = "0px";
    CLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    BHLista.style.height = "0px";
  }
});

CELista.style.height = "0px";

CEV.addEventListener("click", function() {
  if (CELista.style.height === "0px") {
    CELista.style.height = "100px";
    chiSiamoLista.style.height = "0px";
    RLista.style.height = "0px";
    CLista.style.height = "0px";
    RWCLista.style.height = "0px";
    BHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    CHLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    CELista.style.height = "0px";
  }
});

CLista.style.height = "0px";

CV.addEventListener("click", function() {
  if (CLista.style.height === "0px") {
    CLista.style.height = "100px";
    chiSiamoLista.style.height = "0px";
    RLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CELista.style.height = "0px";
    BHLista.style.height = "0px";
    CHLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    CLista.style.height = "0px";
  }
});

RLista.style.height = "0px";

RV.addEventListener("click", function() {
  if (RLista.style.height === "0px") {
    RLista.style.height = "65px";
    chiSiamoLista.style.height = "0px";
    CLista.style.height = "0px";
    CELista.style.height = "0px";
    RWCLista.style.height = "0px";
    BHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    CHLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    RLista.style.height = "0px";
  }
});

RWCLista.style.height = "0px";

RWCV.addEventListener("click", function() {
  if (RWCLista.style.height === "0px") {
    RWCLista.style.height = "100px";
    chiSiamoLista.style.height = "0px";
    CELista.style.height = "0px";
    BHLista.style.height = "0px";
    RLista.style.height = "0px";
    CLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
    CHLista.style.height = "0px";
    lingueLista.style.height = "0px";
  } else {
    RWCLista.style.height = "0px";
  }
});

lingueLista.style.height = "0px";

lingueV.addEventListener("click", function() {
  if (lingueLista.style.height === "0px") {
    lingueLista.style.height = "130px";
    CHLista.style.height = "0px";
    chiSiamoLista.style.height = "0px";
    CLista.style.height = "0px";
    RLista.style.height = "0px";
    RWCLista.style.height = "0px";
    CELista.style.height = "0px";
    BHLista.style.height = "0px";
    foresteriaLista.style.height = "0px";
  } else {
    lingueLista.style.height = "0px";
  }
});