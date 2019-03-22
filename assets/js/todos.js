
$("span").on("click",function(){
    $(this).parent().remove();
});

$("input[type='text']").on("keypress",function(event){
    if(event.keyCode===13){
        var val=$(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>"+val+"</li>");
        $(this).val("");
    }
});

$("li").on("click",function(){
    $(this).toggleClass("completed");
})