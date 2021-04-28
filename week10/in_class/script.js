let header = document.getElementById("myHeader");
let clrBTN = document.getElementById("colorBTN");
let vgIMG = document.getElementById("mario");
let tgglBTN = document.getElementById("toggleBTN");

let changeTheColor = function(){
    // we'll do some color changing here
    let redComp = Math.random() * 255;
    let greenComp = Math.random() * 255;
    let blueComp = Math.random() * 255;
    console.log("RED: " + redComp);
    console.log("GREEN: " + greenComp);
    console.log("BLUE: " + blueComp);

    header.style.backgroundColor = "rgb("+ redComp +", "+ greenComp +", "+ blueComp +")";
}

let toggleTheImage = function(){
    // we'll do some toggling here

    if(tgglBTN.innerText === "Show me TINGLE!"){
        console.log("show me TINGLE!");
        vgIMG.src = "tingle.jpg";
        tgglBTN.innerText = "Show me MARIO!";
    }
    else {
        console.log("show me MARIO!");
        vgIMG.src = "mario.jpg";
        tgglBTN.innerText = "Show me TINGLE!";
    }
}

changeTheColor();

clrBTN.addEventListener("click", changeTheColor);
tgglBTN.addEventListener("click", toggleTheImage);