$(document).ready(function () {
  // Event listener
  $(".saveBtn").on("click", function () {
    var save = $(this).siblings("textarea").val();
    var hours = $(this).parent().attr("id");
    localStorage.setItem(hours, save);
  });
  // time-block
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
    var currentTime = dayjs().format("HH");
    if (currentTime < timeBlock) {
      $(this).addClass("future");
    } else if (currentTime > timeBlock) {
      $(this).addClass("past");
    } else {
      $(this).addClass("present");
    }
  });
});
// Current day and time
var currentDay = $("#currentDay");
currentDay.text(dayjs().format("MMMM DD, YYYY"));

var currentTime = $("#currentTime");
currentTime.text(dayjs().format("[Today at] h:mm A"));


// Locale storage
$("#hour-09").children("textarea").val(localStorage.getItem("hour-09"));
$("#hour-10").children("textarea").val(localStorage.getItem("hour-10"));
$("#hour-11").children("textarea").val(localStorage.getItem("hour-11"));
$("#hour-12").children("textarea").val(localStorage.getItem("hour-12"));
$("#hour-13").children("textarea").val(localStorage.getItem("hour-13"));
$("#hour-14").children("textarea").val(localStorage.getItem("hour-14"));
$("#hour-15").children("textarea").val(localStorage.getItem("hour-15"));
$("#hour-16").children("textarea").val(localStorage.getItem("hour-16"));
$("#hour-17").children("textarea").val(localStorage.getItem("hour-17"));
