var power = document.getElementById("power");
var timer = document.getElementById("timer");
var resetter = document.getElementById("reset");
var counter = 0;
var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hr = document.getElementById("hour");
tmr = false;
const zeroPad = (num, places) => String(num).padStart(places, '0')



setInterval(function display() {
    if (tmr) {
        counter++;

    }
    var seconds = Math.floor((counter/2) % 60);
    var minutes = Math.floor((counter/2) / 60) ;
    var hours = Math.floor((counter / 2) / 3600);
    sec.innerHTML = zeroPad(seconds, 2);
    min.innerHTML = zeroPad(minutes, 2)+ ":";
    hr.innerHTML = zeroPad(hours, 2) + ":";
    


}, 500)

function changer() {
    if (power.innerHTML == "Start" || power.innerHTML =="Resume") {
        power.innerHTML = "Pause";
        resetter.style.visibility = "hidden";
        power.style.justifyContent = "center";
        power.style.backgroundColor = "maroon";
        resetter.style.marginLeft = "-134px";
        resetter.style.marginRight = "0px";

    }

    else if (power.innerHTML == "Pause") {
        power.innerHTML = "Resume";
        power.style.justifyContent = "center";
        resetter.style.visibility = "visible";
        resetter.style.marginRight = "20px";
        resetter.style.marginLeft = "20px";
        power.style.backgroundColor = "mediumpurple";
        

    }
}

function reset() {
    counter = 0;
    tmr = false;
    power.innerHTML = "Start";
    resetter.style.visibility = "hidden";
    power.style.justifyContent = "center";
    resetter.style.marginRight = "0px";
    resetter.style.marginLeft = "-134px";
    power.style.backgroundColor = "mediumpurple";


}



