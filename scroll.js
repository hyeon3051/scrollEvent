const StageScroll = document.querySelector('.wrapper');
(function () {
    function onStageScroll(event) {
        event.preventDefault();
        let zMove = -500 + pageYOffset / (document.body.offsetHeight - window.innerHeight) * 1000;
        console.log(zMove)
        StageScroll.style.transform = `translateZ(${zMove}vw)`
    }
    function onMouseMove(event) {
        mousePosx = -1 + (event.clientX / window.innerWidth) * 2;
        mousePosy = 1 - (event.clientY / window.innerHeight) * 2;
        console.log(mousePosx, mousePosy);
        StageScroll.style.top = `${mousePosx}em`
        StageScroll.style.left = `${mousePosy}em`
    }
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener('scroll', onStageScroll);
})();
function moveTo(num) {
    StageScroll.style.transform = `translateZ(${num}vw)`;
}