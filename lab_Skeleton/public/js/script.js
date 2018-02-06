// help pop-ups
function helpStart() {
  alert("Every time you go off-task, SoundTrack will alert you at decreasing" +
  " intervals to help you stay productive and focused. To get started, simply" +
  " choose your favorite soundscape and customize the alert for your current task!");
}

function helpListen() {
  alert("In this screen, you can see how productive you are and how much time" +
  " you have left for your breaks. Change your current soundscape by swiping or" +
  " clicking the slider. You can customize alerts in Alert Settings at the bottom.");
}

function helpSettings() {
  alert("In the settings, you can change your alert sound, how much break time " +
    "you want to give yourself, and the volume of the alerts. Be as productive " +
    "as you want!");
}

// countuptimer - fix for productivity later
var productiveTime = document.getElementById('productiveTime');
if(productiveTime != null){
	productiveTime.innerHTML = 00 + ":" + 00;
	startPTimer();
}

function startPTimer() {
  var presentTime = document.getElementById('productiveTime').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(parseInt(timeArray[1]) + 1);
  if(s == 59) { 
    m = m + 1;
  }

document.getElementById('productiveTime').innerHTML =
m + ":" + s;
setTimeout(startPTimer, 1000);
}


// countdown timer - fix for off-task later (pause while on screen)
var timer = document.getElementById('timer');
if(timer != null){
	timer.innerHTML = 03 + ":" + 00;
	startTimer();
}

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s == 59) { 
    m = m - 1
  }
  //if(m<0){alert('timer completed')}

document.getElementById('timer').innerHTML =
m + ":" + s;
setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}





/* RETURN TO THIS LATER FOR CHECKING WHETHER USER IS ON TAB
// check if user is active
var isActive;

window.onfocus = function () { 
  isActive = true; 
}; 

window.onblur = function () { 
  isActive = false; 
}; 

// test
setInterval(function () { 
  console.log(window.isActive ? 'active' : 'inactive'); 
  
  // implement start of timer when user is inactive
  var start = 0;
  var end = 0;

  // alert(start + " " + end);

  if ( !(isActive) ) {
   start = Date.now();
 } 

if ( start > 0 && isActive) {
    end = Date.now();
    var elapsed = (end - start) / 1000; // number of seconds away
    var elapsedMinutes = elapsed / 60;
    var elapsedSeconds = elapsed % 60;  
    alert("Welcome back! You spent " + elapsedMinutes + " minutes and " + elapsedSeconds + " seconds off-task!");
  }

  // alert(start + " " + end);
  
}, 1000);*/







