// Switch between pages
function nextPage(pageNumber) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => page.classList.remove("active"));

    document.getElementById("page" + pageNumber).classList.add("active");
}

// Floating Hearts
const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💞";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (18 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 250);

// NO button runs away
const noBtn = document.getElementById("noBtn");

function moveNoButton() {

    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});

// YES button
function yesClicked() {

    createRing();

    createCelebration();

    setTimeout(() => {

        alert("❤️ YAY!! You just made me the happiest person alive! ❤️");

        nextPage(3);

    }, 3500);
}

// Ring animation
function createRing(){

    const ring = document.createElement("div");

    ring.className = "ring";

    ring.innerHTML = "💍";

    document.body.appendChild(ring);

    setTimeout(() => {
        ring.remove();
    },3000);

}

// Hearts celebration
function createCelebration(){

    for(let i=0;i<120;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";
        heart.style.left=(window.innerWidth/2)+"px";
        heart.style.top=(window.innerHeight/2)+"px";
        heart.style.fontSize="30px";
        heart.style.pointerEvents="none";
        heart.style.transition="1.5s";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;
        const distance=200+Math.random()*300;

        const x=Math.cos(angle)*distance;
        const y=Math.sin(angle)*distance;

        requestAnimationFrame(()=>{
            heart.style.transform=`translate(${x}px,${y}px) scale(0)`;
            heart.style.opacity="0";
        });

        setTimeout(()=>{
            heart.remove();
        },1500);
    }
}