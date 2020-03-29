let dot = document.querySelectorAll('.laptop__item');
let slideIndexl = 0;
let slides = document.querySelectorAll(".laptop__carousel");
var cout = 0;

dot.forEach(function(element){
    element.onclick = activeDot;
})
function activeDot(){
    for(let i=0;i<dot.length;i++){
        dot[i].classList.remove("lap-active");
    }
    this.classList.add('lap-active');
    for(let i=0; i<dot.length;i++){
        if(dot[i].classList.contains('lap-active')) slideIndexl = i;
    }
    for(let i = 0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slides[slideIndexl].style.display = 'block';
    if(cout>slideIndexl){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('slideInRight');
            slides[i].classList.add('slideInLeft');
        }
    }
    else{
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('slideInLeft');
            slides[i].classList.add('slideInRight');
        }
    }
    cout = slideIndexl;
}


slides[slideIndexl].style.display = 'block';
document.querySelector(".laptop-arr_l").onclick = function(){
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove('slideInRight');
        slides[i].classList.add('slideInLeft');
    }
    showSlides(-1);
}
document.querySelector(".laptop-arr_r").onclick = function(){
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove('slideInLeft');
        slides[i].classList.add('slideInRight');
    }
    showSlides(1);
}

function showSlides(n){
     slideIndexl +=n;
     if(slideIndexl<0) slideIndexl = dot.length-1;
     if(slideIndexl>slides.length-1) slideIndexl = 0;
     for(let i = 0;i<slides.length;i++){
        slides[i].style.display = 'none';
     }
     slides[slideIndexl].style.display = 'block';
     for(let i=0;i<dot.length;i++){
         dot[i].classList.remove("lap-active");
     }
     dot[slideIndexl].classList.add('lap-active');
}
