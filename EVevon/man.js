// column chính
var index = 0;
changeImage = function () {
    var imgs = ["main.png/slider-2.png", "main.png/slide-1.png", "main.png/slide-3.png"];
    document.getElementById('about__img').src = imgs[index];
    index++;
    if(index==3) {
        index = 0;
    }
}
setInterval(changeImage,2000);

//  menu

var display = function () {
    var header = document.getElementById('link__all-all');
    var about__imgElement = document.getElementById('header__link');

    header.style.display = 'block';
    if (about__imgElement.target.href.startWith('header__link')) {
        about__imgElement.preventDefault();
    }
    
    
}

// function messge() {
//     var header = document.getElementById("link__all-all");
//     header.style.display = "block";
// }