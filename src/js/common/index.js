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
        $('.field input').parent().find('span').text('');
        $('.field input').css('border', '1px solid lightgrey');
        var selectPlatform = $('#selectPlatform').val();
        var email = $('#email').val();
        var password = $('#password').val();

        var bothFilled = true;
        if (email == ''){
            $('#emailField span').text(`**Please fill in email**`);
            $('#emailField input').css('border', '1px solid red');
            bothFilled = false;
        }

        if (password == ''){
            $('#pwField span').text(`**Please fill in password**`);
            $('#pwField input').css('border', '1px solid red');
            bothFilled = false;
        }

        if (!bothFilled){
            return;
        }

        if (selectPlatform === '0'){ //vehicle sales platform customer
            if (email === 'c@demo.com'){
                if (password === '123456'){
                    window.location.href = '../../../pages/VehicleSales/customer/carList.html';
                }else{
                    $('#pwField span').text(`**Password is incorrect**`);
                    $('#pwField input').css('border', '1px solid red');
                }
            }else if(email === "s1@demo.com"){ //staff
                if (password === '123456'){
                    window.location.href = '../../../pages/VehicleSales/sales/carList.html';
                }else{
                    $('#pwField span').text(`**Password is incorrect**`);
                    $('#pwField input').css('border', '1px solid red');
                }
            }else{
                $('#emailField span').text(`**Email not found in Vehicle Sales Platform**`);
                $('#emailField input').css('border', '1px solid red');
            }
        }else{
            if (email === 'c@demo.com'){  //insurance sales platform customer
                if (password === '123456'){
                    window.location.href = '../../../pages/insurance/customer/cusMainPage.html';
                }else{
                    $('#pwField span').text(`**Password is incorrect**`);
                    $('#pwField input').css('border', '1px solid red');
                }
            }else if(email === "s2@demo.com"){  //staff
                if (password === '123456'){
                    window.location.href = '../../../pages/insurance/sales/salesMain.html';
                }else{
                    $('#pwField span').text(`**Password is incorrect**`);
                    $('#pwField input').css('border', '1px solid red');
                }
            }else{
                $('#emailField span').text(`**Email not found in Insurance Sales Platform**`);
                $('#emailField input').css('border', '1px solid red');
            }
        }
    });

    $('.field input').on('keyup', function () {
        $(this).css('border', '1px solid lightgrey');
        $(this).parent().find('span').text('');
    });
});