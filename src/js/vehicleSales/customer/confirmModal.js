function confirmModal(message) {
    var modal = $("#myModal");
    $('#warningMessage').text(message);
    modal.show();

    // Prevent body scroll
    $('body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'width': '100%',
        'top': `-${window.scrollY}px`
    });
}

$(document).ready(function() {
    var modal = $("#myModal");
    var btn = $("#myBtn");
    var span = $(".close");



    // Close modal
    span.click(function() {
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

    // Close modal when clicking outside of it
    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();

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


});