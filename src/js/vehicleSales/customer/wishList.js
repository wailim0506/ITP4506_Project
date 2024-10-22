function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('body').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('tr').css('border-bottom', '0.1px solid grey');
        $('table').css('border-top', '0.1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html').css('background-color', 'white');
        $('body').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('tr').css('border-bottom', '1px solid #6c6969');
        $('table').css('border-top', '0.1px solid #6c6969');
        $('input').css({
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
            $('html').css('background-color', 'rgb(34,37,41)');
            $('body').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('tr').css('border-bottom', '0.1px solid grey');
            $('table').css('border-top', '0.1px solid lightgrey');
            $('table').css('border-top', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html').css('background-color', 'white');
            $('body').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
            $('tr').css('border-bottom', '1px solid #6c6969');
            $('table').css('border-top', '0.1px solid #6c6969');
            $('input').css({
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
            var row = "<tr>\n" +
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
                "                        <input type=\"number\" value=\"1\"/>\n" +
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
    });
    return totalPrice.toFixed(2);
}

loadDarkMode();
$(document).ready(function () {
    loadDarkMode();
    loadWishList();

    $('#subtotal').text('$'+calculateTotalPrice());


    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('.addBtn').click(function () {
        $(this).siblings('input').val(parseInt($(this).siblings('input').val()) + 1);
        var currentPrice = parseInt($(this).parent().parent().siblings('.price').text().replace('$', ''));
        var unitPrice = parseInt($(this).parent().attr('unitprice'));
        var newPrice = currentPrice + unitPrice;
        $(this).parent().parent().siblings('.price').text(`$${newPrice}`);
        $('#subtotal').text('$'+calculateTotalPrice());
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
        $(this).parent().parent().remove();
        $('#numberInTitle').text($('table tr').length-1);
        $('#subtotal').text('$'+calculateTotalPrice());
    });

    $('#refreshBtn').click(function(){
        location.reload();
    });


});