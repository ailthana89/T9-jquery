/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão

  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

$(document).ready(function(){

    $('#botao').click(function(){
      $('body').css('background', 'black')
      $('h1')
        .css('color', 'white')
        .text('Desligado')
     $('.imagem').attr("src",'https://media.giphy.com/media/xT8qBvH1pAhtfSx52U/giphy.gif')
    })
})
