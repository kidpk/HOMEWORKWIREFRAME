$(document).ready(function(){
    function hourUpdate (){
        var currentHour =moment().hours();

        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            if (blockHour<currentHour){
                $(this).addClass("past");
            } else if (blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourUpdate();

    var interval = setInterval(hourUpdate,15000);

    $(".saveBtn").on("click",function(){
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time,value);
    })
for (var i=9; i<19;i++){
    $("#hour-"+i+" .description").val(localStorage.getItem("hour-"+i));
}
  $("#currentDay").text(moment().format("dddd, MMMM Do"))
});