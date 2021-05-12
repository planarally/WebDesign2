//carousel:
let carouselImages = ["img/bulbasaur.jpg", "img/tangela.jpg", "img/bellsprout.jpg"];
let currentIndex = 2;
let carouselIMG = document.getElementById("carouselIMG");

//selection:
let groupSelect = document.getElementById("groupSelect");
let categorySelect= document.getElementById("categorySelect");
let grassOptions = ['Cute', 'Strong', 'Scary'];
let fireOptions = ['Cute', 'Strong', 'Scary', 'Other'];
let waterOptions = ['Cute', 'Strong', 'Scary'];

//carousel:
let changeSlide = function(){
    if(currentIndex === 0){
        carouselIMG.src = carouselImages[1];
        currentIndex = 1;
    }
    else if(currentIndex === 1){
        carouselIMG.src = carouselImages[2];
        currentIndex = 2;
    }
    else {
        carouselIMG.src = carouselImages[0];
        currentIndex = 0;
    }

    if (currentIndex === 2){
        currentIndex=0;
    }
    else{
    currentIndex =  currentIndex+1;
    }

}

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

window.addEventListener("load", function(){

    //triggered once after 5 sec
    setTimeout(function(){
        prompt("SUBSCRIBE TO OUR NEWSLETTER", "my@email.com")
    }, 5000);

    //triggered every 5 sec
    setInterval(changeSlide, 5000)

})

groupSelect.addEventListener("change", updateCategory);
