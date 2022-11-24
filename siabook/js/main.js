$(document).ready(function(){
    var swiper = new Swiper(".book .book_intro", {
        slidesPerView: "auto",
        spaceBetween: 16,
        breakpoints: {
            640: {     /* 1400px 이상일때 적용 */
                spaceBetween: 200,
            },
        },
        centeredSlides: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.btn_next',
            prevEl: '.btn_prev',
        },
    });

    let bg_name;

    $('.process ul li').on('click', function(){
        $('.process ul li').removeClass('active');
        $(this).addClass('active');
        bg_name = $(this).attr('data-bg');
        console.log(bg_name);
        $('.process').attr('data-bg', bg_name);
    });
    
    
});