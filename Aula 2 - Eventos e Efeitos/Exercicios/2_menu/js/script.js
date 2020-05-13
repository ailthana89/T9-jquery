$(document).ready(function() {

    $("#botaoAbrir").click(function() {
       $("#menulateral").show("fast)
    }) 

    $("#botaoFechar").click(function() {
       $("#menulateral").hide("fast"); 
    })

    })
    

//1ª resolução -Bruna

// $(document).ready(function(){
//    $("#botaoAbrir").click(function() {
//        $("#menulateral").css("display", "block");
//        $(".div-botao").css("margin-left", "250px")
//    })
//    $("#botaoFechar").click(function() {
//        $("#menulateral").css("display", "none");
//        $(".div-botao").css("margin-left", "0px")
//    })
// })

//dá pra resolver com hide()/show(), fadein(), fadeOut(), toggle()