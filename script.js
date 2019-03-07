$(".calc").click(function(){
    var sneakers=parseInt($(".kicks").val());
    var math=sneakers*132;
    var name=$(".nombre").val();
    var kicks=$(".brand").val();
    $("p").text(" if "+ name +" buys "+ sneakers + kicks +" a month,he or she will have "+ math +"by the year 2030 ");
    console.log(sneakers,math);
    
    
    
    });