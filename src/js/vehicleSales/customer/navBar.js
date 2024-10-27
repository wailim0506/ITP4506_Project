$(document).ready(function () {
    $('#burgerImg i').click(function () {
        if(localStorage.getItem('darkMode') == 'Y') {
            $('#hiddenNav').css('background-color', 'rgb(34,37,41)');
            $('#hiddenNav').css('color', 'rgb(194,196,200)');
            $('#hiddenNav a').css('color', 'rgba(255,255,255,0.65)');
            $('#hiddenNav').css('border', '0.1px solid grey');
        }else{
            $('#hiddenNav').css('background-color', 'white');
            $('#hiddenNav').css('color', 'black');
            $('#hiddenNav a').css('color', 'rgba(0,0,0,0.65)');
            $('#hiddenNav').css('border', '1px solid lightgrey');
        }
        // $('#hiddenNav').css('display', 'flex');
        $('#hiddenNav').css('display', 'flex');
        $('#hiddenNav').hide();
        $('#hiddenNav').slideDown(400);
        $('#clodeBtnDiv i').show();
        $('body').css('overflow', 'hidden');
    });

    $('#clodeBtnDiv i').click(function () {
        $(this).hide();
        $('#hiddenNav').slideUp(400);
        $('body').css('overflow', 'auto');
    });

    $(window).resize(function () {
        if ($(window).innerWidth() > 800) {
            $('#hiddenNav').slideUp(1);
        }
    });
});