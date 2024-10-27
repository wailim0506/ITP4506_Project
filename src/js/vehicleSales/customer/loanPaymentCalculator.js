function setDarkMode() {
    if ($('#darkModeToggle').text() == 'brightness_2') {
        //to dark mode
        $('html, nav,.container').css('background-color', 'rgb(34,37,41)');
        $('body, nav,.container').css('color', 'rgb(194,196,200)');
        $('a').css('color', 'rgba(255,255,255,0.65)');
        $('.car-item,.container,th,td').css('border', '0.1px solid grey');
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
        $('html, nav,.container').css('background-color', 'white');
        $('body, nav,.container').css('color', 'black');
        $('a').css('color', 'rgba(0,0,0,0.65)');
        $('.car-item,.container,th,td').css('border', '1px solid lightgrey');
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
            $('html, nav, .container').css('background-color', 'rgb(34,37,41)');
            $('body, nav, .container').css('color', 'rgb(194,196,200)');
            $('a').css('color', 'rgba(255,255,255,0.65)');
            $('.car-item,.container,th,td').css('border', '0.1px solid grey');
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
            $('html, nav,.container').css('background-color', 'white');
            $('body, nav,.container').css('color', 'black');
            $('a').css('color', 'rgba(0,0,0,0.65)');
            $('.car-item,.container,th,td').css('border', '1px solid lightgrey');
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

function drawPieChart(principalPaid, interestPaid, monthlyPayment) {
    const $canvas = $('#pieChart');
    const ctx = $canvas[0].getContext('2d');
    const total = principalPaid + interestPaid;
    const principalAngle = (principalPaid / total) * 2 * Math.PI;
    const interestAngle = (interestPaid / total) * 2 * Math.PI;

    ctx.clearRect(0, 0, $canvas.width(), $canvas.height());

    ctx.arc(200, 200, 100, 0, principalAngle);
    ctx.fillStyle = 'rgb(67,123,212)';
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 100, principalAngle, principalAngle + interestAngle);
    ctx.fillStyle = 'rgb(149,187,66)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, 2 * Math.PI);
    if (localStorage.getItem('darkMode') == 'Y') {
        ctx.fillStyle = 'rgb(34,37,41)';
    }else{
        ctx.fillStyle = 'white';
    }
    ctx.fill();


    const principalPercentage = Math.round((principalPaid / total) * 100);
    const interestPercentage = Math.round((interestPaid / total) * 100);
    // $('#principalPercentage').text(principalPercentage + '%');
    // $('#interestPercentage').text(interestPercentage + '%');
    $('#principalPercentage').text(principalPaid.toFixed(2));
    $('#interestPercentage').text(interestPaid.toFixed(2));
    $('#totalPayment').text(total.toFixed(2));
    $('#monthlyPayment').text(`Monthly Pay: $${monthlyPayment.toFixed(2)}`);


    if (localStorage.getItem('darkMode') == 'Y') {
        ctx.fillStyle = 'rgb(194,196,200)';
    }else{
        ctx.fillStyle = 'black';
    }
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';


    const principalTextAngle = principalAngle / 2;
    ctx.fillText(principalPercentage + '%', 200 + 150 * Math.cos(principalTextAngle), 200 + 150 * Math.sin(principalTextAngle));


    const interestTextAngle = principalAngle + interestAngle / 2;
    ctx.fillText(interestPercentage + '%', 200 + 150 * Math.cos(interestTextAngle), 200 + 150 * Math.sin(interestTextAngle));
}

function calculate(){
    let totalPrincipalPaid = 0;
    let totalInterestPaid = 0;
    const loanAmount = parseFloat($('#loanAmount').val());
    const interestRate = parseFloat($('#interestRate').val()) / 100 / 12;
    const loanTerm = parseInt($('#loanTerm').val()) * 12;

    const $tableBody = $('#amortizationTable tbody');
    $tableBody.html('');

    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    let remainingBalance = loanAmount;

    for (let i = 1; i <= loanTerm; i++) {
        const interestPayment = remainingBalance * interestRate;
        const principalPayment = monthlyPayment - interestPayment;
        remainingBalance -= principalPayment;

        const row = `
                        <tr>
                            <td>${i}</td>
                            <td>${principalPayment.toFixed(2)}</td>
                            <td>${interestPayment.toFixed(2)}</td>
                            <td>${monthlyPayment.toFixed(2)}</td>
                            <td>${remainingBalance.toFixed(2)}</td>
                        </tr>`;
        totalPrincipalPaid += principalPayment;
        totalInterestPaid += interestPayment;
        $tableBody.append(row);
        loadDarkMode();
    }
    drawPieChart(totalPrincipalPaid, totalInterestPaid, monthlyPayment);
}

loadDarkMode();
$(document).ready(function() {
    loadDarkMode();
    calculate();

    $('#darkModeToggle').click(function () {
        setDarkMode();
        calculate();
    });

    $('#calculateBtn').click(function() {
        if(parseInt($('#loanTerm').val()) > 10){
            alert('Loan term cannot be more than 10 years');
            $('#loanTerm').val('');
            return;
        }

        if(parseInt($('#loanAmount').val()) > 99999999){
            alert('Loan amount cannot be exceed 99999999');
            $('#loanAmount').val('');
            return;
        }

        if(parseInt($('#interestRate').val()) > 100){
            alert('Interest rate cannot be exceed 100');
            $('#interestRate').val('');
            return;
        }

        if ($('#loanAmount').val() != '' && $('#interestRate').val() != '' && $('#loanTerm').val() != '') {
            calculate();
        }else{
            alert('Please fill in all fields');
        }
    });

    $(".container input").on("change paste keyup", function() {
        if(parseInt($('#loanTerm').val()) > 10){
            alert('Loan term cannot be more than 10 years');
            $('#loanTerm').val('');
            return;
        }

        if(parseInt($('#loanAmount').val()) > 99999999){
            alert('Loan amount cannot be exceed 99999999');
            $('#loanAmount').val('');
            return;
        }

        if(parseInt($('#interestRate').val()) > 100){
            alert('Interest rate cannot be exceed 100');
            $('#interestRate').val('');
            return;
        }

        if ($('#loanAmount').val() != '' && $('#interestRate').val() != '' && $('#loanTerm').val() != '') {
            calculate();
        }
    });

    $('#resetBtn').click(function() {
        $('#loanAmount').val('');
        $('#interestRate').val('');
        $('#loanTerm').val('');
        $('#amortizationTable tbody').html('');
    });

    $('#printBtn').click(function() {
        $('nav,button,i').hide();
        $('.container').css({'width': '90%', 'height': '100%', 'margin-top': '100px'});
        $('#pieChartDiv').css({'width': '90%', 'height': '100%', 'margin-top': '100px'});
        $('#main').css('flex-direction', 'column');
        window.print();
        $('nav,button,i').show();
        $('.container').css({'width': '40%', 'height': 'auto', 'margin-top': '20px'});
        $('#pieChartDiv').css({'width': '40%', 'height': 'auto', 'margin-top': '20px'});
        $('#main').css('flex-direction', 'row');
    });


});