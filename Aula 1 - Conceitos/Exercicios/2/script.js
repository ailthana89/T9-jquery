/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão

  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

<<<<<<< HEAD
$(document).ready(function(){

    $('#botao').click(function(){
      $('body').css('background', 'black')
      $('h1')
        .css('color', 'white')
        .text('Desligado')
     $('.imagem').attr("src",'https://media.giphy.com/media/xT8qBvH1pAhtfSx52U/giphy.gif')
    })
})
=======
//jquery

$(document).ready(function() {

  const bodyColor = $('body')
  bodyColor.css('background', 'yellow')

  function changeBg() {
    if(bodyColor[0].style.background == 'yellow') {
      $('body').css('background', 'black');
      $('h1')
        .css('color', 'white')
        .text('Desligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/N4a7e1ftdbQWc/giphy.gif" )
    } else {
      $('body').css('background', 'yellow');
      $('h1')
        .css('color', 'black')
        .text('Ligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif" )

    }
  }

$('#botao').click(function() {
    changeBg()
})

//ou

$('#botao').click(changeBg)

})
>>>>>>> 6fc8c80860abe25a687c71277522637b9815db01
