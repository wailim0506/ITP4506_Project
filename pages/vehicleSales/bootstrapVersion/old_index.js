function toggleVisibility() {
    if (window.innerWidth < 1039){
        $('#left_side').removeClass('col-md-7');
        $('#left_side').addClass('col-md-5');

        $('#right_side').removeClass('col-md-5');
        $('#right_side').addClass('col-md-7');

        $('#left_side_logo').css('height', '130px');
    }else{
        $('#left_side').removeClass('col-md-5');
        $('#left_side').addClass('col-md-7');

        $('#right_side').removeClass('col-md-7');
        $('#right_side').addClass('col-md-5');

        $('#left_side_logo').css('height', '210px');
    }

    if (window.innerWidth < 790) {
        $('#form').removeClass('p-5');
        $('#form').addClass('p-4');
    }else{
        $('#form').removeClass('p-4');
        $('#form').addClass('p-5');
    }

    if (window.innerWidth < 768) {
        $('#left_side').addClass('d-none');

        $('#right_side').removeClass('ps-5');
        $('#right_side').removeClass('pe-5');
        $('#right_side').addClass('ps-3');
        $('#right_side').addClass('pe-3');

        $('#right_side_logo').addClass('d-flex');
        $('#right_side_logo').removeClass('d-none');

        $('#form').css('height','65%');
    } else {
        $('#left_side').removeClass('d-none');

        $('#right_side').removeClass('ps-3');
        $('#right_side').removeClass('pe-3');
        $('#right_side').addClass('ps-5');
        $('#right_side').addClass('pe-5');

        $('#form').css('height','67%');

        $('#right_side_logo').addClass('d-none');
        $('#right_side_logo').removeClass('d-flex');
    }
};
toggleVisibility();

function showWelcome(){
    $('#main').addClass('d-none');
    $('#welcomePage').removeClass('d-none');
    $('#welcomePage').addClass('d-flex');
}

$(document).ready(function() {
    toggleVisibility();
    $('#submit').click(function(e){
        e.preventDefault();
        login();
    });

    $(window).on('resize', function() {
        toggleVisibility();
    });
});
