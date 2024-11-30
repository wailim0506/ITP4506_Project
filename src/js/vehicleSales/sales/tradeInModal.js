function setTradeIn(value){
    let quote = JSON.parse(localStorage.getItem('quote'));
    let quoteToEdit = localStorage.getItem('sales_quoteToView');

    for (let i = 0; i < quote.length; i++) {
        if (quote[i].quoteId == quoteToEdit) {
            quote[i].tradeInInformation.tradeInValue = value;
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
}

$(document).ready(function () {
    var modal = $("#TradeInModal");
    var btn = $("#decideTradeInBtn");
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

        $('#warningMessage3').text("Enter the trade in value below:");
    });

    // Close modal
    span.click(function () {
        modal.hide();

        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });



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
            $('#ooo p').remove();
             $('.modal-content3').css('height', '30%');
        }
    });

    $("#longForm").submit(function (event) {
        event.preventDefault(); // Prevent the default form submission
        alert("Form submitted! \nName: " + $("#name").val() + "\nEmail: " + $("#email").val());

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


    $('#verifyModalNoBtn3').click(function() {

        $('#ooo p').remove();
        $('.modal-content3').css('height', '30%');

        modal.hide();

        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    $('#verifyModalYesBtn3').click(function() {
        if ($('#tradeInInput').val() !== "") {
            let tradeInValue = parseInt($('#tradeInInput').val());
            if (tradeInValue > 0) {
                if (tradeInValue < 1000000) {
                    // $('#verified').text("True");
                    $('#tradeInValue').text(`$${tradeInValue}`);
                    setTradeIn(tradeInValue);
                } else {
                    $('#ooo p').remove();
                    $('#ooo').append('<p style="color: red;">Trade in value must be less than $1,000,000</p>');
                    $('.modal-content3').css('height', '35%');
                    return;
                }
            } else {
            }
            modal.hide();


            // Restore body scroll
            var scrollY = $('body').css('top');
            $('body').css({
                'overflow': '',
                'position': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }else{
            $('#ooo p').remove();
            $('#ooo').append('<p style="color: red;">Please enter a trade in value</p>');
            $('.modal-content3').css('height', '35%');
        }
    });
});