function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer').css('color', 'rgb(194,196,200)');
        $('a,#subNav').css('color', 'rgba(255,255,255,0.65)');
        $('.statusTitle').css('border-bottom', '1px solid grey');
        $('.quoteBox').css('background-color', '#444');
        $('.quoteBox text').css('color', '#eee');
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
        $('a,footer,#subNav').css('color', 'rgba(0,0,0,0.65)');
        $('.statusTitle').css('border-bottom', '1px solid lightgrey');
        $('.quoteBox').css('background-color', '#f9f9f9');
        $('.quoteBox text').css('color', 'white');
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
            $('a,#subNav').css('color', 'rgba(255,255,255,0.65)');
            $('.statusTitle').css('border-bottom', '1px solid grey');
            $('.quoteBox').css('background-color', '#444');
            $('.quoteBox text').css('color', '#eee');
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
            $('a,footer,#subNav').css('color', 'rgba(0,0,0,0.65)');
            $('.statusTitle').css('border-bottom', '1px solid lightgrey');
            $('.quoteBox').css('background-color', '#f9f9f9');
            $('.quoteBox text').css('color', 'white');
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
function setQuoteListToLocalStorage(){
    $.getJSON('../../../src/json/vehicleSales/customerQuote.json', function(data){
        var quoteList = localStorage.getItem('quote');
        if (quoteList == null) {
            localStorage.setItem('quote', JSON.stringify(data));
            window.location.reload();
        }
    });
} //initial the quote list
function loadQuoteList() {
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);

        // Get filter values
        var filterStatus = $('#filterStatus').val();
        var filterPrice = $('#filterPrice').val();
        var filterQuoteId = $('#filterQuoteId').val().toLowerCase();

        // Filter quotes
        var filteredQuotes = quoteList.filter(function (quote) {
            var matchesStatus = filterStatus === "" || quote.status === filterStatus;
            var matchesPrice = filterPrice === "" || (
                filterPrice === "0-10000" && quote.totalPrice <= 10000 ||
                filterPrice === "10001-20000" && quote.totalPrice > 10000 && quote.totalPrice <= 20000 ||
                filterPrice === "20001-30000" && quote.totalPrice > 20000 && quote.totalPrice <= 30000 ||
                filterPrice === "30001-40000" && quote.totalPrice > 30000 && quote.totalPrice <= 40000 ||
                filterPrice === "40001-50000" && quote.totalPrice > 40000 && quote.totalPrice <= 50000 ||
                filterPrice === "50001" && quote.totalPrice > 50000
            );
            var matchesQuoteId = filterQuoteId === "" || quote.quoteId.toLowerCase().includes(filterQuoteId);

            return matchesStatus && matchesPrice && matchesQuoteId;
        });

        // Append filtered quotes
        $('#pendingQuotes').html('');
        $('#confirmedQuotes').html('');
        $('#deliveredQuotes').html('');
        for (var i = 0; i < filteredQuotes.length; i++) {
            var quote = filteredQuotes[i];
            if (quote.status === 'Pending') {
                $('#pendingQuotes').append(`<div class="quoteBox">
                    <div class="quoteBoxLeft1">
                        <strong>QuoteID:</strong> ${quote.quoteId}
                    </div>
                    <div class="quoteBoxLeft2">
                        <strong>Quote Date:</strong> ${quote.quoteDate} <br>
                    </div>
                    <div class="quoteBoxCenter">
                        <strong>Vehicle:</strong> ${quote.vehicleInQuote.map(vehicle => `${vehicle.vehicleName}`).join('')}
                    </div>
                    <div class="quoteBoxRight2">
                        <strong>Price:</strong> ${quote.totalPrice}
                    </div>
                    <div class="quoteBoxRight1">
                        <button quoteId="${quote.quoteId}">View</button>
                    </div>
                </div>`);
            } else if (quote.status === 'Confirmed') {
                $('#confirmedQuotes').append(`<div class="quoteBox">
                    <div class="quoteBoxLeft1">
                        <strong>QuoteID:</strong> ${quote.quoteId}
                    </div>
                    <div class="quoteBoxLeft2">
                        <strong>Quote Date:</strong> ${quote.quoteDate} <br>
                    </div>
                    <div class="quoteBoxCenter">
                        <strong>Vehicle:</strong> ${quote.vehicleInQuote.map(vehicle => `${vehicle.vehicleName}`).join('')}
                    </div>
                    <div class="quoteBoxRight2">
                        <strong>Price:</strong> ${quote.totalPrice}
                    </div>
                    <div class="quoteBoxRight1">
                        <button quoteId="${quote.quoteId}">View</button>
                    </div>
                </div>`);
            } else if (quote.status === 'Delivered') {
                $('#deliveredQuotes').append(`<div class="quoteBox">
                    <div class="quoteBoxLeft1">
                        <strong>QuoteID:</strong> ${quote.quoteId}
                    </div>
                    <div class="quoteBoxLeft2">
                        <strong>Quote Date:</strong> ${quote.quoteDate} <br>                        
                    </div>
                    <div class="quoteBoxCenter">
                        <strong>Vehicle:</strong> ${quote.vehicleInQuote.map(vehicle => `${vehicle.vehicleName}`).join('')}
                    </div>
                    <div class="quoteBoxRight2">
                        <strong>Price:</strong> ${quote.totalPrice}
                    </div>
                    <div class="quoteBoxRight1">
                        <button quoteId="${quote.quoteId}">View</button>
                    </div>
                </div>`);
            }
            $('.quoteBoxRight1 button').click(function () {
                localStorage.setItem('sales_quoteToView', $(this).attr('quoteId'));
                window.location.href = '../../../pages/vehicleSales/sales/quotePage.html';
            });
        }
    }
}

let pendingOpen = true;
let confirmedOpen = true;
let deliveredOpen = true;
setQuoteListToLocalStorage();
$(document).ready(function () {
    loadDarkMode();
    loadQuoteList();
    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#pendingTitle').click(function () {
        if (pendingOpen) {
            $('#pendingQuotes').slideUp();
            $('#pendingTitle i').text('keyboard_arrow_down');
            pendingOpen = false;
        } else {
            $('#pendingQuotes').slideDown();
            $('#pendingTitle i').text('keyboard_arrow_up');
            pendingOpen = true;
        }
    });

    $('#confirmedTitle').click(function () {
        if (confirmedOpen) {
            $('#confirmedQuotes').slideUp();
            $('#confirmedTitle i').text('keyboard_arrow_down');
            confirmedOpen = false;
        } else {
            $('#confirmedQuotes').slideDown();
            $('#confirmedTitle i').text('keyboard_arrow_up');
            confirmedOpen = true;
        }
    });

    $('#deliveredTitle').click(function () {
        if (deliveredOpen) {
            $('#deliveredQuotes').slideUp();
            $('#deliveredTitle i').text('keyboard_arrow_down');
            deliveredOpen = false;
        } else {
            $('#deliveredQuotes').slideDown();
            $('#deliveredTitle i').text('keyboard_arrow_up');
            deliveredOpen = true;
        }
    });

    $('#filterStatus, #filterPrice, #filterQuoteId').on('change keyup', function() {
        loadQuoteList();
    });

    $('#refreshBtn,#resetFilterBtn').click(function(){
        location.reload();
    });
});