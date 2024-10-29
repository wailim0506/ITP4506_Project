function loadCar(){
    var id = localStorage.getItem('carToView');

    if (id == null){
        $('body').html("");
        $('body').append("<h1>Error, Please try again</h1>");
        $('body').append("<i id=\"darkModeToogle\" class=\"material-icons\"\n" +
            "   style=\"position:fixed; bottom: 10px; right: 10px; cursor: pointer;\">wb_sunny</i>");
    }

    $.getJSON("../../../src/json/vehicleSales/carList.json", function (data) {
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;

        //match id
        for (var i = 0; i < numberOfElectricBrand; i++) {
            var brand = data.electricBrands[i];
            for (var j = 0; j < brand.car.length; j++) {
                if (brand.car[j].id == id) {
                    var car = brand.car[j];
                    $('#slide1').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/1.jpg
                    " id="image1">`);
                    $('#slide2').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/2.jpg
                    " id="image2">`);
                    $('#slide3').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/3.jpg
                    " id="image3">`);
                    $('#carInfo_name').text(`${car.model}`);
                    $('#carType').text(`Type: ${car.type}`);
                    $('#carInfo_price').text(`$${car.price}`);
                    $('#carInfo_brand').text(`${brand.name}`);
                    //append exterior color
                    $('#exteriorColorRow').html("");
                    $('#selectedExteriorColorDisplay').text(`Selected Color: `);
                    for (var e = 0; e < car.bodyColors.length; e++) {
                        $('#exteriorColorRow').append(`<div class="colorCircle" style="background-color: ${car.bodyColors[e]}" 
                                                        id="${car.bodyColors[e]}"></div>`);
                    }

                    //append interior color
                    $('#interiorColorRow').html("");
                    $('#selectedInteriorColorDisplay').text(`Selected Color: `);
                    for (var e = 0; e < car.interiorColors.length; e++) {
                        $('#interiorColorRow').append(`<div class="colorCircle" style="background-color: ${car.interiorColors[e]}" 
                                                        id="${car.interiorColors[e]}"></div>`);
                    }
                    // append basic infomation
                    $('#basicInfoSection').html("");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Country of Origin:</p>\n" +
                        "        <p class=\"word\"><img\n" +
                        `                src=\"https://flagcdn.com/${car.countryOfOrigin[0]}.svg\"\n` +
                        "                width=\"25\"\n" +
                        `                style=\"margin-right: 10px\">${car.countryOfOrigin[1]}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Manufacture Year:</p>\n" +
                        `        <p class=\"word\">${car.manufactureYear}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Fuel Type:</p>\n" +
                        `        <p class=\"word\">${car.fuelType}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Transmission:</p>\n" +
                        `        <p class=\"word\">${car.transmission}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Engine Type:</p>\n" +
                        `        <p class=\"word\">${car.engineType}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Horse Power:</p>\n" +
                        `        <p class=\"word\">${car.horsepower} Watt</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Max. Range:</p>\n" +
                        `        <p class=\"word\">${car.maxRange} KM</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Acceleration:</p>\n" +
                        `        <p class=\"word\">${car.acceleration}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Drive Train:</p>\n" +
                        `        <p class=\"word\">${car.driveTrain}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Seating Capacity:</p>\n" +
                        `        <p class=\"word\">${car.seatingCapacity}</p>\n` +
                        "      </div>");

                    // append battery information
                    $('#batteryInfoSection').html("");
                    $('#batteryInfoSection').append("<div class=\"infoBox batteryInfoBox\">\n" +
                        "        <p class=\"title\">Battery Capacity:</p>\n" +
                        `        <p class=\"word\">${car.batteryCapacity}kWh</p>\n` +
                        "      </div>");
                    $('#batteryInfoSection').append("<div class=\"infoBox batteryInfoBox\">\n" +
                        "        <p class=\"title\">Charging Time:</p>\n" +
                        "        <ul class=\"word\" id='chargingTimeList'>\n" +
                        "        </ul>\n" +
                        "      </div>");
                    $.each(car.chargingTime, function (key, value) {
                        $('#chargingTimeList').append(`<li>${key}: ${value}</li>`);
                    });

                    //append feature
                    $('#featureInfoSection').html("");
                    $.each(car.features, function (category, items) {
                        const infoBox = `<div class="infoBox featureInfoBox">
                                                    <p class="title">${category}:</p>
                                                    <ul class="word">
                                                        ${items.map(item => `<li>${item}</li>`).join('')}
                                                    </ul>
                                                </div>`;
                        $('#featureInfoSection').append(infoBox);
                    });

                    //append warranty
                    $('#warrantyInfoSection').html("");
                    $.each(car.warranty, function (category, items) {
                        const infoBox = `<div class="infoBox">
                                                    <p class="title">${category}:</p>
                                                    <p class="word">${items}</p>
                                                </div>`;
                        $('#warrantyInfoSection').append(infoBox);
                    });
                    break;
                }
            }
        }

        for (var i = 0; i < numberOfNonElectricBrand; i++) {
            var brand = data.nonElectricBrands[i];
            for (var j = 0; j < brand.car.length; j++) {
                //console.log(brand.car[j].id);

                if (brand.car[j].id == id) {
                    var car = brand.car[j];
                    $('#slide1').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/1.jpg
                    " id="image1">`);
                    $('#slide2').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/2.jpg
                    " id="image2">`);
                    $('#slide3').append(`<img class="slideImage" src="../../../src/img/vehicleSales/car/${car.id}/3.jpg
                    " id="image3">`);
                    $('#carInfo_name').text(car.model);
                    $('#carInfo_price').text(`$${car.price}`);
                    $('#carInfo_brand').text(`${brand.name}`);
                    $('#carType').text(`Type: ${car.type}`);
                    //append exterior color
                    $('#exteriorColorRow').html("");
                    $('#selectedExteriorColorDisplay').text("Selected Color: ");
                    for (var e = 0; e < car.bodyColors.length; e++) {
                        $('#exteriorColorRow').append(`<div class="colorCircle" style="background-color: ${car.bodyColors[e]}" 
                                                        id="${car.bodyColors[e]}"></div>`);
                    }

                    //append interior color
                    $('#interiorColorRow').html("");
                    $('#selectedInteriorColorDisplay').text("Selected Color: ");
                    for (var e = 0; e < car.interiorColors.length; e++) {
                        $('#interiorColorRow').append(`<div class="colorCircle" style="background-color: ${car.interiorColors[e]}" 
                                                        id="${car.interiorColors[e]}"></div>`);
                    }

                    // append basic infomation
                    $('#basicInfoSection').html("");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Country of Origin:</p>\n" +
                        "        <p class=\"word\"><img\n" +
                        `                src=\"https://flagcdn.com/${car.countryOfOrigin[0]}.svg\"\n` +
                        "                width=\"25\"\n" +
                        `                style=\"margin-right: 10px\">${car.countryOfOrigin[1]}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Manufacture Year:</p>\n" +
                        `        <p class=\"word\">${car.manufactureYear}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Fuel Type:</p>\n" +
                        `        <p class=\"word\">${car.fuelType}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Transmission:</p>\n" +
                        `        <p class=\"word\">${car.transmission}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Engine Type:</p>\n" +
                        `        <p class=\"word\">${car.engineType}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Horse Power:</p>\n" +
                        `        <p class=\"word\">${car.horsepower} Watt</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Max. Range:</p>\n" +
                        `        <p class=\"word\">${car.maxRange} KM</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Acceleration:</p>\n" +
                        `        <p class=\"word\">${car.acceleration}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Drive Train:</p>\n" +
                        `        <p class=\"word\">${car.driveTrain}</p>\n` +
                        "      </div>");
                    $('#basicInfoSection').append("<div class=\"infoBox\">\n" +
                        "        <p class=\"title\">Seating Capacity:</p>\n" +
                        `        <p class=\"word\">${car.seatingCapacity}</p>\n` +
                        "      </div>");

                    //remove battery section
                    $('#batteryInfoSection').remove();
                    $('#batterySectionTitle').remove();

                    //append feature
                    $('#featureInfoSection').html("");
                    $.each(car.features, function (category, items) {
                        const infoBox = `<div class="infoBox featureInfoBox">
                                                    <p class="title">${category}:</p>
                                                    <ul class="word">
                                                        ${items.map(item => `<li>${item}</li>`).join('')}
                                                    </ul>
                                                </div>`;
                        $('#featureInfoSection').append(infoBox);
                    });

                    //append warranty
                    $('#warrantyInfoSection').html("");
                    $.each(car.warranty, function (category, items) {
                        const infoBox = `<div class="infoBox">
                                                    <p class="title">${category}:</p>
                                                    <p class="word">${items}</p>
                                                </div>`;
                        $('#warrantyInfoSection').append(infoBox);
                    });
                    break;
                }
            }
        }

    });
}
function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav,.modal-content').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer,.modal-content').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.infoBox .word').css('color', 'white');
        $('.section').css('border-bottom', '1px solid #4c4c4c');
        if (window.innerWidth > 1036){
            $('#upperLeft').css('border-bottom','0');
            $('#upperLeft').css('border-right','1px solid #4c4c4c');
        }else{
            $('#upperLeft').css('border-right','0');
            $('#upperLeft').css('border-bottom','0');
        }
        $('#exteriorColorSelectionCollapse,#interiorColorSelectionCollapse').css('border-bottom', '1px solid #4c4c4c');
        $('#similarCarSection').css('border', '0');
        $('.sectionTitleDiv p').css('color', 'white');
        $('.similarCarBox').css('border', '0.1px solid grey');
        $('input').css('background-color', 'rgb(44,47,51)');
        $('input').css('border', '0.1px solid grey');
        $('input').css('color', 'rgb(194,196,200)');
        $('select').css('background-color', 'rgb(44,47,51)');
        $('select').css('color', 'rgb(194,196,200)');
        $('select').css('border', '0.1px solid grey');
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html, nav,.modal-content').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body, nav,.modal-content').css('color', 'black');
        $('a,footer').css('color', 'rgba(0,0,0,0.65)');
        $('.infoBox .word').css('color', 'black');
        $('.section').css('border-bottom', '1px solid #d1cece');
        if (window.innerWidth > 1036){
            $('#upperLeft').css('border-bottom','0');
            $('#upperLeft').css('border-right','1px solid #dad7d7');
        }else{
            $('#upperLeft').css('border-right','0');
            $('#upperLeft').css('border-bottom','0');
        }
        $('#exteriorColorSelectionCollapse,#interiorColorSelectionCollapse').css('border-bottom', '1px solid #dad7d7');
        $('#similarCarSection').css('border', '0');
        $('.sectionTitleDiv p').css('color', 'black');
        $('.similarCarBox').css('border', '1px solid lightgrey');
        $('input').css('background-color', 'white');
        $('input').css('border', '1px solid lightgrey');
        $('input').css('color', 'black');
        $('select').css('background-color', 'white');
        $('select').css('color', 'black');
        $('select').css('border', '1px solid lightgrey');
        $('#darkModeToggle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkMode() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html, nav,.modal-content').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body, nav,footer,.modal-content').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.infoBox .title').css('color','white');
            $('.infoBox .word').css('color', 'white');
            $('.section').css('border-bottom', '1px solid #4c4c4c');
            if (window.innerWidth > 1036){
                $('#upperLeft').css('border-bottom','0');
                $('#upperLeft').css('border-right','1px solid #4c4c4c');
            }else{
                $('#upperLeft').css('border-right','0');
                $('#upperLeft').css('border-bottom','0');
            }
            $('#exteriorColorSelectionCollapse,#interiorColorSelectionCollapse').css('border-bottom', '1px solid #4c4c4c');
            $('#similarCarSection').css('border', '0');
            $('.sectionTitleDiv p').css('color', 'white');
            $('.similarCarBox').css('border', '0.1px solid grey');
            $('input').css('background-color', 'rgb(44,47,51)');
            $('input').css('border', '0.1px solid grey');
            $('input').css('color', 'rgb(194,196,200)');
            $('select').css('background-color', 'rgb(44,47,51)');
            $('select').css('color', 'rgb(194,196,200)');
            $('select').css('border', '0.1px solid grey');
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html,nav,.modal-content').css('background-color', 'white');
            $('footer').css('background-color', '#e8e6e6');
            $('body, nav,.modal-content').css('color', 'black');
            $('a,footer').css('color', 'rgba(0,0,0,0.65)');
            $('.infoBox .title').css('color','black');
            $('.infoBox .word').css('color', 'black');
            $('.section').css('border-bottom', '1px solid #d1cece');
            if (window.innerWidth > 1036){
                $('#upperLeft').css('border-bottom','0');
                $('#upperLeft').css('border-right','1px solid #dad7d7');
            }else{
                $('#upperLeft').css('border-right','0');
                $('#upperLeft').css('border-right','1px solid #dad7d7');
            }
            $('#exteriorColorSelectionCollapse ,#interiorColorSelectionCollapse').css('border-bottom', '1px solid #dad7d7');
            $('#similarCarSection').css('border', '0');
            $('.sectionTitleDiv p').css('color', 'black');
            $('.similarCarBox').css('border', '1px solid lightgrey');
            $('input').css('background-color', 'white');
            $('input').css('border', '1px solid lightgrey');
            $('input').css('color', 'black');
            $('select').css('background-color', 'white');
            $('select').css('color', 'black');
            $('select').css('border', '1px solid lightgrey');
            $('#darkModeToggle').text('brightness_2');
        }
    }
}

function addCart(){
    var selectedExteriorColor = localStorage.getItem('selectedExteriorColor');
    var selectedInteriorColor = localStorage.getItem('selectedInteriorColor');
    var selectedCar = localStorage.getItem('carToView');
    var price = $('#carInfo_price').text();
    var brand = $('#carInfo_brand').text();
    var name = $('#carInfo_name').text();

    var cart = localStorage.getItem('cart');
    if (cart == null) {
        cart = [{
            itemId: 1 ,
            carId: selectedCar,
            brand: brand,
            name: name,
            exteriorColor: selectedExteriorColor,
            interiorColor: selectedInteriorColor,
            price: price
        }];
        localStorage.setItem('cart', JSON.stringify(cart));
        openModal("Vehicle added to wish list!");
    }else if(JSON.parse(cart).length == 1){
        // alert("Wish List already have car");
        openModal("Wish List already have car");
    } else{
        cart = JSON.parse(cart);
        cart.push({
            itemId: cart.length + 1,
            carId: selectedCar,
            brand: brand,
            name: name,
            exteriorColor: selectedExteriorColor,
            interiorColor: selectedInteriorColor,
            price: price
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        // alert("Vehicle added to wish list!");
        openModal("Vehicle added to wish list!");
    }
    // location.reload();
}


var exteriorColorOpened = true;
var interiorColorOpened = true;
$(document).ready(function () {
    loadDarkMode();
    loadCar();

    $(window).resize(function () {
        if(window.innerWidth > 1076){
            $('#upperLeft').css('border-right','1px solid #dad7d7');
        }else{
            $('#upperLeft').css('border-right','0');
        }
    });

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#exteriorColorSelectionCollapse').click(function () {
        if (exteriorColorOpened) { //opened and going to close it
            // animation to close it
            $('#exteriorColorDiv').slideUp();
            $('#exteriorColorSelectionCollapse i').text("keyboard_arrow_down");
            exteriorColorOpened = false;
        } else { //closed and going to open it
            // animation to open it
            $('#exteriorColorDiv').slideDown();
            $('#exteriorColorSelectionCollapse i').text("keyboard_arrow_up");
            exteriorColorOpened = true;
        }
    });

    $('#interiorColorSelectionCollapse').click(function () {
    if (interiorColorOpened) {
        $('#interiorColorDiv').slideUp();
        $('#interiorColorSelectionCollapse i').text("keyboard_arrow_down");
        interiorColorOpened = false;
    } else {
        $('#interiorColorDiv').slideDown();
        $('#interiorColorSelectionCollapse i').text("keyboard_arrow_up");
        interiorColorOpened = true;
    }
});

    $(document).on('click', '#exteriorColorRow .colorCircle', function () {
        $('#selectedExteriorColorDisplay').text(`Selected Color: ${$(this).attr('id')}`);
        localStorage.setItem('selectedExteriorColor', $(this).attr('id'));
        $('#exteriorColorRow .colorCircle').css('border', '0');
        if ($('#darkModeToggle').text() == 'brightness_2') {
            $(this).css('border', '2px solid hotpink');
        } else {
            $(this).css('border', '2px solid lightgreen');
        }
    });

    $(document).on('click', '#interiorColorRow .colorCircle', function () {
        $('#selectedInteriorColorDisplay').text(`Selected Color: ${$(this).attr('id')}`);
        localStorage.setItem('selectedInteriorColor', $(this).attr('id'));
        $('#interiorColorRow .colorCircle').css('border', '0');
        if ($('#darkModeToggle').text() == 'brightness_2') {
            $(this).css('border', '2px solid hotpink');
        } else {
            $(this).css('border', '2px solid lightgreen');
        }
    });

    $('#addToWishListBtn').click(function () {
        if ($('#selectedInteriorColorDisplay').text() != "Selected Color: "){
            if ($('#selectedExteriorColorDisplay').text() != "Selected Color: "){
                addCart();
            }else{
                // alert("Please select a exterior color");
                openModal("Please select a exterior color");
            }
        }else{
            // alert("Please select a interior color");
            openModal("Please select a interior color");
        }
    });

    $('.similarCarBox button').click(function () {
        localStorage.setItem('carToView', $(this).attr('carid'));
        location.href = "carPage.html";
    });
});