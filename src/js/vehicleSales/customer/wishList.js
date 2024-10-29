function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html,.modal-content, nav').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body,.modal-content, nav,footer').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('tr').css('border-bottom', '0.1px solid grey');
        $('table').css('border-top', '0.1px solid grey');
        $('input, select,.modal-content,textarea').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html,.modal-content, nav').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body,.modal-content, nav').css('color', 'black');
        $('a,footer').css('color', 'rgba(0,0,0,0.65)');
        $('tr').css('border-bottom', '0.8px solid #6c6969');
        $('table').css('border-top', '0.8px solid #6c6969');
        $('input,.modal-content,textarea').css({
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
            $('html,.modal-content, nav').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body,.modal-content, nav,footer').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('tr').css('border-bottom', '0.1px solid grey');
            $('table').css('border-top', '0.1px solid grey');
            $('input, select,.modal-content,textarea').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html,.modal-content, nav').css('background-color', 'white');
            $('body,.modal-content, nav').css('color', 'black');
            $('footer').css('background-color', '#e8e6e6');
            $('a,footer').css('color', 'rgba(0,0,0,0.65)');
            $('tr').css('border-bottom', '0.8px solid #6c6969');
            $('table').css('border-top', '0.8px solid #6c6969');
            $('input,.modal-content,textarea').css({
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

function loadWishList(){
    var cart = localStorage.getItem('cart');
    if (cart != null) {
        var cartArray = JSON.parse(cart);
        for (var i = 0; i < cartArray.length; i++) {
            var item = cartArray[i];
            var unitPrice = parseInt(item.price.replace('$', ''));
            var itemId = parseInt(item.itemId);
            var row = `<tr class="row" itemid=\"${itemId}\" carid = \"${item.carId}\">\n` +
                "                <td>\n" +
                `                    <img src=\"../../../src/img/vehicleSales/car/${item.carId}/1.jpg\">\n` +
                "                </td>\n" +
                "                <td class=\"vehicleDetailCell\">\n" +
                `                    <p class=\"vehicleName\">${item.brand} ${item.name}</p>\n` +
                `                    <p class=\"exteriorColor\">Exterior Color: ${item.exteriorColor}</p>\n` +
                `                    <p class=\"interiorColor\">Interior Color: ${item.interiorColor}</p>\n` +
                "                </td>\n" +
                `                <td class=\"price\">${item.price}</td>\n` +
                "                <td class=\"quantityCell\">\n" +
                `                    <div unitprice=\"${unitPrice}\">\n` +
                "                        <button class=\"addBtn\">+</button>\n" +
                "                        <input type=\"number\" value=\"1\" maxlength=\"2\"/>\n" +
                "                        <button class=\"minusBtn\">-</button>\n" +
                "                    </div>\n" +
                "                </td>\n" +
                "                <td>\n" +
                "                    <i class=\"material-icons\">delete</i>\n" +
                "                </td>\n" +
                "            </tr>";
            $('table').append(row);
            $('#numberInTitle').text($('table tr').length-1);
        }
    }else{
        $('#main_body').html("");
        $('#numberInTitle').text("0");
        $('#subtotal').hide();
        $('#subtotal').siblings('p').hide();
        $('#getQuoteBtn').hide();
        $('#text_below_title').text("Your wish list is empty.");
        $('#text_below_title').css('font-size','50px');

    }
}

function calculateTotalPrice() {
    var totalPrice = 0;
    $('.price').each(function () {
        var priceText = $(this).text().replace('$', '').replace(',', '');
        var price = parseFloat(priceText);
        if (!isNaN(price)) {
            totalPrice += price;
        }
        totalPrice += 2000;
    });
    return totalPrice.toFixed(2);
}

function formShowTradeIn() {
    $('#longForm').append("<div id=\"tradeInSection\" style=\"display: flex;flex-direction: column\">\n" +
        "                    <label>Current Vehicle Make and Model<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <input id=\"tradeInMakeModel\" type=\"text\" style=\"width: 100%\"\n" +
        "                               placeholder=\"Current Vehicle Make and Model\" required>\n" +
        "                    </div>\n" +
        "                    <label>Year of Manufacture<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <input id=\"tradeInYear\" type=\"number\" style=\"width: 100%\" placeholder=\"Year of Manufacture\" required>\n" +
        "                    </div>\n" +
        "                    <label>Mileage<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <input id=\"tradeInMileage\" type=\"number\" style=\"width: 100%\" placeholder=\"Mileage\" required>\n" +
        "                    </div>\n" +
        "                    <label>VIN (Vehicle Identification Number)<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <input id=\"tradeInVIN\" type=\"text\" style=\"width: 100%\"\n" +
        "                               placeholder=\"VIN (Vehicle Identification Number)\"  required>\n" +
        "                    </div>\n" +
        "                    <label>Overall Condition<span style=\"color: red\">*</span></label>\n" +
        "                    <div style=\"display: flex; flex-direction: column;\">\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"conditionExcellent\" name=\"tradeInCondition\" value=\"excellent\">\n" +
        "                            <label for=\"conditionExcellent\">Excellent</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"conditionGood\" name=\"tradeInCondition\" value=\"good\">\n" +
        "                            <label for=\"conditionGood\">Good</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"conditionFair\" name=\"tradeInCondition\" value=\"fair\">\n" +
        "                            <label for=\"conditionFair\">Fair</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"conditionPoor\" name=\"tradeInCondition\" value=\"poor\">\n" +
        "                            <label for=\"conditionPoor\">Poor</label>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <label>Exterior Condition<span style=\"color: red\">*</span></label>\n" +
        "                    <div style=\"display: flex; flex-direction: column;\">\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"exteriorExcellent\" name=\"exteriorCondition\" value=\"excellent\">\n" +
        "                            <label for=\"exteriorExcellent\">Excellent</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"exteriorGood\" name=\"exteriorCondition\" value=\"good\">\n" +
        "                            <label for=\"exteriorGood\">Good</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"exteriorFair\" name=\"exteriorCondition\" value=\"fair\">\n" +
        "                            <label for=\"exteriorFair\">Fair</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"exteriorPoor\" name=\"exteriorCondition\" value=\"poor\">\n" +
        "                            <label for=\"exteriorPoor\">Poor</label>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <label>Interior Condition<span style=\"color: red\">*</span></label>\n" +
        "                    <div style=\"display: flex; flex-direction: column;\">\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"interiorExcellent\" name=\"interiorCondition\" value=\"excellent\">\n" +
        "                            <label for=\"interiorExcellent\">Excellent</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"interiorGood\" name=\"interiorCondition\" value=\"good\">\n" +
        "                            <label for=\"interiorGood\">Good</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"interiorFair\" name=\"interiorCondition\" value=\"fair\">\n" +
        "                            <label for=\"interiorFair\">Fair</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"interiorPoor\" name=\"interiorCondition\" value=\"poor\">\n" +
        "                            <label for=\"interiorPoor\">Poor</label>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "\n" +
        "                    <label>Mechanical Condition<span style=\"color: red\">*</span></label>\n" +
        "                    <div style=\"display: flex; flex-direction: column;\">\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"mechanicalExcellent\" name=\"mechanicalCondition\" value=\"excellent\">\n" +
        "                            <label for=\"mechanicalExcellent\">Excellent</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"mechanicalGood\" name=\"mechanicalCondition\" value=\"good\">\n" +
        "                            <label for=\"mechanicalGood\">Good</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"mechanicalFair\" name=\"mechanicalCondition\" value=\"fair\">\n" +
        "                            <label for=\"mechanicalFair\">Fair</label>\n" +
        "                        </div>\n" +
        "                        <div style=\"display: flex; align-items: center;\">\n" +
        "                            <input type=\"radio\" id=\"mechanicalPoor\" name=\"mechanicalCondition\" value=\"poor\">\n" +
        "                            <label for=\"mechanicalPoor\">Poor</label>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <label>Number of Previous Owners<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <input id=\"previousOwners\" type=\"text\" style=\"width: 100%\"\n" +
        "                               placeholder=\"Number of Previous Owners\" required >\n" +
        "                    </div>\n" +
        "                    <label>Service History<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <textarea id=\"serviceHistory\" style=\"width: 100%;resize: none\" placeholder=\"Service History\"  required></textarea>\n" +
        "                    </div>\n" +
        "                    <label>Accident History<span style=\"color: red\">*</span></label>\n" +
        "                    <div>\n" +
        "                        <textarea id=\"accidentHistory\" style=\"width: 100%;resize: none\" placeholder=\"Accident History\" required></textarea>\n" +
        "                    </div>\n" +
        "                    <label>Image Upload (optional)</label>\n" +
        "                    <div>\n" +
        "                        <input id=\"photosUpload\" type=\"file\" style=\"width: 100%; text-align: center;padding-top: 10px\" multiple>\n" +
        "                    </div>\n" +
        "                </div>");
    loadDarkMode();
}

function showFormScrolledPercentage() {
    const $modalBody = $('.modal-body');

    const totalHeight = $modalBody[0].scrollHeight - $modalBody.outerHeight();

    const scrollTop = $modalBody.scrollTop();

    const scrollPercent = (scrollTop / totalHeight) * 100;

    var roundedScrollPercent = Math.round(scrollPercent * 100) / 100;

    if (roundedScrollPercent >= 99) {
        roundedScrollPercent = 100;
    }
    $('#formScrolled').text('Scrolled: ' + parseInt(roundedScrollPercent) + '%');
}

loadDarkMode();
$(document).ready(function () {
    loadDarkMode();
    loadWishList();
    loadDarkMode();

    $('#subtotal').text('$' + calculateTotalPrice());


    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('.addBtn').click(function () {
        $(this).siblings('input').val(parseInt($(this).siblings('input').val()) + 1);
        var currentPrice = parseInt($(this).parent().parent().siblings('.price').text().replace('$', ''));
        var unitPrice = parseInt($(this).parent().attr('unitprice'));
        var newPrice = currentPrice + unitPrice;
        $(this).parent().parent().siblings('.price').text(`$${newPrice}`);
        $('#subtotal').text('$' + calculateTotalPrice());
    });

    $('.minusBtn').click(function () {
        if ($(this).siblings('input').val() > 1) {
            $(this).siblings('input').val(parseInt($(this).siblings('input').val()) - 1);
            var currentPrice = parseInt($(this).parent().parent().siblings('.price').text().replace('$', ''));
            var unitPrice = parseInt($(this).parent().attr('unitprice'));
            var newPrice = currentPrice - unitPrice;
            $(this).parent().parent().siblings('.price').text(`$${newPrice}`);
            $('#subtotal').text('$'+calculateTotalPrice());
        }else{
            $(this).siblings('input').val(1);
        }
    });

    $('td i').click(function () {

        var itemId = $(this).parent().parent().attr('itemid');
        var cart = localStorage.getItem('cart');
        var cartArray = JSON.parse(cart);
        var newCartArray = [];
        for (var i = 0; i < cartArray.length; i++) {
            if (cartArray[i].itemId != itemId) {
                newCartArray.push(cartArray[i]);
            }
        }
        if (newCartArray.length == 0) {
             localStorage.removeItem('cart');
            // localStorage.setItem('cart', JSON.stringify(newCartArray));
        }else{
            localStorage.setItem('cart', JSON.stringify(newCartArray));
        }


        $(this).parent().parent().remove();
        $('#numberInTitle').text($('table tr').length-1);
        $('#subtotal').text('$'+calculateTotalPrice());

        if ($('table tr').length == 1){
            $('#main_body').html("");
            $('#numberInTitle').text("0");
            $('#subtotal').hide();
            $('#subtotal').siblings('p').hide();
            $('#getQuoteBtn').hide();
            $('#text_below_title').text("Your wish list is empty.");
            $('#text_below_title').css('font-size','50px');
        }
    });

    $('td input').on('input',function(){
        if (parseInt($(this).val()) <= "0"){
            $(this).val(1);
        }

        if (parseInt($(this).val()) >= "100"){
            $(this).val(99);
        }

        var currentPrice = parseInt($(this).parent().attr('unitprice'));
        var newPrice = currentPrice * $(this).val();
        $(this).parent().parent().siblings('.price').text(`$${newPrice}`);
        $('#subtotal').text('$'+calculateTotalPrice());
    });

    $('td input').focusout(function(){
        if ($(this).val() == ""){
            $(this).val(1);
        }
        var currentPrice = parseInt($(this).parent().attr('unitprice'));
        var newPrice = currentPrice * $(this).val();
        $(this).parent().parent().siblings('.price').text(`$${newPrice}`);
        $('#subtotal').text('$'+calculateTotalPrice());
    });



    $('#refreshBtn').click(function(){
        location.reload();
    });

//     when radio name trade in is selected
    $('#tradeInYes').click(function () {
        formShowTradeIn();
        showFormScrolledPercentage();
    });

//     when radio name trade in is not selected
    $('#tradeInNo').click(function () {
        $('#tradeInSection').remove();
        showFormScrolledPercentage();
    });

    $('.modal-body').on('scroll', function () {
        showFormScrolledPercentage();
    });

});