const buttonSphere1 = document.querySelectorAll('#button-sphere-1');
const buttonSphere2 = document.querySelectorAll('#button-sphere-2');
const infoSphere1 = document.querySelectorAll('#info-sphere-1');
const infoSphere2 = document.querySelectorAll('#info-sphere-2');
const containerOrderButton = document.querySelectorAll('.container-order-button');
const formBackCallContainer = document.querySelectorAll('#form-back-call-container');
const formBackCallClose = document.querySelectorAll('#form-back-call--close');
const foneInfo1 = document.querySelector('.fone-info-1');
const navButton1 = document.querySelectorAll('#nav-button-1');
const navButton2 = document.querySelectorAll('#nav-button-2');
const navButton3 = document.querySelectorAll('#nav-button-3');
const mobileNavContainer = document.querySelector('#mobile-nav-container');
const navHeader = document.querySelector('#nav-header');
const mobileNavClose = document.querySelector('#mobile-nav-close');

// Информация по сфере
// buttonSphere1.onclick = function () {    
//     infoSphere1.classList.toggle('info-srhere-class-none');
//     if (infoSphere2.classList.contains('info-srhere-class-none') !== true) {
//         console.log(true);
//         infoSphere2.classList.toggle('info-srhere-class-none');
//     } 

    
// }
// buttonSphere2.onclick = function () {
//     infoSphere2.classList.toggle('info-srhere-class-none');
//     if (infoSphere1.classList.contains('info-srhere-class-none') !== true) {
//         console.log(true);
//         infoSphere1.classList.toggle('info-srhere-class-none');
//     } 
// }

// Кнопки сферы

// buttonSphere1.onclick = function () {    
//     infoSphere1.classList.toggle('info-srhere-class-none');
// console.log('Не работает?');
    
// }
// buttonSphere2.onclick = function () {
//     infoSphere2.classList.toggle('info-srhere-class-none');
// }



buttonSphere1.forEach(function(buttonSphereOneClick) {
    buttonSphereOneClick.onclick = function () {   
        infoSphere1.forEach(function(infoSphereOne){
            infoSphereOne.classList.toggle('info-srhere-class-none');
        });
    };
});

buttonSphere2.forEach(function(buttonSphereTwoClick) {
    buttonSphereTwoClick.onclick = function () {    
        infoSphere2.forEach(function(infoSphereTwo){
            infoSphereTwo.classList.toggle('info-srhere-class-none');
        });
    };
});

// Слайдер

$('.single-item').slick({
    infinite: false,
    // centerMode: true,    
    slidesToShow: 3, 
    slidesToScroll: 1,   
    responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
            
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
          }
        }
      ]

});

// Форма заказа

containerOrderButton.forEach(function(containerOrderButtonAll){
    containerOrderButtonAll.onclick = function () {
        console.log('Привет');
        formBackCallContainer.forEach(function(formBackCallContainerActivation){
            formBackCallContainerActivation.style['display'] = 'block';
        }) 
    };
});

formBackCallClose.forEach(function(containerOrderButtonClose){
    containerOrderButtonClose.onclick = function () {
        console.log('Привет');
        formBackCallContainer.forEach(function(formBackCallContainerclose){
            formBackCallContainerclose.style['display'] = 'none';
        }) 
    };
});

// Прокрутка через навигацию



navButton1.forEach(function(navButtonOneScroll){
    navButtonOneScroll.onclick = function () {
    if (document.documentElement.clientWidth <= 500) {   
                mobileNavContainer.style.display='none';
                $('html, body').animate({
                    scrollTop: $(".fone-info-1-m").offset().top}, 500);
            }
            else {
                $('html, body').animate({
                    scrollTop: $(".fone-info-1").offset().top
                }, 800);
            }
        }
        });



navButton2.forEach(function(navButtonTwoScroll){
    navButtonTwoScroll.onclick = function () {
        if (document.documentElement.clientWidth <= 500) {  
            mobileNavContainer.style.display='none';
        $('html, body').animate({            
            scrollTop: $(".sound-3d-box-text-m").offset().top
        }, 800);
    } else {
        $('html, body').animate({            
            scrollTop: $(".sound-3d-box-text").offset().top
        }, 800);
    }
}
})


navButton3.forEach(function(navButtonThree){
    navButtonThree.onclick = function () {
        if (document.documentElement.clientWidth <= 500) {  
            mobileNavContainer.style.display='none';
            $('html, body').animate({
                scrollTop: $(".container-text-choice-m").offset().top
            }, 1000);
        }
        else {
            $('html, body').animate({
                scrollTop: $(".container-text-choice").offset().top
            }, 1000);
        }
    }
})

    $('html, body').animate({
        scrollTop: $(".container-text-choice").offset().top
    }, 1000);




// Мобильная версия

navHeader.onclick = function () {
    console.log('Работает?');
    mobileNavContainer.style.display='block';
}

mobileNavClose.onclick = function () {
    mobileNavContainer.style.display='none';
}