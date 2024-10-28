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



function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
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
        $('a,footer').css('color', 'rgba(0,0,0,0.65)');
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
            $('a').css('color', 'rgba(255,255,255,0.65)');
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
            $('a,footer').css('color', 'rgba(0,0,0,0.65)');
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

                        carRow.append(`<div class=\"car-item\" id=${car.id}>\n` +
                            `    <div class=\"photo\"><img src=\"../../../src/img/vehicleSales/car/${car.id}/1.jpg\"></div>\n` +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button class=\"viewCarBtn\">View Detail</button>\n" +
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
                        carRow.append(`<div class=\"car-item\" id="${car.id}">\n` +
                            `    <img src=\"../../../src/img/vehicleSales/car/${car.id}/1.jpg\">\n` +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button class=\"viewCarBtn\">View Detail</button>\n" +
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
        loadDarkMode();
    });
}
loadDarkMode();
$(document).ready(function () {
    loadSelectOptions();
    loadCars();
    loadDarkMode();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });
    $("#resetFiltersBtn").click(function () {
        location.reload();
    });

    $("#brand, #type, #fuel").on("change", function () {
        loadCars();
        loadDarkMode();
    });

    $(document).on('click', '.viewCarBtn', function () {
        //store the car id to local storage so that the carPage.html can show the correct car
        localStorage.setItem('carToView', $(this).parent().attr('id'));
        location.href = "carPage.html";
    });

    // if(localStorage.getItem('cart') == null){
    //     var y = [
    //         {
    //             "itemId": 1,
    //             "carId": "3",
    //             "brand": "Tesla",
    //             "name": "Model S",
    //             "exteriorColor": "White",
    //             "interiorColor": "Black",
    //             "price": "$89990"
    //         }
    //     ];
    //     localStorage.setItem('cart', JSON.stringify(y));
    // }

});