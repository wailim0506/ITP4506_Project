$(document).ready(function() {
    var modal = $("#myModal");
    var btn = $("#getQuoteBtn");
    var span = $(".close");


    btn.click(function() {
        modal.show();

        $('body').css({
            'overflow': 'hidden',
            'position': 'fixed',
            'width': '100%',
            'top': `-${window.scrollY}px`
        });
    });


    span.click(function() {
        modal.hide();


        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });


    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();


            var scrollY = $('body').css('top');
            $('body').css({
                'overflow': '',
                'position': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    });


    $("#longForm").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Form submitted! \nName: " + $("#name").val() + "\nEmail: " + $("#email").val());

        modal.hide();

        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    $('#longForm').on('scroll', function() {
        // Get the total height of the document
        var docHeight = $('#longForm').height();

        // Get the height of the viewport
        var winHeight = $('#longForm').height();

        // Get the current scroll position
        var scrollTop = $('#longForm').scrollTop();

        // Calculate the scroll percentage
        var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;

        // Round it to two decimal places
        var roundedScrollPercent = Math.round(scrollPercent * 100) / 100;

        // Display the scroll percentage in the designated div
        console.log('Scrolled: ' + roundedScrollPercent + '%');
    });
});