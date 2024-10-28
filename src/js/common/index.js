function setDarkMode(){
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html,.modal-content').css('background-color', 'rgb(34,37,41)');
        $('body,.modal-content').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgb(110,168,254)');
        $('#form').css('border', '0.1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html,.modal-content').css('background-color', 'white');
        $('body,.modal-content').css('color', 'black');
        $('a').css('color', 'blue');
        $('#form').css('border', '1px solid lightgrey');
        $('input, select').css({
            'background-color': 'white',
            'border': '1px solid lightgrey',
            'color': 'black'
        });
        $('#darkModeToggle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkMode(){
    if (localStorage.getItem('darkMode') != null){
        if (localStorage.getItem('darkMode') == 'Y'){
            $('html,.modal-content').css('background-color', 'rgb(34,37,41)');
            $('body,.modal-content').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgb(110,168,254)');
            $('#form').css('border', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            $('html,.modal-content').css('background-color', 'white');
            $('body,.modal-content').css('color', 'black');
            $('a').css('color', 'blue');
            $('#form').css('border', '1px solid lightgrey');
            $('input, select').css({
                'background-color': 'white',
                'border': '1px solid lightgrey',
                'color': 'black'
            });
            $('#darkModeToggle').text('brightness_2');
        }
    }
}
loadDarkMode();
$(document).ready(function(){
    loadDarkMode();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#loginBtn').click(function () {
        var selectPlatform = $('#selectPlatform').val();
        console.log(selectPlatform);
        if (selectPlatform == '0') {
            window.location.href = '../../../pages/VehicleSales/customer/carList.html';
        }else{
            window.location.href = '../../../pages/insurance/customer/cusMainPage.html';
        }
    });
});