function setDarkModePreference(){
    if ($('#darkModeToogle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('p, h1, label, i').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgb(110,168,254)');
        $('#form').css('border', '0.1px solid grey');
        $('#darkModeToogle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html').css('background-color', 'white');
        $('p, h1, label, i').css('color', 'black');
        $('a').css('color', 'blue');
        $('#form').css('border', '1px solid lightgrey');
        $('#darkModeToogle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkModePreference(){
    if (localStorage.getItem('darkMode') != null){
        if (localStorage.getItem('darkMode') == 'Y'){
            $('html').css('background-color', 'rgb(34,37,41)');
            $('p, h1, label, i').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgb(110,168,254)');
            $('#form').css('border', '0.1px solid grey');
            $('#darkModeToogle').text('wb_sunny');
        } else {
            $('html').css('background-color', 'white');
            $('p, h1, label, i').css('color', 'black');
            $('a').css('color', 'blue');
            $('#form').css('border', '1px solid lightgrey');
            $('#darkModeToogle').text('brightness_2');
        }
    }
}

$(document).ready(function(){
    loadDarkModePreference();

    $('#darkModeToogle').click(function() {
        setDarkModePreference();
    });
});