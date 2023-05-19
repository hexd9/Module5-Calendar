// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var save = $(this).siblings("textarea").val();
    var hours = $(this).parent().attr("id");
    localStorage.setItem(hours, save);
  });

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

var currentDay = $("#currentDay");
currentDay.text(dayjs().format("MMMM DD, YYYY"));

var currentTime = $("#currentTime");
currentTime.text(dayjs().format("[Today at] h:mm A"));

$('#hour-09').children('textarea').val(localStorage.getItem('hour-09'))
$('#hour-10').children('textarea').val(localStorage.getItem('hour-10'))
$('#hour-11').children('textarea').val(localStorage.getItem('hour-11'))
$('#hour-12').children('textarea').val(localStorage.getItem('hour-12'))
$('#hour-13').children('textarea').val(localStorage.getItem('hour-13'))
$('#hour-14').children('textarea').val(localStorage.getItem('hour-14'))
$('#hour-15').children('textarea').val(localStorage.getItem('hour-15'))
$('#hour-16').children('textarea').val(localStorage.getItem('hour-16'))
$('#hour-17').children('textarea').val(localStorage.getItem('hour-17'))


//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
