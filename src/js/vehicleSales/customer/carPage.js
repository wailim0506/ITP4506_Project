function setDarkModePreference() {
    if ($('#darkModeToogle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('body').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item').css('border', '0.1px solid grey');
        $('input').css('background-color', 'rgb(44,47,51)');
        $('input').css('border', '0.1px solid grey');
        $('input').css('color', 'rgb(194,196,200)');
        $('select').css('background-color', 'rgb(44,47,51)');
        $('select').css('color', 'rgb(194,196,200)');
        $('select').css('border', '0.1px solid grey');
        $('#darkModeToogle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html').css('background-color', 'white');
        $('body').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('.car-item').css('border', '1px solid lightgrey');
        $('input').css('background-color', 'white');
        $('input').css('border', '1px solid lightgrey');
        $('input').css('color', 'black');
        $('select').css('background-color', 'white');
        $('select').css('color', 'black');
        $('select').css('border', '1px solid lightgrey');
        $('#darkModeToogle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html').css('background-color', 'rgb(34,37,41)');
            $('body').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item').css('border', '0.1px solid grey');
            $('input').css('background-color', 'rgb(44,47,51)');
            $('input').css('border', '0.1px solid grey');
            $('input').css('color', 'rgb(194,196,200)');
            $('select').css('background-color', 'rgb(44,47,51)');
            $('select').css('color', 'rgb(194,196,200)');
            $('select').css('border', '0.1px solid grey');
            $('#darkModeToogle').text('wb_sunny');
        } else {
            //to light mode
            $('html').css('background-color', 'white');
            $('body').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
            $('.car-item').css('border', '1px solid lightgrey');
            $('input').css('background-color', 'white');
            $('input').css('border', '1px solid lightgrey');
            $('input').css('color', 'black');
            $('select').css('background-color', 'white');
            $('select').css('color', 'black');
            $('select').css('border', '1px solid lightgrey');
            $('#darkModeToogle').text('brightness_2');
        }
    }
}

$(document).ready(function () {
    loadDarkModePreference();
    $('#darkModeToogle').click(function () {
        setDarkModePreference();
    });
});