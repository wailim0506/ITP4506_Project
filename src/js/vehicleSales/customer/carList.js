function loadSelectOptions() {
    $.getJSON('../../../src/json/vehicleSales/carList.json', function (carData) {
        const brandNamesSet = new Set();
        const carTypesSet = new Set();
        const fuelTypesSet = new Set();

        //get brand name, car type and fuel type
        carData.electricBrands.forEach(brand => {
            brandNamesSet.add(brand.name);
            brand.car.forEach(car => {
                carTypesSet.add(car.type);
                fuelTypesSet.add(car.fuelType);
            });
        });

        //get brand name, car type and fuel type
        carData.nonElectricBrands.forEach(brand => {
            brandNamesSet.add(brand.name);
            brand.car.forEach(car => {
                carTypesSet.add(car.type);
                fuelTypesSet.add(car.fuelType);
            });
        });

        // to array
        const brandNames = Array.from(brandNamesSet);
        const carTypes = Array.from(carTypesSet);
        const fuelTypes = Array.from(fuelTypesSet);

        // add brand to html
        const brandSelect = $("#brand");
        brandSelect.append("<option value='all' selected='selected'>All</option>");
        brandNames.forEach(brandName => {
            brandSelect.append(`<option value='${brandName}'>${brandName}</option>`);
        });
        // add car type to html
        const typeSelect = $("#type");
        typeSelect.append("<option value='all' selected='selected'>All</option>");
        carTypes.forEach(carType => {
            typeSelect.append(`<option value='${carType}'>${carType}</option>`);
        });
        // add fuel type to html
        const fuelSelect = $("#fuel");
        fuelSelect.append("<option value='all' selected='selected'>All</option>");
        fuelTypes.forEach(fuelType => {
            fuelSelect.append(`<option value='${fuelType}'>${fuelType}</option>`);
        });
    });
}

function loadCars() {
    $("#main_carList").html("");
    $.getJSON('../../../src/json/vehicleSales/carList.json', function (data) {
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;

        //load electric cars
        for (var i = 0; i < numberOfElectricBrand; i++) {
            if (data.electricBrands[i].name != $("#brand").val() && $("#brand").val() != "all") {
                continue;
            }

            var brandDiv = $("<div class=\"row\">\n" +
                "    <div class=\"brand_name\">\n" +
                "        <p>" + data.electricBrands[i].name + "</p>\n" +
                "    </div>\n" +
                "</div>");
            var hasCars = false;

            for (var k = 0; k < Math.ceil(data.electricBrands[i].car.length / 4); k++) {
                var carRow = $("<div class=\"car-row\"></div>");
                var j = 0;
                for (var j = 0; j < 4; j++) {
                    var car = data.electricBrands[i].car[j + k * 4];
                    if (car != undefined) {
                        if ($("#type").val() != "all" && car.type != $("#type").val()) {
                            continue;
                        }
                        if ($("#fuel").val() != "all" && car.fuelType != $("#fuel").val()) {
                            continue;
                        }
                        carRow.append("<div class=\"car-item\">\n" +
                            "    <img src=\"../../../src/img/vehicleSales/car/test.jpg\">\n" +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button>View Detail</button>\n" +
                            "</div>");
                        hasCars = true;
                    }
                }
                if (carRow.children().length > 0) {
                    brandDiv.append(carRow);
                }
            }

            if (hasCars) {
                $("#main_carList").append(brandDiv);
            }
        }

        //load non-electric cars
        for (var i = 0; i < numberOfNonElectricBrand; i++) {
            if (data.nonElectricBrands[i].name != $("#brand").val() && $("#brand").val() != "all") {
                continue;
            }

            var brandDiv = $("<div class=\"row\">\n" +
                "    <div class=\"brand_name\">\n" +
                "        <p>" + data.nonElectricBrands[i].name + "</p>\n" +
                "    </div>\n" +
                "</div>");
            var hasCars = false;

            for (var k = 0; k < Math.ceil(data.nonElectricBrands[i].car.length / 4); k++) {
                var carRow = $("<div class=\"car-row\"></div>");
                for (var j = 0; j < 4; j++) {
                    var car = data.nonElectricBrands[i].car[j + k * 4];
                    if (car != undefined) {
                        if ($("#type").val() != "all" && car.type != $("#type").val()) {
                            continue;
                        }
                        if ($("#fuel").val() != "all" && car.fuelType != $("#fuel").val()) {
                            continue;
                        }
                        carRow.append("<div class=\"car-item\">\n" +
                            "    <img src=\"../../../src/img/vehicleSales/car/test.jpg\">\n" +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button>View Detail</button>\n" +
                            "</div>");
                        hasCars = true;
                    }
                }
                if (carRow.children().length > 0) {
                    brandDiv.append(carRow);
                }
            }

            if (hasCars) {
                $("#main_carList").append(brandDiv);
            }
        }
    });
}

function setDarkModePreference() {
    if ($('#darkModeToogle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('body').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item').css('border', '0.1px solid grey');
        $('input').css('background-color', 'rgb(44,47,51)');
        $('input').css('border', '0.1px solid grey');
        $('input').css('color', 'rgb(194,196,200)');
        $('select').css('background-color', 'rgb(44,47,51)');
        $('select').css('color', 'rgb(194,196,200)');
        $('select').css('border', '0.1px solid grey');
        $('#darkModeToogle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html').css('background-color', 'white');
        $('body').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('.car-item').css('border', '1px solid lightgrey');
        $('input').css('background-color', 'white');
        $('input').css('border', '1px solid lightgrey');
        $('input').css('color', 'black');
        $('select').css('background-color', 'white');
        $('select').css('color', 'black');
        $('select').css('border', '1px solid lightgrey');
        $('#darkModeToogle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkModePreference() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html').css('background-color', 'rgb(34,37,41)');
            $('body').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item').css('border', '0.1px solid grey');
            $('input').css('background-color', 'rgb(44,47,51)');
            $('input').css('border', '0.1px solid grey');
            $('input').css('color', 'rgb(194,196,200)');
            $('select').css('background-color', 'rgb(44,47,51)');
            $('select').css('color', 'rgb(194,196,200)');
            $('select').css('border', '0.1px solid grey');
            $('#darkModeToogle').text('wb_sunny');
        } else {
            //to light mode
            $('html').css('background-color', 'white');
            $('body').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
            $('.car-item').css('border', '1px solid lightgrey');
            $('input').css('background-color', 'white');
            $('input').css('border', '1px solid lightgrey');
            $('input').css('color', 'black');
            $('select').css('background-color', 'white');
            $('select').css('color', 'black');
            $('select').css('border', '1px solid lightgrey');
            $('#darkModeToogle').text('brightness_2');
        }
    }
}
loadDarkModePreference();
$(document).ready(function () {
    loadSelectOptions();
    loadDarkModePreference();
    loadCars();

    $('#darkModeToogle').click(function () {
        setDarkModePreference();
    });
    $("#resetFiltersBtn").click(function () {
        location.reload();
    });

    $("#brand").on("change", function () {
        loadCars();
    });
    $("#type").on("change", function () {
        loadCars();
    });

    $("#fuel").on("change", function () {
        loadCars();
    });
});