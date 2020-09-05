// Time to next rendez-vous
var nextrdv = new Date("Sept 11, 2020 18:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var tonextrdv = nextrdv - now;
    var days = Math.floor(tonextrdv / (1000 * 60 * 60 * 24));
    if (days < 10) {
        days = '0' + days
    }
    var hours = Math.floor((tonextrdv % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
        hours = '0' + hours
    }
    var minutes = Math.floor((tonextrdv % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    var seconds = Math.floor((tonextrdv % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    document.getElementById("nextrdv").innerHTML = days + " jours - " + hours + " : " +
        minutes + " : " + seconds;
    if (tonextrdv < 0) {
        clearInterval(x);
        document.getElementById("nextrdv").innerHTML = "I Love You";
    }

}, 1000);

// Time together
var bday = new Date("07/10/20").getTime();
var z = setInterval(function () {
    var bnow = new Date().getTime();
    var tillbday = bnow - bday;
    var bdays = Math.floor(tillbday / (1000 * 60 * 60 * 24));
    if (bdays < 10) {
        bdays = '0' + bdays
    }
    document.getElementById("together").innerHTML = bdays + " jours"
}, 1000);