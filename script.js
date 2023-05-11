//show todays date
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));


$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
  });

  function timely() {
    var timeNow = dayjs().hour();
      if (hour < timeNow) {
        $(this).addClass('past');
        setInterval(timely, 10000);
      } else if (hour === timeNow) {
        $(this).addClass('present');
        $(this).removeClass('past');
        $(this).removeClass('future');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
  } 
});

timely();
