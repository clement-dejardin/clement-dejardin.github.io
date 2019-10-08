// Get data
endpoint = 'https://clement-dejardin.github.io/data.json'
const data = []
fetch(endpoint)
.then(blob => blob.json())
.then(stuff => data.push(...stuff))
console.log(data)

function renderHtml(data) {
    for (i = 1; i < data.length; i++) {
        if (data[i].Departure == 'Annecy' || data[i].Arrival == 'Annecy' ) {
            text += "<p> Departure: " + data[i].Departure + "<br> Arrival: " + data[i].Arrival + '<br> Price: ' + data[i].Single_pilot + data[i].Currency + '</p> <hr>'
        }
    }
    content.insertAdjacentHTML('beforeend', text)
}