$("li").click(function(){
    $(this).toggleClass("completed");
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});