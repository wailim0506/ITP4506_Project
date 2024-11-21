$(document).ready(function () {
    $('#burgerImg i').click(function () {
        if(localStorage.getItem('darkMode') == 'Y') {
            $('#hiddenNav').css({
                'background-color': 'rgb(34,37,41)',
                'color': 'rgb(194,196,200)',
                'border': '0.1px solid grey'
            });
            $('#hiddenNav a').css('color', 'rgba(255,255,255,0.65)');
        }else{
            $('#hiddenNav').css({
                'background-color': 'white',
                'color': 'black',
                'border': '1px solid lightgrey'
            });
            $('#hiddenNav a').css('color', 'rgba(0,0,0,0.65)');
        }
        $('#hiddenNav').css('display', 'flex').hide().slideDown(400);
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

    $('#nav_left img').click(function () {
        location.href = 'carList.html';
    });
});