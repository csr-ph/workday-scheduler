//wrap everything in a function so it only runs when page is fully loaded
$(document).ready(function(){

    //display current date on top of page
    const currentDate = $("#currentDay");
    console.log(dayjs().$d);
    currentDate.text(dayjs().$d);

    //save text entry to local storage
    

    $(".saveBtn").click(function(){
        const timeDescription = $(this).siblings("textarea").val();
        const timeId = $(this).siblings("textarea").attr("id");
        localStorage.setItem(timeId, timeDescription);
    });

    //store current hour and id of textarea
    const currentHour = dayjs().hour();
    
    //set class of time block if currentHour is past, present, or future compared to the time block
    $(".description").each(function() {
        const hourEl = parseInt($(this).attr("id"));
        if (currentHour < hourEl) {
            //add and remove class names if hour is in the future
            $(this).removeClass("present past").addClass("future")
        } else if (currentHour > hourEl) {
            //add and remove class names if hour is in the past
            $(this).removeClass("present future").addClass("past")
        } else {
            //add and remove class names if hour is in the present
            $(this).removeClass("past future").addClass("present")
        }
    });

    //display stored text to page
    console.log(localStorage.getItem(timeId));

    
    
    


});

