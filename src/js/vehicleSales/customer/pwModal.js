let modal = $('#pwModal');
function openPWModal(modal) {
    modal.show();
    // Prevent body scroll
    $('body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'width': '100%',
        'top': `-${window.scrollY}px`
    });

    $('#warningMessage2').text("Enter Discount Below:");
}


$(document).ready(function () {
    var modal = $("#enterDiscountModal");
    var btn = $("#verifyModalYesBtn");
    var span = $(".close");



    // Close modal
    span.click(function () {
        window.location.reload();
    });



    // Close modal when clicking outside of it
    $(window).click(function (event) {
        let modal = $('#pwModal');
        if (event.target == modal[0]) {
            modal.hide();
            $('#pwInputDiv p').remove();
            $('#cpwInputDiv p').remove();
            $('#pwInput').css('border', '1px solid grey');
            $('#cpwInput').css('border', '1px solid grey');
            // Restore body scroll
            var scrollY = $('body').css('top');
            $('body').css({
                'overflow': '',
                'position': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            // $('#o p').remove();
            $('.modal-content').css('height', '39.5%');
        }
    });

    $('#verifyModalNoBtn').click(function() {
        window.location.reload();
    });

    $('#verifyModalYesBtn').click(function() {
        let pw = $('#pwInput').val();
        let cpw = $('#cpwInput').val();

        if (pw == '') {
            $('#pwInputDiv p').remove();
            $('#pwInput').css('border', '1px solid red');
            $('#pwInput').parent().append(`<p style="color: red;font-size: 14px">Please enter your password.</p>`);
            $('.modal-content').css('height', '55%');
        }

        if (cpw == '') {
            $('#cpwInputDiv p').remove();
            $('#cpwInput').css('border', '1px solid red');
            $('#cpwInput').parent().append(`<p style="color: red;font-size: 14px">Please confirm your password.</p>`);
            $('.modal-content').css('height', '55%');
        }

        if (pw != cpw) {
            $('#cpwInputDiv p').remove();
            $('#cpwInput').css('border', '1px solid red');
            $('#cpwInput').parent().append(`<p style="color: red;font-size: 14px">Passwords do not match.</p>`);
            $('.modal-content').css('height', '47%');
        }else{
            window.location.reload();
        }

    });
});