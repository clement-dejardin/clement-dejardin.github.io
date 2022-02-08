// Time together
var bday = new Date("Jul 10, 2020").getTime();

var bnow = new Date().getTime();
var tillbday = bnow - bday;
var tdays = Math.floor(tillbday / (1000 * 60 * 60 * 24));
var byear = Math.floor(tdays / 360)
tdays = tdays % 360
var bmonths = Math.floor(tdays / 30.66)
tdays = Math.floor(tdays % 30)
document.getElementById("together").innerHTML = byear + " an - " + bmonths + " mois - " + tdays + " jours";


// Time to next rendez-vous
var nextrdv = new Date("Feb 20, 2022 18:00:00").getTime();
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