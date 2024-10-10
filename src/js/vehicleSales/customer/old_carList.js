$(document).ready(function () {
    $.getJSON("../../../src/json/vehicle/carList.json", function (data) {
        console.log("JSON loaded");
        console.log(data.electricBrands.length);
        console.log(data.nonElectricBrands.length);

        for (var i = 0; i < (data.electricBrands.length+data.nonElectricBrands.length); i++) {
            $("#productList").append("<div class=\"row mt-2\">\n" +
                "                <div class=\"col-md-3\">\n" +
                "                    <div class=\"card\">\n" +
                "                        <img src=\"../../../src/img/vehicleSales/car/test.jpg\" class=\"card-img-top\" alt=\"...\"/>\n" +
                "                        <div class=\"card-body d-flex flex-column align-items-center\">\n" +
                "                            <h5 class=\"card-title text-center\">Product 1</h5>\n" +
                "                            <p class=\"card-text text-center\">Price: $100</p>\n" +
                "                            <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Add to cart</a>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"col-md-3\">\n" +
                "                    <div class=\"card\">\n" +
                "                        <img src=\"../../../src/img/vehicleSales/car/test.jpg\" class=\"card-img-top\" alt=\"...\"/>\n" +
                "                        <div class=\"card-body  d-flex flex-column align-items-center\">\n" +
                "                            <h5 class=\"card-title text-center\">Product 1</h5>\n" +
                "                            <p class=\"card-text text-center\">Price: $100</p>\n" +
                "                            <a href=\"../../html/customer/productPage.html\" class=\"btn btn-primary\">Add to cart</a>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"col-md-3\">\n" +
                "                    <div class=\"card\">\n" +
                "                        <img src=\"../../../src/img/vehicleSales/car/test.jpg\" class=\"card-img-top\" alt=\"...\"/>\n" +
                "                        <div class=\"card-body  d-flex flex-column align-items-center\">\n" +
                "                            <h5 class=\"card-title text-center\">Product 1</h5>\n" +
                "                            <p class=\"card-text text-center\">Price: $100</p>\n" +
                "                            <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Add to cart</a>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"col-md-3\">\n" +
                "                    <div class=\"card\">\n" +
                "                        <img src=\"../../../src/img/vehicleSales/car/test.jpg\" class=\"card-img-top\" alt=\"...\"/>\n" +
                "                        <div class=\"card-body  d-flex flex-column align-items-center\">\n" +
                "                            <h5 class=\"card-title text-center\">Product 1</h5>\n" +
                "                            <p class=\"card-text text-center\">Price: $100</p>\n" +
                "                            <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Add to cart</a>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>")
        }

    });
});