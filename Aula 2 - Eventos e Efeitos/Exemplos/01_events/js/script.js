$(document).ready(function(){
    $("h2").click(function(){
        //ação de click - muda a cor de fundo 
        $(this).css({
            "background-color":"black",
            "color":"white"
        })
    })
    // ação de duplo click - com interação de um fechamento e retorno em slow
    $("h3").dblclick(function(){
        alert('fui clicado duas vezes')
        $(this).hide("slow");
        $(this).show("slow");
    })
    //ação com mouse dentro da div - abre aviso com a interação
    $("#div").mouseenter(function(){
        alert("Você entrou em um div!")
    })
    //ação com mouse quando se distancia da div
    $("#div").mouseleave(function(){
        alert("Voltaaa!")
    })
    
    $("input").blur(function(){
        $(this).css("background-color", "blue")
    })

    $("input").focus(function(){
        $(this).css("background-color", "red")
    })
})