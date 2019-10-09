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

// Dispay the result

function displayMatches() {
    const matchArray = findMatches(searchInputCity1.value, searchInputCity2 ,data)
    console.log(matchArray)
}

const searchInputCity1 = document.querySelector('.city1')
const searchInputCity2 = document.querySelector('.city2')

// Run matches when typing in input
searchInputCity1.addEventListener('change', displayMatches)
searchInputCity2.addEventListener('change', displayMatches)
searchInputCity1.addEventListener('keyup', displayMatches)
searchInputCity2.addEventListener('keyup', displayMatches)