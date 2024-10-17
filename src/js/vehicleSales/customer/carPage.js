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
                //console.log(brand.car[j].id);
                if (brand.car[j].id == id) {
                    var car = brand.car[j];
                    //to append:
                    // #image1
                    // #image2
                    // #image3
                    // #name
                    // #price
                    // #similarCarSection
                    console.log(car.countryOfOrigin[0]);
                    $('#name').text(car.model);
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
                        `        <p class=\"word\">${car.acceleration}</p>\n` +
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
                    // $('#carType').text(car.type);
                    // $('#carFuel').text(car.fuelType);
                    // $('#carPrice').text(car.price);
                    // $('#carImage').attr('src', '../../../src/img/vehicleSales/car/' + car.image);
                    // break;
                    console.log(car.model);
                    $('#name').text(car.model);
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
                        `        <p class=\"word\">${car.acceleration}</p>\n` +
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
        $('html').css('background-color', 'rgb(34,37,41)');
        $('body').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.infoBox .word').css('color', 'white');
        $('.section').css('border-bottom', '1px solid #4c4c4c');
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
        $('html').css('background-color', 'white');
        $('body').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('.infoBox .word').css('color', 'black');
        $('.section').css('border-bottom', '1px solid #d1cece');
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
            $('html').css('background-color', 'rgb(34,37,41)');
            $('body').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.infoBox .title').css('color','white');
            $('.section').css('border-bottom', '1px solid #4c4c4c');
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
            $('html').css('background-color', 'white');
            $('body').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
            $('.infoBox .title').css('color','black');
            $('.section').css('border-bottom', '1px solid #d1cece');
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

loadDarkMode();
setDarkMode();
$(document).ready(function () {
    loadDarkMode();
    setDarkMode();
    loadCar();
    $('#darkModeToggle').click(function () {
        setDarkMode();
    });
});