function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer').css('color', 'rgb(194,196,200)');
        $('a,#subNav').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item').css('border', '0.1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html, nav').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body, nav').css('color', 'black');
        $('a,footer,#subNav').css('color', 'rgba(0,0,0,0.65)');
        $('.car-item').css('border', '1px solid lightgrey');
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
            $('html, nav').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body, nav,footer').css('color', 'rgb(194,196,200)');
            $('a,#subNav').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item').css('border', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html, nav').css('background-color', 'white');
            $('footer').css('background-color', '#e8e6e6');
            $('body, nav').css('color', 'black');
            $('a,footer,#subNav').css('color', 'rgba(0,0,0,0.65)');
            $('.car-item').css('border', '1px solid lightgrey');
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

function loadCar(){
    var id = localStorage.getItem('sales_view_carId');

    if (id == null){
        $('body').html("");
        $('body').append("<h1>Error, Please try again</h1>");
        $('body').append("<i id=\"darkModeToogle\" class=\"material-icons\"\n" +
            "   style=\"position:fixed; bottom: 10px; right: 10px; cursor: pointer;\">wb_sunny</i>");
    }

    $.getJSON('../../../src/json/vehicleSales/carList.json',function (data){
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;

        //match id
        for (var i = 0; i < numberOfElectricBrand; i++) {
            var brand = data.electricBrands[i];
            for (var j = 0; j < brand.car.length; j++) {
                if (brand.car[j].id == id) {
                    var car = brand.car[j];
                    $('#subNav').append(`${brand.name} ${car.model}`);
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
                    $('#selectedExteriorColorDisplay').text(`Color: `);
                    for (var e = 0; e < car.bodyColors.length; e++) {
                        $('#exteriorColorRow').append(`<div class="colorCircle" style="background-color: ${car.bodyColors[e]}" 
                                                        id="${car.bodyColors[e]}"></div>`);
                    }

                    //append interior color
                    $('#interiorColorRow').html("");
                    $('#selectedInteriorColorDisplay').text(`Color: `);
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
                if (brand.car[j].id == id) {
                    var car = brand.car[j];
                    $('#subNav').append(`${brand.name} ${car.model}`);
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

loadDarkMode();
var exteriorColorOpened = true;
var interiorColorOpened = true;
$(document).ready(function () {
    loadCar();
    loadDarkMode();

    $('.dot').first().click();

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
        $('#selectedExteriorColorDisplay').text(`Color: ${$(this).attr('id')}`);
        localStorage.setItem('selectedExteriorColor', $(this).attr('id'));
        $('#exteriorColorRow .colorCircle').css('border', '0');
        if ($('#darkModeToggle').text() == 'brightness_2') {
            $(this).css('border', '2px solid hotpink');
        } else {
            $(this).css('border', '2px solid lightgreen');
        }
    });

    $(document).on('click', '#interiorColorRow .colorCircle', function () {
        $('#selectedInteriorColorDisplay').text(`Color: ${$(this).attr('id')}`);
        localStorage.setItem('selectedInteriorColor', $(this).attr('id'));
        $('#interiorColorRow .colorCircle').css('border', '0');
        if ($('#darkModeToggle').text() == 'brightness_2') {
            $(this).css('border', '2px solid hotpink');
        } else {
            $(this).css('border', '2px solid lightgreen');
        }
    });
});