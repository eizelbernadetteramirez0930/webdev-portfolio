$(document).ready(function(){
    $("#title").text("Good Morning!")
$("p.intro").css("color","pink")
//$("*").css("background", "pink")
$(".btn2").click(function(){
    $(this).css("background", "violet")
})
$("[href]").css("color", "blue")
$("ul li:first-child").css("color", "black")

$("th").css("background", "violet")

$("tr:even").css("background", "lightblue")

$("tr:odd").css("background", "lightpink")

$("#btn").click(function(){
    $("action-status").text("You clicked the button!")
})
$("#btn").dblclick(function(){
    $("#action-status").text("You double click the button!")
})
$("#btn").mouseenter(function(){
    $("#action-status").text("Your mouse reached the button")
})
$("#btn").mouseleave(function(){
    $("#action-status").text("Your mouse left the button")
})
$("#btn").mousedown(function(){
    $(this).css("background", "white")
})
$("#btn").mouseup(function(){
    $(this).css("background", "violet")
})
$("#name").focus(function(){
    $("#message").text("You select the text input")
    $(this).css("background", "lightyellow")
})
$("#name").blur(function(){
    $("#message").text("You leave the text input")
    $(this).css("background", "white")
})

$("course").change(function(){
    $("#message").text($(this).val())
})
$("#btn2").click(function(){
    $("#table").hide("slow")
})
$("#btn2").dblclick(function(){
    $("#table").show(2000)
})
})