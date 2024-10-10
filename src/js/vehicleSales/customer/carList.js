$(document).ready(function() {
    $.getJSON('../../../src/json/vehicleSales/carList.json', function(data) {
        var numberOfElectricBrand = data.electricBrands.length;
        var numberOfNonElectricBrand = data.nonElectricBrands.length;

        for (var i = 0; i < numberOfElectricBrand; i++) {
            $("#main_carList").append("<div class=\"row\">\n" +
                "    <div class=\"brand_name\">\n" +
                "        <p>" + data.electricBrands[i].name + "</p>\n" +
                "    </div>\n" +
                "</div>");
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
});