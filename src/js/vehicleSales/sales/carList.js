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

function loadCars(){
    var carCount = 0;
    $('#main_carList').html("");
    $('#main_carList').append("<table id=\"carTable\">\n" +
        "            <tr>\n" +
        "                <th id=\"carID_cell\">Car ID</th>\n" +
        "                <th id=\"image_cell\">Car Image</th>\n" +
        "                <th id=\"brandName_cell\">Brand</th>\n" +
        "                <th>Model</th>\n" +
        "                <th>Car Type</th>\n" +
        "                <th>Fuel Type</th>\n" +
        "                <th>Price</th>\n" +
        "                <th>View</th>\n" +
        "            </tr>");
    $.getJSON('../../../src/json/vehicleSales/carList.json', function (data) {
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;
        var searchModel = $("#searchModel").val().toLowerCase();
        //load electric cars
        for (var i = 0; i < numberOfElectricBrand; i++) {
            if (data.electricBrands[i].name != $("#brand").val() && $("#brand").val() != "all") {
                continue;
            }

            for (var k = 0; k < Math.ceil(data.electricBrands[i].car.length); k++) {
                var car = data.electricBrands[i].car[k];
                if (car != undefined) {
                    if ($("#type").val() != "all" && car.type != $("#type").val()) {
                        continue;
                    }
                    if ($("#fuel").val() != "all" && car.fuelType != $("#fuel").val()) {
                        continue;
                    }
                    if (searchModel && !car.model.toLowerCase().includes(searchModel)) {
                        continue;
                    }

                    $('#carTable').append(`<tr>
                                                <td>${car.id}</td>
                                                <td><img src="../../../src/img/vehicleSales/car/${car.id}/1.jpg" alt="Car Image"></td>
                                                <td>${data.electricBrands[i].name}</td>
                                                <td>${car.model}</td>
                                                <td>${car.type}</td>
                                                <td>${car.fuelType}</td>
                                                <td>$${car.price}</td>
                                                <td><button carid='${car.id}' onclick="localStorage.setItem('sales_view_carId', $(this).attr('carid'));location.href = 'carPage.html';">View</button></td>
                                                </tr>`);
                    carCount++;
                }
            }
        }

        //load non electric cars
        for (var i = 0; i < numberOfNonElectricBrand; i++) {
            if (data.nonElectricBrands[i].name != $("#brand").val() && $("#brand").val() != "all") {
                continue;
            }

            for (var k = 0; k < Math.ceil(data.nonElectricBrands[i].car.length); k++) {
                var car = data.nonElectricBrands[i].car[k];
                if (car != undefined) {
                    if ($("#type").val() != "all" && car.type != $("#type").val()) {
                        continue;
                    }
                    if ($("#fuel").val() != "all" && car.fuelType != $("#fuel").val()) {
                        continue;
                    }
                    if (searchModel && !car.model.toLowerCase().includes(searchModel)) {
                        continue;
                    }

                    $('#carTable').append(`<tr>
                                                <td>${car.id}</td>
                                                <td><img src="../../../src/img/vehicleSales/car/${car.id}/1.jpg" alt="Car Image"></td>
                                                <td>${data.nonElectricBrands[i].name}</td>
                                                <td>${car.model}</td>
                                                <td>${car.type}</td>
                                                <td>${car.fuelType}</td>
                                                <td>$${car.price}</td>
                                                <td><button carid='${car.id}' onclick="localStorage.setItem('sales_view_carId', $(this).attr('carid'));location.href = 'carPage.html';">View</button></td>
                                                </tr>`);
                    carCount++;
                }
            }
        }
        console.log(`Number of cars found: ${carCount}`);
    });
    $('#main_carList').append("</table>");

}
loadDarkMode();
$(document).ready(function () {
    loadDarkMode();
    loadSelectOptions();
    loadCars();


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

    $('#searchModel').on('keyup', function () {
        loadCars();
        loadDarkMode();
    });
});