//variables
let menuIMG = document.getElementById("menuimage");
let menuTGGL = document.getElementById("menutoggle");

//navigation
let toggleTheImage = function(){

    if(menuTGGL.checked){
        console.log("open");
        menuIMG.src = "menuopen.png";
    }
    else {
        console.log("closed");
        menuIMG.src = "menuclosed.png";
    }
}
 
//gallery
function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  } 

//navigation event
  menuTGGL.addEventListener("change", toggleTheImage);