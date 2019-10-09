// Get data
endpoint = 'https://clement-dejardin.github.io/data.json'
const data = []
fetch(endpoint)
    .then(blob => blob.json())
    .then(stuff => data.push(...stuff))
console.log(data)

// Search in data
function findMatches(wordToMatch, data) {
    return data.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi')
        return place.Departure.match(regex) || place.Arrival.match(regex)
    })
}