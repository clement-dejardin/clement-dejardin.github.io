let btn = document.getElementById('btn')
let content = document.getElementById('content')
let text = ""

btn.addEventListener('click', function(){
    var request = new XMLHttpRequest
    request.open('GET', 'https://clement-dejardin.github.io/data.json')
    request.onload = function() {
        var data = JSON.parse(request.responseText)
        renderHtml(data)
    }
    request.send()
})

function renderHtml(data) {
    for (i = 1; i < data.length; i++) {
        if (data[i].Departure == 'Annecy' || data[i].Arrival == 'Annecy' ) {
            text += "<p> Departure: " + data[i].Departure + "<br> Arrival: " + data[i].Arrival + '<br> Price: ' + data[i].Single_pilot + data[i].Currency + '</p> <hr>'
        }
    }
    content.insertAdjacentHTML('beforeend', text)
}