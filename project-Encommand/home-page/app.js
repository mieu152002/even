var transfersSlider = document.querySelector(".slider-intro__img")
var sliderIconLeft = document.querySelector(".slider-intro-icon-left")
var sliderIconRight = document.querySelector(".slider-intro-icon-right")
var transfersContens = document.querySelectorAll(".slider-intro__text-item")

var indexSlider = 1;

var sliderArr = ["/uploads-img/intro-1.jpg","/uploads-img/intro-2.jpg", "/uploads-img/intro-3.jpg", "/uploads-img/intro-4.jpg", "/uploads-img/intro-5.jpg"];
var sliderImg = function (index) {
    transfersSlider.src = sliderArr[indexSlider];
    if(indexSlider === 5) {
        indexSlider = 0;
    }
    indexSlider++;
    transfersContens.forEach(function(transfersConten) {
        console.log(index,transfersConten)
        index++;
        transfersConten.classList.toggle("hide")
    });
}
var sliderImgg = function () {
    transfersSlider.src = sliderArr[indexSlider];
    indexSlider--;
    if(indexSlider === -1) {
        indexSlider = 4;
    }
}

// setInterval(sliderImg,5000);
sliderIconRight.addEventListener("click", sliderImg)
sliderIconLeft.addEventListener("click", sliderImgg)
