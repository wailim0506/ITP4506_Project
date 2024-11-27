var modal = $("#AlertModal");
var btn = $("#changeStatusBtn");
var span = $(".close");

function alertModal(message) {
    $('#AlertModal').show();
    // Prevent body scroll
    $('body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'width': '100%',
        'top': `-${window.scrollY}px`
    });

    $('#warningMessage4').text(message);
}

$(document).ready(function () {
// Close modal
    $('#closeAlert').click(function () {
        window.location.reload();
        $('#AlertModal').hide();

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
        if (event.target == modal[0]) {
            modal.hide();
            window.location.reload();
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

// Handle form submission
    $("#longForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Form submitted! \nName: " + $("#name").val() + "\nEmail: " + $("#email").val());

        // Close the modal after submission
        modal.hide();

        // Restore body scroll
        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });


    $('#verifyModalYesBtn4').click(function () {
        window.location.reload();
        // $('#verified').text("True");
        modal.hide();

        // Restore body scroll
        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});