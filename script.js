let departure
let arrival
function search() {
    departure = document.getElementById('departure').value
    arrival = document.getElementById('arrival').value
    console.log(departure + ' ' + arrival)   
}

var request = new XMLHttpRequest
request.open('GET', '')

request.onload = function() {
    console.log(request.responseText)
}

request.send()