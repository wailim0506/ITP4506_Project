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
                    // $('#carType').text(car.type);
                    // $('#carFuel').text(car.fuelType);
                    // $('#carPrice').text(car.price);
                    // $('#carImage').attr('src', '../../../src/img/vehicleSales/car/' + car.image);
                    // break;
                    console.log(car.model);
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
        $('.infoBox .title').css('color','white');
        $('.section').css('border-bottom', '1px solid #4c4c4c');
        $('.car-item').css('border', '0.1px solid grey');
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
        $('.infoBox .title').css('color','black');
        $('.section').css('border-bottom', '1px solid #d1cece');
        $('.car-item').css('border', '1px solid lightgrey');
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
            $('.car-item').css('border', '0.1px solid grey');
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
            $('.car-item').css('border', '1px solid lightgrey');
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

$(document).ready(function () {
    loadDarkMode();
    loadCar();
    $('#darkModeToggle').click(function () {
        setDarkMode();
    });
});