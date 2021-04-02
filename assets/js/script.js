//create variable to get ID of currentDay
//
$(document).ready(function(){
    const currentDate = $("#currentDay");
    console.log(dayjs().$d);

    currentDate.text(dayjs().$d);

    

});

