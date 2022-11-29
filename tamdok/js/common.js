$(document).ready(function(){

    let winW;
    let pcMobile;
    deviceChk();

    $(window).resize(function(){
        deviceChk()
    });

    function deviceChk() {
        winW = $(window).width();

        if(winW > 640) {
            pcMobile = 'pc';
        }
        else {
            pcMobile = 'mobile';
        }
        console.log(pcMobile);
    }

    $('.header .gnb_open').on('click', function(){
        $('.header').addClass('mobile_open');
    });
    $('.header .gnb_close').on('click', function(){
        $('.header').removeClass('mobile_open');
    });

});