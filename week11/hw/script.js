//arrays:
let grassCute = ["img/bulbasaur.jpg", "img/tangela.jpg", "img/bellsprout.jpg"];
let grassScary = ["img/rillaboom.jpg", "img/rayquaza.jpg", "img/zarude.jpg"];
let fireWeak = ["img/charmeleon.jpg", "img/litten.jpg", "img/vulpix.jpg"];
let fireStrong = ["img/blaziken.jpg", "img/emboar.jpg", "img/typhlosion.jpg"];
let waterSmall = ["img/dratini.jpg", "img/poliwhirl.jpg", "img/squirtle.jpg"];
let waterBig = ["img/greninja.jpg", "img/kygore.jpg", "img/swampert.jpg"];

let currentIndex = 2;

let carouselIMG = document.getElementById("carouselIMG");
let groupSelect = document.getElementById("groupSelect");
let categorySelect= document.getElementById("categorySelect");

let grassOptions = ['Cute', 'Scary'];
let fireOptions = ['Weak', 'Strong'];
let waterOptions = ['Small', 'Big'];

//carousels:
let changeGrassCute = function(){
    if(currentIndex === 0){
        carouselIMG.src = grassCute[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = grassCute[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = grassCute[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

let changeGrassScary = function(){
    if(currentIndex === 0){
        carouselIMG.src = grassScary[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = grassScary[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = grassScary[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

let changeWaterBig = function(){
    if(currentIndex === 0){
        carouselIMG.src = waterBig[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = waterBig[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = waterBig[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

let changeWaterSmall = function(){
    if(currentIndex === 0){
        carouselIMG.src = waterSmall[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = waterSmall[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = waterSmall[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

let changeFireWeak = function(){
    if(currentIndex === 0){
        carouselIMG.src = fireWeak[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = fireWeak[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = fireWeak[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

let changeFireStrong = function(){
    if(currentIndex === 0){
        carouselIMG.src = fireStrong[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = fireStrong[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = fireStrong[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

//category
let updateCategory = function(){
    console.log(groupSelect);
    categorySelect.innerHTML = '';
    let selectedValue = groupSelect.value;
    if(selectedValue === "grass"){
        grassOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "fire"){
        fireOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    }
    else if(selectedValue === "water"){
        waterOptions.forEach(function(elem){
            categorySelect.innerHTML += '<option value="' + elem + '">' + elem + '</option>';
        });
    } 
}

//category update
let toggleCarousel = function(){
    let selectedGroup = groupSelect.value;
    let selectedCategory = categorySelect.value;

    if (selectedCategory === "Cute"){
        console.log("cute grass"); 
        changeGrassCute();
    }

    else if (selectedCategory === "Scary"){
        console.log("scary grass");
        changeGrassScary();
    }

    else if (selectedCategory === "Small"){
        console.log("small water");
        changeWaterSmall();    
    }

    else if (selectedCategory === "Big"){
        console.log("big water");
        changeWaterBig();
    }

    else if (selectedCategory === "Weak"){
        console.log("weak fire");
        changeFireWeak();
    }
    
    else if (selectedCategory === "Strong"){
        console.log("weak fire");
        changeFireWeak();
    }
}

//events
window.addEventListener("load", function(){
    setInterval(toggleCarousel, 4000);
})

groupSelect.addEventListener("change", updateCategory);
categorySelect.addEventListener("change", toggleCarousel);
