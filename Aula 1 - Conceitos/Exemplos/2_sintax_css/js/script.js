
$(document).ready(function(){
    $('h1').css('color', '#f66',)
    $('h1').css('font-size', '50px',)
    $('h1').hide() //esconde o elemento
    $('h1').delay('2000') //daley => 2 segundos
    $('h1').delay('2000') //daley => 2 segundos
    $('h1').fadeIn('slow') //
    $('h1').text('Surpresa') //daley


//chamando pela  classe (evento)
$('.item1').click(function() {
    $('body').css('background', 'blue')
});

//objeto
$('li').css({
    color:'red',
    display:'flex',
    padding:'20px',
})

$('item2').css('color', 'yellow')

//o * significa pegar todos os elementos dentro do body
$('*').css('margin-left', '200px') 

})