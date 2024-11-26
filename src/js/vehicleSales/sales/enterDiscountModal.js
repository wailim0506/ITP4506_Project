
function openEnterDiscountModal(modal) {
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

function setDiscount(discount){
    let quote = JSON.parse(localStorage.getItem('quote'));
    let quoteToEdit = localStorage.getItem('sales_quoteToView');

    for (let i = 0; i < quote.length; i++) {
        if (quote[i].quoteId == quoteToEdit) {
            quote[i].knowStaff.discount = discount;
            quote[i].knowStaff.verified = "True";
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
    var modal = $("#enterDiscountModal");
    var btn = $("#verifyModalYesBtn");
    var span = $(".close");

    // Open modal


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
        $('#o p').remove();
        $('.modal-content2').css('height', '30%');
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
            $('#o p').remove();
            $('.modal-content2').css('height', '30%');
        }
    });

    // Handle form submission
    $("#longForm2").submit(function (event) {
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


    $('#verifyModalNoBtn2').click(function() {
        // $('#verified').text("False");
        modal.hide();
        $('#verifyDiscountModal').show();
        $('#o p').remove();
        $('.modal-content2').css('height', '30%');

        // Restore body scroll
        // var scrollY = $('body').css('top');
        // $('body').css({
        //     'overflow': '',
        //     'position': '',
        //     'top': ''
        // });
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

    $('#verifyModalYesBtn2').click(function() {
        if ($('#discountInput').val() != "") {
            let discount = parseInt($('#discountInput').val());
            if (discount > 0) {
                if (discount < 50000){
                    $('#verified').text("True");
                    $('#discount').text(`$${discount}`);
                    setDiscount(discount);
                }else{
                    $('#o p').remove();
                    $('#o').append('<p style="color: red;">Discount must be less than $50,000</p>');
                    $('.modal-content2').css('height', '35%');
                    return;
                }
            } else {
                $('#verified').text("False");
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
            $('#o p').remove();
            $('#o').append('<p style="color: red;">Please enter a discount</p>');
            $('.modal-content2').css('height', '35%');
        }
    });
});