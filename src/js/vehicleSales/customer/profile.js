function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav').css('background-color', 'rgb(34,37,41)');
        $('#profileContainer').css('background-color', '#444');
        $('#profileContainer text, .profileSection h3').css('color', 'white');
        $('.profileSection p, .profileHeader').css('color', 'rgb(194,196,200)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer,#profileContainer').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item').css('border', '0.1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html, nav').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body, nav').css('color', 'black');
        $('a,footer').css('color', 'rgba(0,0,0,0.65)');
        $('.car-item').css('border', '1px solid lightgrey');
        $('#profileContainer').css('background-color', '#f9f9f9');
        $('#profileContainer text, .profileSection h3').css('color', 'black');
        $('.profileSection p, .profileHeader').css('color', 'black');
        $('input').css({
            'background-color': 'white',
            'border': '1px solid lightgrey',
            'color': 'black'
        });
        $('select').css({
            'background-color': 'white',
            'color': 'black',
            'border': '1px solid lightgrey'
        });
        $('#darkModeToggle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkMode() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html, nav').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body, nav,footer,#profileContainer').css('color', 'rgb(194,196,200)');
            $('#profileContainer').css('background-color', '#444');
            $('#profileContainer text, .profileSection h3').css('color', 'white');
            $('.profileSection p, .profileHeader').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item').css('border', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html, nav').css('background-color', 'white');
            $('footer').css('background-color', '#e8e6e6');
            $('body, nav').css('color', 'black');
            $('a,footer').css('color', 'rgba(0,0,0,0.65)');
            $('.car-item').css('border', '1px solid lightgrey');
            $('#profileContainer').css('background-color', '#f9f9f9');
            $('#profileContainer text, .profileSection h3').css('color', 'black');
            $('.profileSection p, .profileHeader').css('color', 'black');
            $('input').css({
                'background-color': 'white',
                'border': '1px solid lightgrey',
                'color': 'black'
            });
            $('select').css({
                'background-color': 'white',
                'color': 'black',
                'border': '1px solid lightgrey'
            });
            $('#darkModeToggle').text('brightness_2');
        }
    }
}

loadDarkMode();
$(document).ready(function () {
    loadDarkMode();
    $('.hiddenInput').hide();
    $('#saveBtn').hide();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('.editButton').click(function () {
        $('#customerNameInput input').val($('#customerName').text().split(": ")[1]);
        $('#customerEmailInput input').val($('#customerEmail').text().split(": ")[1]);
        $('#customerPhoneInput input').val($('#customerPhone').text().split(": ")[1]);
        $('#customerAddressInput input').val($('#customerAddress').text());

        $('.hiddenInput').show();
        $('#saveBtn').show();
        $('.editButton').hide();
        $('.shownField').hide();
        $('.changePassword').hide();
    });

    $('#saveBtn').click(function () {
        const name = $('#customerNameInput input').val();
        const email = $('#customerEmailInput input').val();
        const phone = $('#customerPhoneInput input').val();
        const address = $('#customerAddressInput input').val();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;

        if (name == '') {
            $('#customerNameInput p').remove();
            $('#customerNameInput').append(`<p style="color: red;font-size: 14px">Please enter your name.</p>`);
            $('#customerNameInput input').css('border', '1px solid red');
            valid = false;
        }

        if (email == '') {
            $('#customerEmailInput p').remove();
            $('#customerEmailInput').append(`<p style="color: red;font-size: 14px">Please enter your email address.</p>`);
            $('#customerEmailInput input').css('border', '1px solid red');
            valid = false;
        }

        if (phone == '') {
            $('#customerPhoneInput p').remove();
            $('#customerPhoneInput').append(`<p style="color: red;font-size: 14px">Please enter your phone number.</p>`);
            $('#customerPhoneInput input').css('border', '1px solid red');
            valid = false;
        }

        if (address == '') {
            $('#customerAddressInput p').remove();
            $('#customerAddressInput').append(`<p style="color: red;font-size: 14px">Please enter your address.</p>`);
            $('#customerAddressInput input').css('border', '1px solid red');
            valid = false;
        }

        if (!emailPattern.test(email)) {
            $('#customerEmailInput p').remove();
            $('#customerEmailInput').append(`<p style="color: red;font-size: 14px">Please enter a valid email address.</p>`);
            $('#customerEmailInput input').css('border', '1px solid red');
            valid = false;

        }

        if (!valid) {
            return;
        }

        $('#customerName').text("Name: " + name);
        $('#customerEmail').text("Email: " + email);
        $('#customerPhone').text("Phone: " + phone);
        $('#customerAddress').text(address);

        $('.hiddenInput').hide();
        $('#saveBtn').hide();
        $('.editButton').show();
        $('.shownField').show();
        $('.changePassword').show();
    });
});