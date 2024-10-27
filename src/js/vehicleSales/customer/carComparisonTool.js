function applyMode(isDarkMode) {
    if (isDarkMode) {
        $('html, nav,.modal-content').css('background-color', 'rgb(34,37,41)');
        $('body, nav,.modal-content').css('color', 'rgb(194,196,200)');
        $('.modal-content').css('border', '1px solid grey');
        $('a').css('color', 'rgba(255,255,255,0.65)');

        $('.infoRow').css('border-bottom', '0.1px solid grey');
        if ($('.addCarBtn').length == 4) {
            $('.carBox').css('border', '0');
        } else {
            $('.carBox').css('border-right', '0.1px solid grey');
        }
        $('#lastBox').css('border', 0)
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('.P').css({'color': 'white', 'font-weight': 'bold'});
        $('#darkModeToggle').text('wb_sunny');
    } else {
        $('html, nav,.modal-content').css('background-color', 'white');
        $('body, nav,.modal-content').css('color', 'black');
        $('.modal-content').css('border', '1px solid #888');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('.infoRow').css('border-bottom', '1px solid lightgrey');
        if ($('.addCarBtn').length == 4) {
            $('.carBox').css('border', '0');
        } else {
            $('.carBox').css('border-right', '0.1px solid lightgrey');
        }
        $('#lastBox').css('border', 0)
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
        $('.P').css('color', 'black');
        $('#darkModeToggle').text('brightness_2');
    }
}

function setDarkMode() {
    const isDarkMode = $('#darkModeToggle').text() == 'brightness_2';
    applyMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'Y' : 'N');
}

function loadDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'Y';
    applyMode(isDarkMode);
}

function loadCarSelection() {
    $.getJSON("../../../../src/json/vehicleSales/carList.json", function (data) {
        console.log("JSON loaded");
        $('select').html('');
        $('select').append('<option value="0">Select a car</option>');
        for (var i = 0; i < data.electricBrands.length; i++) {
            var carList = data.electricBrands[i].car;
            for (var j = 0; j < carList.length; j++) {
                $('select').append(`<option value="${carList[j].id}">${data.electricBrands[i].name} ${carList[j].model} </option>`);
            }
        }

        for (var i = 0; i < data.nonElectricBrands.length; i++) {
            var carList = data.nonElectricBrands[i].car;
            for (var j = 0; j < carList.length; j++) {
                $('select').append(`<option value="${carList[j].id}">${data.nonElectricBrands[i].name} ${carList[j].model} </option>`);
            }
        }
    });
}

function addCar(clickedButton, carId) {
    var box = clickedButton.parent().parent();
    box.html('');
    $.getJSON("../../../../src/json/vehicleSales/carList.json", function (data) {
        var car = null;
        var brand = null;
        var carList = [];

        // Search in electric brands
        for (var i = 0; i < data.electricBrands.length; i++) {
            carList = data.electricBrands[i].car;
            for (var j = 0; j < carList.length; j++) {
                if (carList[j].id == carId) {
                    car = carList[j];
                    brand = data.electricBrands[i].name;
                    break;
                }
            }
            if (car != null) {
                break;
            }
        }

        // Search in non-electric brands if not found in electric brands
        if (car == null) {
            for (var i = 0; i < data.nonElectricBrands.length; i++) {
                carList = data.nonElectricBrands[i].car;
                for (var j = 0; j < carList.length; j++) {
                    if (carList[j].id == carId) {
                        car = carList[j];
                        brand = data.nonElectricBrands[i].name;
                        break;
                    }
                }
                if (car != null) {
                    break;
                }
            }
        }

        if (car != null) {
            box.append("<div class=\"carBox_closeBtn\">\n" +
                "                <i class=\"material-icons\" style=\"cursor: pointer;\">close</i>\n" +
                "            </div>\n" +
                "            <div class=\"carBox_img\">\n" +
                `                <img src=\"../../../../src/img/vehicleSales/car/${carId}/1.jpg\"/>\n` +
                "            </div>\n" +
                "            <h3>GENERAL</h3>\n" +
                `            <div class="carBox_infoRowDiv">\n` +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Brand:</p>\n" +
                `                    <p class=\"P\">${brand}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Model:</p>\n" +
                `                    <p class=\"P\">${car.model}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Type:</p>\n" +
                `                    <p class=\"P\">${car.type}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Year:</p>\n" +
                `                    <p class=\"P\">${car.manufactureYear}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Country of Origin:</p>\n" +
                `                   <p class=\"P\">${car.countryOfOrigin[car.countryOfOrigin.length - 1]}</p>\n` +
                "                </div>\n" +
                "            </div>\n" +
                "            <h3>Price</h3>\n" +
                "            <div class=\"carBox_infoRowDiv\">\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Price: </p>\n" +
                `                    <p class=\"P\">$${car.price}</p>\n` +
                "                </div>\n" +
                "            </div>\n" +
                "            <h3>Specification</h3>\n" +
                "            <div class=\"carBox_infoRowDiv\">\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Fuel Type:</p>\n" +
                `                    <p class=\"P\">${car.fuelType}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Engine Type:</p>\n" +
                `                    <p class=\"P\">${car.engineType}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Transmission:</p>\n" +
                `                    <p class=\"P\">${car.transmission}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Drive Train:</p>\n" +
                `                    <p class=\"P\">${car.driveTrain}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Horse Power:</p>\n" +
                `                    <p class=\"P\">${car.horsepower} Watt</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Max Range:</p>\n" +
                `                    <p class=\"P\">${car.maxRange} KM</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Seating Capacity:</p>\n" +
                `                    <p class=\"P\">${car.seatingCapacity}</p>\n` +
                "                </div>\n" +
                "            </div>\n");


            box.append("<h3>Warranty</h3>\n" +
                "            <div class=\"carBox_infoRowDiv\">\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Basic: </p>\n" +
                `                    <p class='P'>${car.warranty.Basic}</p>\n` +
                "                </div>\n" +
                "                <div class=\"infoRow\">\n" +
                "                    <p class=\"name\">Powertrain: </p>\n" +
                `                    <p class='P'>${car.warranty.Powertrain}</p>\n` +
                "                </div>\n");
            if (car.fuelType != "Electric") {
                box.append(
                    "                <div class=\"infoRow\">\n" +
                    "                    <p class=\"name\">Corrosion: </p>\n" +
                    `                    <p class='P'>${car.warranty.Corrosion}</p>\n` +
                    "                </div>");
            } else {
                box.append(
                    "                <div class=\"infoRow\">\n" +
                    "                    <p class=\"name\">Battery: </p>\n" +
                    `                    <p class='P'>${car.warranty.Battery}</p>\n` +
                    "                </div>");
            }
            if (car.fuelType == "Electric") {
                box.append("<h3>Battery</h3>\n" +
                    "            <div class=\"carBox_infoRowDiv\">\n" +
                    "                <div class=\"infoRow\">\n" +
                    "                    <p class=\"name\">Battery: </p>\n" +
                    `                    <p class=\"P\">${car.batteryCapacity} kWh</p>\n` +
                    "                </div>\n" +
                    "                <div class=\"infoRow\">\n" +
                    "                    <p class=\"name\">Fastest Charging Time: </p>\n" +
                    `                    <p class=\"P\">${Object.values(car.chargingTime).pop()}</p>\n` +
                    "                </div>\n" +
                    "            </div>")
            }
            loadDarkMode();
            $('.carBox_closeBtn i').click(function () {
                var box = $(this).parent().parent();
                box.html('');
                box.append(`<div style="height: 100%;display: flex;flex-direction: column;justify-content: start;align-items: center">
                <button class="addCarBtn">Add a Car</button>
            </div>`);
                attachAddCarBtnHandler();
            });
        }
    });


}

function openModal() {
    var modal = $("#selectCarModal");
    modal.show();

    // Prevent body scroll
    $('body').css({
        'overflow': 'hidden',
        'position': 'fixed',
        'width': '100%',
        'top': `-${window.scrollY}px`
    });

    $(window).off('click').click(function (event) {
        if (event.target == modal[0]) {
            closeModal();
        }
    });
}

function closeModal() {
    var modal = $("#selectCarModal");
    modal.hide();

    // Restore body scroll
    var scrollY = $('body').css('top');
    $('body').css({
        'overflow': '',
        'position': '',
        'top': ''
    });
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

function attachAddCarBtnHandler() {
    $('.addCarBtn').click(function () {
        var clickedBtn = $(this);
        openModal();
        $('#modalAddBtn').off('click').click(function () {
            if ($('select').val() == 0) {
                alert('Please select a car');
                return;
            } else {
                clickAddCarBtn(clickedBtn, $('select').val());
                $('select').val(0);
            }
        });
    });
    loadDarkMode();
}

function clickAddCarBtn(clickedBtn, carId) {
    addCar(clickedBtn, carId);
    closeModal();
}

$(document).ready(function () {
    loadDarkMode();
    loadCarSelection();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    attachAddCarBtnHandler();

    $('.close').click(function () {
        closeModal();
    });

    $('.carBox_closeBtn i').click(function () {
        var box = $(this).parent().parent();
        box.html('');
        box.append(`<div style="height: 100%;display: flex;flex-direction: column;justify-content: start;align-items: center">
                <button class="addCarBtn">Add a Car</button>
            </div>`);
        attachAddCarBtnHandler();
    });
});