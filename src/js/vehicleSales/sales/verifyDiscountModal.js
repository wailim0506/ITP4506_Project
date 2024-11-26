$(document).ready(function () {
    var modal = $("#verifyDiscountModal");
    var btn = $("#enterDiscountBtn");
    var span = $(".close");

    // Open modal
    btn.click(function () {
        modal.show();
        // Prevent body scroll
        $('body').css({
            'overflow': 'hidden',
            'position': 'fixed',
            'width': '100%',
            'top': `-${window.scrollY}px`
        });

        $('#warningMessage').text("Is the know discount correct?");
    });

    // Close modal
    span.click(function () {
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
    $(window).click(function (event) {
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


    $('#verifyModalNoBtn').click(function() {
        $('#verified').text("No Discount");
        modal.hide();
        let quote = JSON.parse(localStorage.getItem('quote'));
        let quoteToEdit = localStorage.getItem('sales_quoteToView');

        for (let i = 0; i < quote.length; i++) {
            if (quote[i].quoteId == quoteToEdit) {
                quote[i].knowStaff.verified = "No Discount";
                localStorage.setItem('quote', JSON.stringify(quote));
                loadQuote();
                loadQuotePersonalDetail();
                loadQuotePaymentDetail();
                loadQuoteTradeInDetail();
                loadApplyRegistrationDetail();
                loadDiscountDetail();
                loadQuotePriceBreakdown();
                window.location.reload();
                break;
            }
        }

        // Restore body scroll
        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    $('#verifyModalYesBtn').click(function() {
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
        openEnterDiscountModal($('#enterDiscountModal'));
    });
});