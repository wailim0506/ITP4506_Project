function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav,.analysis-container').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('td,th').css('border', '1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });
        $('#darkModeToggle').text('wb_sunny');
        $('th').css({
            'background-color':'#333',
            'color':'white'
        });
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html, nav,.analysis-container').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body, nav').css('color', 'black');
        $('a,footer').css('color', 'rgba(0,0,0,0.65)');
        $('td,th').css('border', '1px solid lightgrey');
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
        $('th').css({
            'background-color':'#f2f2f2',
            'color':'inherit'
        });
        $('#darkModeToggle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkMode() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html, nav,.analysis-container').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body, nav,footer').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('td,th').css('border', '1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('#darkModeToggle').text('wb_sunny');
            $('th').css({
                'background-color':'#333',
                'color':'white'
            });
        } else {
            //to light mode
            $('html, nav,.analysis-container').css('background-color', 'white');
            $('footer').css('background-color', '#e8e6e6');
            $('body, nav').css('color', 'black');
            $('a,footer').css('color', 'rgba(0,0,0,0.65)');
            $('td,th').css('border', '1px solid lightgrey');
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
            $('th').css({
                'background-color':'#f2f2f2',
                'color':'inherit'
            });
        }
    }
}

// let vehicleSalesData;
// $.getJSON('../../../src/json/vehicleSales/vehicleSalesData.json', function (data) {
//     vehicleSalesData = data;
// });

function loadSelectOptions() {
    const brandSelect = $('#brand');
    brandSelect.empty(); // Clear previous options

    // Add a default option
    brandSelect.append('<option value="All">All</option>');

    // Populate the brand select with options from vehicleSalesData
    vehicleSalesData.brand.forEach((brand) => {
        brandSelect.append(`<option value="${brand.name}">${brand.name}</option>`);
    });
}

function populateSalesTable() {
    const salesDataBody = $('#salesDataBody');
    salesDataBody.empty(); // Clear previous data

    const selectedBrand = $('#brand').val();
    const selectedCarType = $('#carType').val();
    const selectedFuelType = $('#fuelType').val();
    const search = $('#searchVehicle').val().toLowerCase();

    vehicleSalesData.brand.forEach((brand) => {
        if (selectedBrand === 'All' || brand.name === selectedBrand) {
            brand.models.forEach((model) => {
                if ((selectedCarType === 'All' || model.type === selectedCarType) &&
                    (selectedFuelType === 'All' || model.fuel === selectedFuelType) &&
                    (search === '' || model.name.toLowerCase().includes(search))) {
                    const row = $('<tr></tr>');

                    // Add brand name cell
                    const brandCell = $('<td></td>').text(brand.name);
                    row.append(brandCell);

                    // Add model name cell
                    const modelCell = $('<td></td>').text(model.name);
                    row.append(modelCell);

                    // Add cells for each month
                    model.sales.forEach((sales) => {
                        const cell = $('<td></td>').text(sales);
                        row.append(cell);
                    });

                    salesDataBody.append(row);
                }
            });
        }
    });
}

function sortTable(columnIndex) {
    const table = $('#salesTable');
    const tbody = table.find('tbody').eq(0);
    const rows = tbody.find('tr').toArray();
    const isAscending = tbody.data('sortOrder') === 'asc';

    rows.sort((rowA, rowB) => {
        const cellA = $(rowA).children('td').eq(columnIndex).text().replace(/[^0-9]/g, ''); // Remove non-numeric characters for sorting
        const cellB = $(rowB).children('td').eq(columnIndex).text().replace(/[^0-9]/g, '');
        return isAscending ? cellA - cellB : cellB - cellA; // Sort in ascending or descending order
    });

    // Clear and re-add sorted rows
    rows.forEach(row => tbody.append(row));
    tbody.data('sortOrder', isAscending ? 'desc' : 'asc'); // Toggle sort order

    // Update sort arrow direction
    updateSortArrows(columnIndex);
}

function updateSortArrows(sortedColumnIndex) {
    for (let i = 1; i <= 12; i++) { // Loop through month columns
        const arrow = $(`#arrow-${i}`);
        if (i === sortedColumnIndex) {
            arrow.html($('#salesDataBody').data('sortOrder') === 'asc' ? '&#8593;' : '&#8595;'); // Up or down arrow based on sort order
        } else {
            arrow.html('&#8597;'); // Reset other arrows to neutral
        }
    }
}

$(document).ready(function () {
    loadDarkMode();
    $.getJSON('../../../src/json/vehicleSales/vehicleSalesData.json', function (data) {
        vehicleSalesData = data;
        loadSelectOptions();
        populateSalesTable();
    });

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    // Initialize the table on page load
    $(window).on('load', function () {
        populateSalesTable();
    });

    // Search functionality
    $('#searchVehicle').on('input', function () {
        populateSalesTable();
    });

    $('#brand, #carType, #fuelType').change(function () {
        populateSalesTable();
    });

    $('.filter-bar button').click(function () {
        window.location.reload();
    });

    $('#downloadCSV').click(function () {
        let csv = 'Brand,Model,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec\n';
        $('#salesTable tbody tr').each(function () {
            $(this).find('td').each(function () {
                csv += $(this).text() + ',';
            });
            csv = csv.slice(0, -1); // Remove trailing comma
            csv += '\n';
        });

        const hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'vehicle_sales_data.csv';
        hiddenElement.click();
    });
});










