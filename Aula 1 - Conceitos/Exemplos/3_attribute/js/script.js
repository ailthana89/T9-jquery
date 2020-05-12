<<<<<<< HEAD
$(document).ready(function(){

        $('p').html('<span class="cor">Hello</span');

        

})
=======
$(document).ready(function() {

    $('p').html(`Olá é igual a 
    <span class="cor">Hello</span>
    <strong>Darkness</strong>
    `
    );

    $('li').addClass("margin")

    $('li').removeClass("item1")


    $("p").click(function() {
        $(this).toggleClass("destaque")
    })
})
>>>>>>> 6fc8c80860abe25a687c71277522637b9815db01
