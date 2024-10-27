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
        $('th').css({
            'background-color':'#333',
            'color':'white'
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
            $('th').css({
                'background-color':'#333',
                'color':'white'
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
            $('th').css({
                'background-color':'#f2f2f2',
                'color':'inherit'
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
        }
    });
}

function loadQuoteList(){
    var quoteList = localStorage.getItem('quote');
    if (quoteList != null) {
        quoteList = JSON.parse(quoteList);
        $('#refreshBtnDiv p').text(`Total Quote(s): ${quoteList.length}`);
        for (var i = 0; i < quoteList.length; i++) {
            var quote = quoteList[i];
            $('table').append(`<tr quoteId="${quote.quoteId}">
                <td class="quoteIDCell">${quote.quoteId}</td>
                <td class="vehicleCell">
                    <p class="vehicleCell">
                        ${quote.vehicleInQuote.map(vehicle => `<p>${vehicle.vehicleName}</p>`).join('')}
                    </p>
                </td>
                <td>
                    <p class="vehicleCell">
                        ${quote.vehicleInQuote.map(vehicle => `<p>${vehicle.quantity}</p>`).join('')}
                    </p>
                </td>
                <td class="quotePrice">
                    <p>$${quote.totalPrice}</p>
                </td>
                <td class="quoteDate">${quote.quoteDate}</td>
                <td class="quoteStatus">${quote.status}</td>
                <td>
                    <button class="viewBtn">View</button>
                    <button class="delBtn">Delete</button>
                </td>
            </tr>`);
        }

    }
}

loadDarkMode();
setQuoteListToLocalStorage();
$(document).ready(function () {
    loadDarkMode();
    loadQuoteList();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#refreshBtn').click(function(){
        location.reload();
    });

    $('.viewBtn').click(function(){
        localStorage.setItem('quoteToView', $(this).parent().parent().attr('quoteId'));
        window.location.href = '../../../pages/vehicleSales/customer/quotePage.html';
    });

    $('.delBtn').click(function(){
        var quoteId = $(this).parent().parent().attr('quoteId');
        if (confirm(`Are you sure you want to delete this quote (${quoteId})?\nYour action cannot to revert!`)) {
            var quoteList = localStorage.getItem('quote');
            if (quoteList != null) {
                quoteList = JSON.parse(quoteList);
                quoteList = quoteList.filter(quote => quote.quoteId != quoteId);
                localStorage.setItem('quote', JSON.stringify(quoteList));
                alert(`Quote (${quoteId}) deleted successfully!`);
                location.reload();
            }
        }
    });

    $('.quoteList').css('height', window.innerHeight - 200);

});