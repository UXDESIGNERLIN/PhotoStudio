let logo = document.querySelector(".logo");
let bubble = document.querySelector(".bubble");
let photographer = document.querySelector(".photographer");

window.addEventListener("scroll", function(){
    var wScroll = window.scrollY;
    //console.log(wScroll/2);
    //logo.innerHTML = "{transform: translate(0px, 200px)}"
    logo.style.transform = 'translate(0px, '+wScroll/2+'%)';
    console.log();

    bubble.style.transform = 'translate(0px, '+wScroll/4+'%)';

    photographer.style.transform = 'translate(0px, -'+wScroll/30+'%)';

});