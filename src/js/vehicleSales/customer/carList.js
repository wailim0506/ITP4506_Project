function loadCars() {
    $("#main_carList").html("");
    $.getJSON('../../../src/json/vehicleSales/carList.json', function(data) {
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;

        for (var i = 0; i < numberOfElectricBrand; i++) {
            if(data.electricBrands[i].name != $("#brand").val() && $("#brand").val() != "all"){
                continue;
            }
            $("#main_carList").append("<div class=\"row\">\n" +
                "    <div class=\"brand_name\">\n" +
                "        <p>" + data.electricBrands[i].name + "</p>\n" +
                "    </div>\n" );
            for (var k = 0; k < Math.ceil(data.electricBrands[i].car.length / 4); k++) {
                var carRow = $("<div class=\"car-row\"></div>");
                for (var j = 0; j < 4; j++) {
                    var car = data.electricBrands[i].car[j + k * 4];
                    if (car != undefined) {
                        carRow.append("<div class=\"car-item\">\n" +
                            "    <img src=\"../../../src/img/vehicleSales/car/test.jpg\" alt=\"Car 1\"/>\n" +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button>View Detail</button>\n" +
                            "</div>");
                    }
                }
                $("#main_carList").append(carRow);
            }
        }

        for (var i = 0; i < numberOfNonElectricBrand; i++) {
            if(data.nonElectricBrands[i].name != $("#brand").val() && $("#brand").val() != "all"){
                continue;
            }
            $("#main_carList").append("<div class=\"row\">\n" +
                "    <div class=\"brand_name\">\n" +
                "        <p>" + data.nonElectricBrands[i].name + "</p>\n" +
                "    </div>\n" +
                "</div>");
            for (var k = 0; k < Math.ceil(data.nonElectricBrands[i].car.length / 4); k++) {
                var carRow = $("<div class=\"car-row\"></div>");
                for (var j = 0; j < 4; j++) {
                    var car = data.nonElectricBrands[i].car[j + k * 4];
                    if (car != undefined) {
                        carRow.append("<div class=\"car-item\">\n" +
                            "    <img src=\"../../../src/img/vehicleSales/car/test.jpg\" alt=\"Car 1\"/>\n" +
                            "    <p>Model: " + car.model + "</p>\n" +
                            "    <p>Car Type: " + car.type + " </p>\n" +
                            "    <p>Fuel Type: " + car.fuelType + "</p>\n" +
                            "    <p>Price: $" + car.price + "</p>\n" +
                            "    <button>View Detail</button>\n" +
                            "</div>");
                    }
                }
                $("#main_carList").append(carRow);
            }
        }
    });
}

function setDarkModePreference(){
    if ($('#darkModeToogle').text() == 'brightness_2') {
        //to dark mode
        $('html').css('background-color', 'rgb(34,37,41)');
        $('p, h1, label, i').css('color', 'rgb(194,196,200)');
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
        $('p, h1, label, i').css('color', 'black');
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

function loadDarkModePreference(){
    if (localStorage.getItem('darkMode') != null){
        if (localStorage.getItem('darkMode') == 'Y'){
            $('html').css('background-color', 'rgb(34,37,41)');
            $('p, h1, label, i').css('color', 'rgb(194,196,200)');
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
            $('p, h1, label, i').css('color', 'black');
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

$(document).ready(function() {
    loadDarkModePreference();
    loadCars();

    $('#darkModeToogle').click(function() {
        setDarkModePreference();
    });
    $("#resetFiltersBtn").click(function() {
        $("#filter").val("all");
        $("#brand").val("all");
        $("#fuel").val("all");
        $("#sort").val("price");
    });

    $("#brand").on("change", function() {
        loadCars();
    });
});