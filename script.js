// Get data
endpoint = 'https://clement-dejardin.github.io/data.json'
const data = []
fetch(endpoint)
    .then(blob => blob.json())
    .then(stuff => data.push(...stuff))
console.log(data)

// Search between 2 city
function findMatches(city1, city2, data) {
    return data.filter(place => {
        const regex1 = new RegExp(city1, 'gi')
        const regex2 = new RegExp(city2, 'gi')

        return (place.Departure.match(regex1) || place.Arrival.match(regex1))
        && (place.Departure.match(regex2) || place.Arrival.match(regex2))
    })
}