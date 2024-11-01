function setDarkMode(){
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('body').css('color', 'rgb(194,196,200)');
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
        $('html').css('background-color', 'white');
        $('body').css('color', 'black');
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
            $('html').css('background-color', 'rgb(34,37,41)');
            $('body').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgb(110,168,254)');
            $('#form').css('border', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            $('html').css('background-color', 'white');
            $('body').css('color', 'black');
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

function openAlertModal(message) {
    var modal = $("#alertModal");
    var btn = $("#");
    var span = $(".close");

    // Open modal

    modal.show();
    $('#alertMessage').html(message);

    // Prevent body scroll
    $('body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'width': '100%',
        'top': `-${window.scrollY}px`
    });

}

loadDarkMode();
$(document).ready(function(){
    loadDarkMode();

    $('#darkModeToggle').click(function() {
        setDarkMode();
    });

    var modal2 = $("#alertModal");
    var btn = $("#");
    var span = $(".close");

    span.click(function() {
        modal2.hide();

        // Restore body scroll
        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    // Close modal when clicking outside of it
    $(window).click(function (event) {
        if (event.target == modal2[0]) {
            modal2.hide();

            // Restore body scroll
            var scrollY = $('body').css('top');
            $('body').css({
                'overflow': '',
                'position': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    });

    $('#redirectBtn').click(function() {
        if($('#alertMessage').text() == 'Please agree to the terms and conditions'){
            modal2.hide();

            // Restore body scroll
            var scrollY = $('body').css('top');
            $('body').css({
                'overflow': '',
                'position': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            return;
        }
        window.location.href = '../../index.html';
    });
});