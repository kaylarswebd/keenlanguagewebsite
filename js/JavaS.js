

//BACK TO TOP
mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//WEATHER
! function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'weatherwidget-io-js');

//GREETING
var today = new Date()
var curHr = today.getHours()

if (curHr >= 1 && curHr < 6) {
    document.getElementById("greeting").innerHTML = 'What are you doing up this early?';
} else if (curHr >= 6 && curHr <= 12) {
    document.getElementById("greeting").innerHTML = 'Good Morning and welcome to Keen Landuage Web Design and Development!';
} else if (curHr >= 12 && curHr < 17) {
    document.getElementById("greeting").innerHTML = 'Good Afternoon and welcome to Keen Landuage Web Design and Development!';
} else {
    document.getElementById("greeting").innerHTML = 'Good Evening and welcome to Keen Landuage Web Design and Development!';
}

//TIME AND DATE
var d = new Date();
document.getElementById("timedate").innerHTML = 'Date and time = ' + d;