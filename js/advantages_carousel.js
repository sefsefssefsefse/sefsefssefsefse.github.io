let dots = document.querySelectorAll('.dot');
let slideIndex = 0;
dots.forEach(function(element){
    element.onclick = activeDots;
})
function activeDots(){
    for(let i=0;i<dots.length;i++){
        dots[i].classList.remove("dot-active");
    }
    this.classList.add('dot-active');
    for(let i=0; i<dots.length;i++){
        if(dots[i].classList.contains('dot-active')) slideIndex = i;
    }
    for(let i = 0;i<slide.length;i++){
        slide[i].style.display = 'none';
    }
    slide[slideIndex].style.display = 'block';
    
}


let slide = document.querySelectorAll(".promo__carousel");

slide[slideIndex].style.display = 'block';
document.querySelector(".dot-arr_l").onclick = function(){
    showSlidess(-1);
}
document.querySelector(".dot-arr_r").onclick = function(){
    showSlidess(1);
}

function showSlidess(n){
    slideIndex +=n;
    if(slideIndex<0) slideIndex = dots.length-1;
    if(slideIndex>slide.length-1) slideIndex = 0;
    for(let i = 0;i<slide.length;i++){
        slide[i].style.display = 'none';
    }
    slide[slideIndex].style.display = 'block';
    for(let i=0;i<dots.length;i++){
        dots[i].classList.remove("dot-active");
    }
    dots[slideIndex].classList.add('dot-active');
}
