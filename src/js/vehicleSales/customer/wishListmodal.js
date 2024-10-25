function createQuote() {
    var vehicleId;
    var vehicleName;
    var exteriorColor;
    var interiorColor;
    var price;
    var quantity;
    var vehicleInQuote = [];
    //get vehicle data from each row of wish list
    $('.row').each(function () {
        vehicleId = $(this).attr('carid');
        vehicleName = $(this).find('.vehicleName').text();
        exteriorColor = $(this).find('.exteriorColor').text().split(':')[1].trim();
        interiorColor = $(this).find('.interiorColor').text().split(':')[1].trim();
        price = $(this).find('.price').text().replace('$', '').trim();
        quantity = $(this).find('input[type="number"]').val();

        vehicleInQuote.push({
            vehicleId: vehicleId,
            vehicleName: vehicleName,
            exteriorColor: exteriorColor,
            interiorColor: interiorColor,
            price: price,
            quantity: quantity
        });
    });


    // get data
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var address = $('#address').val();
    var country = $('#country').val();
    var city = $('#city').val();
    var zip = $('#zip').val();


    var cardType = $('input[name="cardType"]:checked').val();
    var cardHolder = $('#cardHolder').val();
    var cardNumber = $('#cardNumber').val();
    var expiryDate = $('#expiryDate').val();
    var cvv = $('#cvv').val();


    var tradeIn = $('input[name="tradeIn"]:checked').val();
    var tradeInMakeModel = $('#tradeInMakeModel').val();
    var tradeInYear = $('#tradeInYear').val();
    var tradeInMileage = $('#tradeInMileage').val();
    var tradeInVIN = $('#tradeInVIN').val();


    var tradeInCondition = $('input[name="tradeInCondition"]:checked').val();
    var exteriorCondition = $('input[name="exteriorCondition"]:checked').val();
    var interiorCondition = $('input[name="interiorCondition"]:checked').val();
    var mechanicalCondition = $('input[name="mechanicalCondition"]:checked').val();

    var previousOwners = $('#previousOwners').val();
    var serviceHistory = $('#serviceHistory').val();
    var accidentHistory = $('#accidentHistory').val();

    //generate quote ID
    var quoteId = "Q" + Math.floor(10000 + Math.random() * 90000);
    // Create new quote
    var newQuote = {
        "quoteId": quoteId,
        "quoteDate": new Date().toLocaleDateString(),
        "vehicleInQuote": vehicleInQuote,
        "personalInformation": {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "phone": phone,
            "address": address,
            "country": country,
            "city": city,
            "zip": zip
        },
        "paymentInformation": {
            "cardType": cardType,
            "cardHolder": cardHolder,
            "cardNumber": cardNumber,
            "expiryDate": expiryDate,
            "cvv": cvv
        },
        "tradeInInformation": {
            "tradeIn": tradeIn,
            "tradeInMakeModel": tradeInMakeModel,
            "tradeInYear": tradeInYear,  //manufacture year
            "tradeInMileage": tradeInMileage,
            "tradeInVIN": tradeInVIN,
            "tradeInCondition": tradeInCondition,
            "exteriorCondition": exteriorCondition,
            "interiorCondition": interiorCondition,
            "mechanicalCondition": mechanicalCondition,
            "previousOwners": previousOwners,
            "serviceHistory": serviceHistory,
            "accidentHistory": accidentHistory
        },
        "status": "Pending",
        "totalPrice": $('#subtotal').text().replace('$', '').replace('.00', '').trim()
    }

    if (localStorage.getItem('quote') != null) {
        var getQuote = JSON.parse(localStorage.getItem('quote'));
        getQuote.push(newQuote);
        localStorage.setItem('quote', JSON.stringify(getQuote));
    } else {
        var quote = [newQuote];
        localStorage.setItem('quote', JSON.stringify(quote));
    }
    localStorage.removeItem('cart');
    location.reload();
}

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
        createQuote();

        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });

});