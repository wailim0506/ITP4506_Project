function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav,.modal-content').css('background-color', 'rgb(34,37,41)');
        $('footer').css('background-color', '#333');
        $('body, nav,footer,.modal-content').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item').css('border', '0.1px solid grey');
        $('input, select').css({
            'background-color': 'rgb(44,47,51)',
            'border': '0.1px solid grey',
            'color': 'rgb(194,196,200)'
        });

        $('.carRow,#InfoSection,#breakdown_tr').css('border-bottom', '1px solid grey');
        $('#headingRow').css({
            'border-top': '1px solid grey',
            'border-bottom': '1px solid grey'
        })
        // $('th').css({
        //     'background-color':'#333',
        //     'color':'white'
        // });

        $('#darkModeToggle').text('wb_sunny');
        localStorage.setItem('darkMode', 'Y');
    } else {
        //to light mode
        $('html, nav,.modal-content').css('background-color', 'white');
        $('footer').css('background-color', '#e8e6e6');
        $('body, nav,.modal-content').css('color', 'black');
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
        $('.carRow,#InfoSection,#breakdown_tr').css('border-bottom', '1px solid black');
        $('#headingRow').css({
            'border-top': '1px solid black',
            'border-bottom': '1px solid black'
        })
        // $('th').css({
        //     'background-color':'#f2f2f2',
        //     'color':'inherit'
        // });
        $('#darkModeToggle').text('brightness_2');
        localStorage.setItem('darkMode', 'N');
    }
}

function loadDarkMode() {
    if (localStorage.getItem('darkMode') != null) {
        if (localStorage.getItem('darkMode') == 'Y') {
            $('html, nav,.modal-content').css('background-color', 'rgb(34,37,41)');
            $('footer').css('background-color', '#333');
            $('body, nav,footer,.modal-content').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item').css('border', '0.1px solid grey');
            $('input, select').css({
                'background-color': 'rgb(44,47,51)',
                'border': '0.1px solid grey',
                'color': 'rgb(194,196,200)'
            });
            $('.carRow,#InfoSection,#breakdown_tr').css('border-bottom', '1px solid grey');
            $('#headingRow').css({
                'border-top': '1px solid grey',
                'border-bottom': '1px solid grey'
            })
            // $('th').css({
            //     'background-color':'#333',
            //     'color':'white'
            // });
            $('#darkModeToggle').text('wb_sunny');
        } else {
            //to light mode
            $('html, nav,.modal-content').css('background-color', 'white');
            $('footer').css('background-color', '#e8e6e6');
            $('body, nav,.modal-content').css('color', 'black');
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
            $('.carRow,#InfoSection,#breakdown_tr').css('border-bottom', '1px solid black');
            $('#headingRow').css({
                'border-top': '1px solid black',
                'border-bottom': '1px solid black'
            })
            // $('th').css({
            //     'background-color':'#f2f2f2',
            //     'color':'inherit'
            // });
            $('#darkModeToggle').text('brightness_2');
        }
    }
}

function loadQuote() {
    var quoteId = localStorage.getItem('quoteToView');
    $('#quoteTitle h1').text(`Quote #${quoteId}`);
    $('#statusTitle h2').text(`Status: Pending`);
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId == quoteId);
        if (quote != null) {
            for (var i = 0; i < quote.vehicleInQuote.length; i++) {
                $('#vehicleSection table').append(`<tr class="carRow" carid="${quote.vehicleInQuote[i].vehicleId}">
                    <td><img src="../../../src/img/vehicleSales/car/${quote.vehicleInQuote[i].vehicleId}/1.jpg"/></td>
                    <td>${quote.vehicleInQuote[i].vehicleName}</td>
                    <td>${quote.vehicleInQuote[i].exteriorColor}</td>
                    <td>${quote.vehicleInQuote[i].interiorColor}</td>
                    <td>$${(parseInt(quote.vehicleInQuote[i].price) / parseInt(quote.vehicleInQuote[i].quantity))}</td>
                    <td>${quote.vehicleInQuote[i].quantity}</td>
                    <td>$${quote.vehicleInQuote[i].price}</td>
                    <td>
                        <button>View</button>
                    </td>
                </tr>`);
            }
        }
    }
}

function loadQuotePersonalDetail() {
    var quoteId = localStorage.getItem('quoteToView');
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId == quoteId);
        if (quote != null) {
            $('#custName').text(`${quote.personalInformation.firstName} ${quote.personalInformation.lastName}`);
            $('#custEmail').text(`${quote.personalInformation.email}`);
            $('#custPhone').text(`${quote.personalInformation.phone}`);
            $('#custAddress').text(`${quote.personalInformation.address}`);
            $('#custCountry').text(`${quote.personalInformation.country}`);
        }
    }
}

function loadQuotePaymentDetail() {
    var quoteId = localStorage.getItem('quoteToView');
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId == quoteId);
        var box = $("#PaymentInfoSmallBoxDiv");
        if (quote != null) {
            if (quote.paymentInformation.paymentMethod === 'cheque') {
                $('#paymentMethod').text('Cheque');
                // $('#chequeBankName').text(`${quote.paymentInformation.chequeBankName}`);
                box.append(`<div>
                        <h3>Bank Name:</h3>
                        <p>${quote.paymentInformation.chequeBankName}</p>
                        </div>`);
            }
            if (quote.paymentInformation.paymentMethod === 'bankTransfer') {
                $('#paymentMethod').text('Bank Transfer');

                box.append(`<div>
                                <h3>Bank Name:</h3>
                                <p>${quote.paymentInformation.bankName}</p>
                            </div>
                            <div>
                                <h3>Account Holder Name:</h3>
                                <p>${quote.paymentInformation.holderName}</p>
                            </div>
                            <div>
                                <h3>Account Number:</h3>
                                <p>${quote.paymentInformation.accountNumber}</p>
                            </div>
                            <div>
                                <h3>Swift Code:</h3>
                                <p>${quote.paymentInformation.swiftCode}</p>
                            </div>`);
            }

            if (quote.paymentInformation.paymentMethod === 'creditCard') {
                // $('#cardType').text(`${quote.paymentInformation.cardType.toUpperCase()}`);
                let cardNumber = quote.paymentInformation.cardNumber;
                let maskedCardNumber = cardNumber.replace(/(\d{4})\d{8}(\d{4})/, '$1********$2');
                // $('#cardNumber').text(maskedCardNumber);
                $('#paymentMethod').text('Credit Card');
                box.append(`<div>
                                <h3>Card Type:</h3>
                                <p>${quote.paymentInformation.cardType.toUpperCase()}</p>
                            </div>
                            <div>
                                <h3>Card Number:</h3>
                                <p>${maskedCardNumber}</p>
                            </div>`);
            }

        }
    }
}


function loadQuoteTradeInDetail() {
    var quoteId = localStorage.getItem('quoteToView');
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId === quoteId);
        if (quote != null) {
            if (quote.tradeInInformation.tradeIn !== "no") {
                $('#tradeInCar').text(`${quote.tradeInInformation.tradeInMakeModel}`);
                $('#tradeInMY').text(`${quote.tradeInInformation.tradeInYear}`);
                $('#tradeInMileage').text(`${quote.tradeInInformation.tradeInMileage}`);
                // $('#tradeInVin').text(`${quote.tradeInInformation.tradeInVIN}`);

                $('#tradeInOC').text(`${quote.tradeInInformation.tradeInCondition}`);
                $('#tradeInEC').text(`${quote.tradeInInformation.exteriorCondition}`);
                $('#tradeInIC').text(`${quote.tradeInInformation.interiorCondition}`);
                $('#tradeInMC').text(`${quote.tradeInInformation.mechanicalCondition}`);
                $('#tradeInPO').text(`${quote.tradeInInformation.previousOwners}`);
                $('#tradeInSH').text(`${quote.tradeInInformation.serviceHistory}`);
                $('#tradeInAH').text(`${quote.tradeInInformation.accidentHistory}`);
                // $('#tradeInValue').text(`$${quote.tradeInInformation.tradeInPrice}`);
            } else {
                $('#tradeInfo').remove();
            }
        }
    }
}

function loadApplyRegistrationDetail(){
    var quoteId = localStorage.getItem('quoteToView');
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId === quoteId);
        if (quote != null) {
            if (quote.applyRegistrationInformation.applyRegistration !== "no") {

            }else{
                $('#applyInfo').remove();
            }
        }
    }
}

function loadQuotePriceBreakdown() {
    var quoteId = localStorage.getItem('quoteToView');
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        var quote = quoteList.find(quote => quote.quoteId == quoteId);
        if (quote != null) {
            $('#subtotal').text(`$${parseInt(quote.totalPrice)}`);
            if (quote.tradeInInformation.tradeIn != "no") {
                // $('#tradeInValueBreakdown').text(`-$${parseInt(quote.tradeInInformation.tradeInPrice)}`);
                $('#tradeInValueBreakdown').text(`-$10000`);
                $('#totalPrice').text(`$${parseInt(quote.totalPrice) - parseInt(10000) + 5000}`);
            } else {
                $('#tradeInValueBreakdown').text(`-$0`);
                $('#totalPrice').text(`$${parseInt(quote.totalPrice) + 5000}`);
            }
        }
    }
}

loadDarkMode();
$(document).ready(function () {

    loadQuote();
    loadQuotePersonalDetail();
    loadQuotePaymentDetail();
    loadQuoteTradeInDetail();
    loadQuotePriceBreakdown();
    loadApplyRegistrationDetail();
    loadDarkMode();


    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#printBtn').click(function () {
        $(this).hide();
        $('nav,i,#goBackLinkDiv,#buttonDiv').hide();
        $('#vehicleSection img').css('width', '150px');
        $('#CustInfoSmallBoxDiv div, #PaymentInfoSmallBoxDiv div,#TradeInInfoSmallBoxDiv div, #ApplyInfoSmallBoxDiv div').css('width', '30%');
        $('footer').hide();
        $('#insureBtnDiv button').hide();
        window.print();
        $('nav,i,#goBackLinkDiv,#buttonDiv').show();
        $(this).show();
        $('footer').show();
        $('#insureBtnDiv button').show();
        $('#vehicleSection img').css('width', '200px');
        $('#CustInfoSmallBoxDiv div').css('width', '20%');
        $('#PaymentInfoSmallBoxDiv div').css('width', '20%');
        $('#TradeInInfoSmallBoxDiv div, #ApplyInfoSmallBoxDiv div').css('width', '25%');
    });

    $('#vehicleSection table tr button').click(function () {
        localStorage.setItem('carToView', $(this).parent().parent().attr('carid'));
        window.location.href = '../../../pages/vehicleSales/customer/carPage.html';
    });

    $('#buttonDiv button').click(function () {
        var quoteId = localStorage.getItem('quoteToView');
        // if (confirm(`Are you sure you want to delete this quote (${quoteId})?\nYour action cannot to revert!`)) {
        //     var quoteList = localStorage.getItem('quote');
        //     if (quoteList != null) {
        //         quoteList = JSON.parse(quoteList);
        //         quoteList = quoteList.filter(quote => quote.quoteId != quoteId);
        //         localStorage.setItem('quote', JSON.stringify(quoteList));
        //         alert(`Quote (${quoteId}) deleted successfully!`);
        //         window.location.href = '../../../pages/vehicleSales/customer/quotesList.html';
        //     }
        // }

        confirmModal(`Are you sure you want to delete this quote (${quoteId})?\nYour action cannot to revert!`);
        $('#modalYesBtn').attr('quoteId', quoteId);
        $('#modalNoBtn').attr('quoteId', quoteId);
    });

    $('#modalYesBtn').click(function(){
        var quoteId = $(this).attr('quoteId');
        var quoteList = localStorage.getItem('quote');
        if (quoteList != null) {
            quoteList = JSON.parse(quoteList);
            quoteList = quoteList.filter(quote => quote.quoteId != quoteId);
            localStorage.setItem('quote', JSON.stringify(quoteList));
            window.location.href = '../../../pages/vehicleSales/customer/quotesList.html';
        }
    });

    $('#modalNoBtn').click(function(){
        $('#myModal').hide();
        var scrollY = $('body').css('top');
        $('body').css({
            'overflow': '',
            'position': '',
            'top': ''
        });
    });

    $('#insureBtnDiv button').click(function(){
        window.location.href = '../../../pages/insurance/customer/cusMainPage.html';
    });
});