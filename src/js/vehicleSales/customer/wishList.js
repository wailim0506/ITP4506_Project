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
    $('#tradeYes').append("<div id=\"tradeInSection\" style=\"display: flex;flex-direction: column\">\n" +
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

function formShowRegistration(){
    $('#yes').append('<div id="applyLicenseSection" style="display: flex;flex-direction: column">\n' +
        '                    <label>Is the vehicle registration address same with the address on your profile?<span\n' +
        '                            style="color: red">*</span></label>\n' +
        '                    <div style="display: flex; flex-direction: row;align-items: center">\n' +
        '                        <div style="display: flex; align-items: center;">\n' +
        '                            <input type="radio" id="addressSame" name="addressSame" value="yes">\n' +
        '                            <label for="addressSame">Yes</label>\n' +
        '                        </div>\n' +
        '                        <div style="display: flex; align-items: center;flex-direction: row">\n' +
        '                            <input type="radio" id="addressNotSame" name="addressSame" value="no">\n' +
        '                            <label for="addressNotSame">No</label>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div id="registrationAddressDiv" style="display: flex;flex-direction: column">\n' +
        '                        <label>Vehicle Registration Address<span style="color: red">*</span></label>\n' +
        '                        <div>\n' +
        '                            <input id="registrationAddress" type="text" style="width: 100%"\n' +
        '                                   placeholder="Vehicle Registration Address"\n' +
        '                                   >\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <label>Apply for vehicle tag from toll service provider (HKeToll)?<span style="color: red">*</span></label>\n' +
        '                    <div style="display: flex; flex-direction: row;align-items: center">\n' +
        '                        <div style="display: flex; align-items: center;">\n' +
        '                            <input type="radio" id="tollYes" name="toll" value="yes">\n' +
        '                            <label for="addressSame">Yes</label>\n' +
        '                        </div>\n' +
        '                        <div style="display: flex; align-items: center;flex-direction: row">\n' +
        '                            <input type="radio" id="tollNo" name="toll" value="no">\n' +
        '                            <label for="addressNotSame">No</label>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <label>Do you have an existing third party insurance?<span style="color: red">*</span></label>\n' +
        '                    <div style="display: flex; flex-direction: row;align-items: center">\n' +
        '                        <div style="display: flex; align-items: center;">\n' +
        '                            <input type="radio" id="insureYes" name="insure" value="yes">\n' +
        '                            <label for="insureYes">Yes</label>\n' +
        '                        </div>\n' +
        '                        <div style="display: flex; align-items: center;flex-direction: row">\n' +
        '                            <input type="radio" id="insureNo" name="insure" value="no">\n' +
        '                            <label for="insureNo">No</label>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                    <div id="UploadInsureDiv" style="display: flex;flex-direction: column">\n' +
        '                        <label>Upload the original or photocopy of valid Third Party Risks Insurance Policy or Cover\n' +
        '                            Note<span style="color: red">*</span></label>\n' +
        '                        <div>\n' +
        '                            <input id="uploadInsure" type="file"\n' +
        '                                   style="width: 100%; text-align: center;padding-top: 10px"\n' +
        '                                   placeholder="Upload the original or photocopy of valid Third Party Risks Insurance Policy or Cover Note"\n' +
        '                                   >\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <label>Upload the original of your HKID card (for HK Resident) or passport (for Non HK\n' +
        '                        Resident)<span style="color: red">*</span></label>\n' +
        '                    <div>\n' +
        '                        <input id="uploadID" type="file" style="width: 100%; text-align: center;padding-top: 10px"\n' +
        '                               placeholder="Upload the original of your HKID card (for HK Resident) or passport (for Non HK Resident)"\n' +
        '                               >\n' +
        '                    </div>\n' +
        '                    <label>Upload the original or photocopy of proof of vehicle registration address which is issued not\n' +
        '                        more than 3 months<span style="color: red">*</span> </label>\n' +
        '                    <div>\n' +
        '                        <input id="uploadAddressProof" type="file"\n' +
        '                               style="width: 100%; text-align: center;padding-top: 10px"\n' +
        '                               placeholder="Upload the original or photocopy of proof of vehicle registration address which is issued not more than 3 months"\n' +
        '                               >\n' +
        '                    </div>\n' +
        '                    <div style="display: flex;flex-direction: column" id="notesVehRegistration">\n' +
        '                        <p style="font-size: 20px;font-weight: 600">NOTES ABOUT VEHICLE REGISTRATION:</p>\n' +
        '                        <ol>\n' +
        '                            <li>Vehicle Taxation and Registration\n' +
        '                                <ol type="a">\n' +
        '                                    <li>Vehicles, no matter what class it is, imported into Hong Kong are not subject to any Customs tax, but in general, an importer is required to lodge with the Customs and Excise Department an accurate and complete declaration within 14 days of importation.</li>\n' +
        '                                    <li>On the first registration of a motor vehicle, a first registration tax is charged. The first registration tax is calculated on the basis of the taxable value of the vehicle and in accordance with the percentage for that vehicle class as specified in the schedule of the Motor Vehicle (First Registration Tax) Ordinance (Chapter 330). In general, the taxable value of a vehicle is calculated on the basis of the published retail price of the vehicle or the provisional taxable value assessed by the Customs and Excise Department.</li>\n' +
        '                                    <li>A vehicle may be registered only in the name of an individual person aged 18 or above or of an incorporated body.</li>\n' +
        '                                    <li>In registering a vehicle, the Transport Department will issue a registration mark and a vehicle registration document containing particulars of the vehicle to the registered owner.</li>\n' +
        '                                    <li>Licensing of vehicles takes place after registration. On licensing, the registering owner is issued with a licence which he is required to display on the left-hand side of the vehicle\'s windscreen. In the case of a motorcycle or a vehicle without a fixed windscreen, the licence must be displayed in a conspicuous position on the left-hand side. </li>\n' +
        '                                    <li>Further information concerning first registration of vehicles can be obtained from the Hong Kong Licensing Office at 3/F, United Centre, 95 Queensway, Hong Kong (Tel 2804 2637).</li>\n' +
        '                                </ol>\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                Allocation of Registration Marks\n' +
        '                                <ol type="a">\n' +
        '                                    <li>If an application for registration of a vehicle is in order, the vehicle will be assigned a registration mark consisting of a number of not more than four digits other than special registration marks, with two letters as prefix.</li>\n' +
        '                                    <li>Special registration marks are allocated only after sale by public auction which takes place from time to time. The proceeds of the auction go to the Government Lotteries Fund to be used for charitable purposes. </li>\n' +
        '                                </ol>\n' +
        '                            </li>\n' +
        '                            <li>\n' +
        '                                Third Party Risks Insurance\n' +
        '                                <ol type="a">\n' +
        '                                    <li>Any person (including the registered vehicle owner and driver) has the responsibility of ensuring the presence of a valid third party risks insurance policy for the vehicle concerned whilst using it on roads. Person who contravenes such requirement commits an offence and is liable to a fine of $10,000 and imprisonment for 12 months, and will also be disqualified from holding or obtaining a driving licence (for a period of 12 months to 3 years). The Commissioner for Transport may refuse to license the vehicle concerned or cancel the vehicle licence concerned.</li>\n' +
        '                                </ol>\n' +
        '                            </li>\n' +
        '                            <li>Please click <a href="https://www.td.gov.hk/en/public_services/licences_and_permits/vehicle_licences/how_to_apply_for_registering_and_licensing_a_vehic/index.html" target="_blank">here</a> to read the full notes about vehicle registration</li>\n' +
        '                        </ol>\n' +
        '\n' +
        '                        <div style="display: flex;flex-direction: row;align-items: center">\n' +
        '                            <input type="checkbox" id="agreeApplyTerms" name="agreeApplyTerms" value="agree" required>\n' +
        '                            <label for="agreeApplyTerms">I have read and agree to the notes about vehicle registration<span style="color: red">*</span></label>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>');


    $('#addressNotSame').click(function(){
        $('#registrationAddressDiv').show();
        showFormScrolledPercentage();
    });

    $('#addressSame').click(function(){
        $('#registrationAddressDiv').hide();
        showFormScrolledPercentage();
    });

    $('#insureYes').click(function(){
        $('#UploadInsureDiv').show();
        showFormScrolledPercentage()
    });
    $('#insureNo').click(function(){
        $('#UploadInsureDiv').hide();
        showFormScrolledPercentage();
    });
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
    $('#registrationAddressDiv').hide();
    $('#UploadInsureDiv').hide();


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



    $('#applyYes').click(function(){
        formShowRegistration();
        $('#registrationAddressDiv').hide();
        $('#UploadInsureDiv').hide();
        showFormScrolledPercentage()
    });

    $('#applyNo').click(function(){
        $('#applyLicenseSection').remove();
        showFormScrolledPercentage();
    });
});