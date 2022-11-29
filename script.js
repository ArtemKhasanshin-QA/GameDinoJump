const Dino = document.getElementById("Dino");
const Cactus =document.getElementById("Cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (Dino.classList !="jump") {
        Dino.classList.add("jump")
    }
    setTimeout( function() {
        Dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval  ( function() {
    let DinoTop = parseInt(window.getComputedStyle(Dino).getPropertyValue("top"));
    let CactusLeft = parseInt(window.getComputedStyle(Cactus).getPropertyValue("left"));

    if (CactusLeft < 50 && CactusLeft > 0 && DinoTop >=140) {
        alert("GAME OVER!")
    }
})