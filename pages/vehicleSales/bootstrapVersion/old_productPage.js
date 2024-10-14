var collapse1_opened = true;
var collapse2_opened = false;
var collapse3_opened = false;

function layout_adjust(){
    if ($(window).width() < 768) {
        $('.collapse_row').removeClass('pe-5');
        $('.collapse_row').removeClass('ps-5');
        $('#add_cart_btn_div').addClass('mt-1');
        $('#add_cart_btn').removeClass('w-75');
        $('#add_cart_btn').addClass('w-100');
        $('.col-md-7').addClass('mt-3');
        $('#add_favourite_btn').removeClass('me-5');

    }else{
        $('.collapse_row').addClass('pe-5');
        $('.collapse_row').addClass('ps-5');
        $('#add_cart_btn_div').removeClass('mt-1');
        $('#add_cart_btn').removeClass('w-100');
        $('#add_cart_btn').addClass('w-75');
        $('.col-md-7').removeClass('mt-3');
        $('#add_favourite_btn').addClass('me-5');
    }
}

function collapse_clickable(x){
    if (x == 1){
        if (collapse1_opened == true){
            collapse1_opened = false;
            $('#collapse_arrow1').text('keyboard_arrow_up');
        }else{
            collapse1_opened = true;
            $('#collapse_arrow1').text('keyboard_arrow_down');
        }
    }
    if (x == 2){
        if (collapse2_opened == true){
            collapse2_opened = false;
            $('#collapse_arrow2').text('keyboard_arrow_down');
        }else{
            collapse2_opened = true;
            $('#collapse_arrow2').text('keyboard_arrow_up');
        }
    }
    if (x == 3){
        if (collapse3_opened == true){
            collapse3_opened = false;
            $('#collapse_arrow3').text('keyboard_arrow_down');
        }else{
            collapse3_opened = true;
            $('#collapse_arrow3').text('keyboard_arrow_up');
        }
    }
}

function addQty(){    
    var qty = parseInt($('#qtyInput').val());
    if (qty < parseInt($('#remaining_stock').text())){
        qty++;
        $('#qtyInput').val(qty);
    }
}

function minusQty(){
    var qty = parseInt($('#qtyInput').val());
    if (qty > 1){
        qty--;
        $('#qtyInput').val(qty);
    }
}

function addFavourite(){
    var status = $('#add_favourite_btn').text();
    if (status == 'Add to Favourite'){
        $('#add_favourite_btn').text('Remove from Favourite');
        $('#add_favourite_btn').removeClass('btn-success');
        $('#add_favourite_btn').addClass('btn-danger');
    }else{
        $('#add_favourite_btn').text('Add to Favourite');
        $('#add_favourite_btn').removeClass('btn-danger');
        $('#add_favourite_btn').addClass('btn-success');
    }
}


layout_adjust();

$(document).ready(function(){
    $(window).resize(function(){
        layout_adjust();
    });

     $('#collapse1').trigger('click');
    // $('#collapse2').trigger('click');
    // $('#collapse3').trigger('click');

    $('#add_btn').click(function(){
        addQty();
    });

    $('#minus_btn').click(function(){
        minusQty();
    });

    $('#add_favourite_btn').click(function(){
        addFavourite();
    });
});