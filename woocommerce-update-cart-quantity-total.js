//place in your theme js file
$('body').on('click','table.cart .quantity',function(){
        var itemQtyInitial;

        jQuery('.woocommerce table.cart tr.cart_item .product-quantity').hover(function() {
            itemQtyInitial = jQuery('.qty', this).val();
            console.log("inital",itemQtyInitial);
        }, function() {
            var itemQtyExit = jQuery('.qty', this).val();
            console.log("change",itemQtyExit);
            if(itemQtyInitial != itemQtyExit) {
                jQuery(".button[name='update_cart']").trigger("click");
            }
        });
    });
