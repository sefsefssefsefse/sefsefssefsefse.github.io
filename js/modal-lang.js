item = document.querySelectorAll('.header__item');
var count = 0;
var countL = 0;

for(i=0;i<item.length;i++){
    if(item[i].style.display == 'none') countL++; 
    console.log(countL);
}

document.querySelector('.header__arrow').onclick = function(){
    for(let i=0;i<item.length;i++){
        if(item[i].style.display == 'inline-flex'){
            count++;
        } 
    }
    if(count == 5){
        item[3].style.display = 'none';
        item[4].style.display = 'none';
        if(screen.width <= 767){
            item[2].style.display = 'none';
        }
        if(screen.width <= 575){
            item[1].style.display = 'none';
        }
    }
    else{
        for(let i=0;i<item.length;i++){
            item[i].style.display = 'inline-flex';
        }
    }
    console.log(count);
    
    count = 0;
}





// // // // // // for(let i = 3; i<5;i++){
// // // // // //     item[i].addEventListener('animationend', ()=>{
// // // // // //         document.querySelector('.header__arrow').onclick = function(){
// // // // // //             item[i].classList.add('animated', 'slideOutLeft');
// // // // // //         }
// // // // // //     })
// // // // // // }