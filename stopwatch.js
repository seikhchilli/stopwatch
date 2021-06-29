var power = document.getElementById("power");
var timer = document.getElementById("timer");
var resetter = document.getElementById("reset");
var counter = 0;
tmr = false;


//document.getElementById("start").addEventListener("click", function () {
//  /*  document.getElementById("start").id = "pause";*/


//})
setInterval(function display() {
    if (tmr) {
        counter++;

    }
    var seconds = Math.floor((counter/2) % 60);
    var minutes = Math.floor((counter/2) / 60) ;
    var hours = Math.floor((counter/2) / 3600);

    timer.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";


}, 500)

function changer() {
    if (power.innerHTML == "Start" || power.innerHTML =="Resume") {
        power.innerHTML = "Pause";
    }
    else if (power.innerHTML == "Pause") {
        power.innerHTML = "Resume";
        resetter.style.visibility = "visible";
    }
}

function reset() {
    counter = 0;
    tmr = false;
    power.innerHTML = "Start";
    resetter.style.visibility = "hidden";

}



