function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav').css('background-color', 'rgb(34,37,41)');
        $('body, nav').css('color', 'rgb(194,196,200)');
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
        $('html, nav').css('background-color', 'white');
        $('body, nav').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
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
            $('html, nav').css('background-color', 'rgb(34,37,41)');
            $('body, nav').css('color', 'rgb(194,196,200)');
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
            $('html, nav').css('background-color', 'white');
            $('body, nav').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
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
}

loadDarkMode();
$(document).ready(function () {
    loadDarkMode();
    loadQuote();

    $('#darkModeToggle').click(function () {
        setDarkMode();
    });

    $('#printBtn').click(function () {
        $(this).hide();
        $('nav,i,#goBackLinkDiv,#buttonDiv').hide();
        $('#vehicleSection img').css('width', '150px');
        window.print();
        $('nav,i,#goBackLinkDiv,#buttonDiv').show();
        $(this).show();
        $('#vehicleSection img').css('width', '200px');
    });
});