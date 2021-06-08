//nav variables
let menuIMG = document.getElementById("menuimage");
let menuTGGL = document.getElementById("menutoggle");

//navigation
let toggleTheImage = function(){

    if(menuTGGL.checked){
        console.log("open");
        menuIMG.src = "img/menuopen.png";
    }
    else {
        console.log("closed");
        menuIMG.src = "img/menuclosed.png";
    }
}

//navigation event
  menuTGGL.addEventListener("change", toggleTheImage);

  