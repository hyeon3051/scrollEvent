const StageScroll = document.querySelector('.wrapper');
const players = document.querySelectorAll(".players > li > a ");
const array = [-400, -200, 0, 200, 400];
let zMove = 0;
(function () {
    function onStageScroll(event) {
        zMove = -500 + pageYOffset / (document.body.offsetHeight - window.innerHeight) * 1000;
        console.log(zMove)
        StageScroll.style.transform = `translateZ(${zMove}vw)`
        for (let i = 0; i < 5; i++) {
            if (zMove >= array[i]) {
                for (let j = 0; j < 5; j++) {
                    players[j].style.color = "white";
                }
                players[i].style.color = "red";
            }
        }
    }

    function onMouseMove(event) {
        mousePosx = -1 + (event.clientX / window.innerWidth) * 10;
        mousePosy = 1 - (event.clientY / window.innerHeight) * 10;

        StageScroll.style.top = `${mousePosx}em`
        StageScroll.style.left = `${mousePosy}em`
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener('scroll', onStageScroll);
})();
function moveTo(num) {
    StageScroll.style.transform = `translateZ(${zMove}vw)`
    let heigth = (window.innerHeight - 50) * (500 + num) / 100;
    window.scrollTo(0, heigth);
    zMove = num;
    for (let i = 0; i < 5; i++) {
        if (zMove >= array[i]) {
            for (let j = 0; j < 5; j++) {
                players[j].style.color = "white";
            }
            players[i].style.color = "red";
        }
    }
}