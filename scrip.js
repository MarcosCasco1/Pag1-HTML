//LA PARTE DE LOS SLIDERS
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView:1,
    spaceBetween: 30,
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",

    },
   // autoplay: {
     //   delay: 5000, // Tiempo en milisegundos entre cada slide
     //  disableOnInteraction: false, // Deshabilitar el autoplay al interactuar con el swiper (por ejemplo, cuando se desliza manualmente)
     //  },
});
//LA PARTE DE LOS PRODUCTOS 
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    }
});
//La Parte de los tabs
let tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input){

    input.addEventListener('change', function(){
        let id= input.ariaValueMax;
        let thisSwiper = document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
});