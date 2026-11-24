// Set key date info
var currentYear = new Date().getFullYear();
var dayAfter = new Date(currentYear, 10, 1, 0,0,0).getTime();
var newYearsEve = new Date(currentYear, 11, 31, 23, 59, 59).getTime();
// Set the date we're counting down to
var countDownDate = new Date("Oct 31, 2023 00:00:00").getTime();
// Update the countdown every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  // update countDownDate(year) if now is after date but before end of year
  if (now >= dayAfter && now <= newYearsEve) {
    var countDownDate = new Date(currentYear + 1, 11, 31, 0, 0, 0).getTime()
  };
  // Find the distance between now and the countdown date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
 document.getElementById("count").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "IT'S HALLOWEEN!!!";
  }
}, 1000);
