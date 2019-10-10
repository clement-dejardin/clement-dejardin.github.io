// Get data
endpoint = 'https://clement-dejardin.github.io/data.json'
const data = []
fetch(endpoint)
    .then(blob => blob.json())
    .then(stuff => data.push(...stuff))

// Sorting function
var sortBy = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};

// Search between 2 city
function findMatches(city1, city2, data) {
    return data.filter(place => {
        const regex1 = new RegExp(city1, 'gi')
        const regex2 = new RegExp(city2, 'gi')
        return (place.Departure.match(regex1) || place.Arrival.match(regex1)) &&
            (place.Departure.match(regex2) || place.Arrival.match(regex2))
    })
}

// Dispay the result
function displayMatches() {
    const matchArray = findMatches(searchInputCity1.value, searchInputCity2.value, data)
    // Sort matchArray by price
    matchArray.sort(sortBy('Single_pilot'))
    const html = matchArray.map(place => {
        return `
        <div>
        <p>
        ${place.Departure} ➜ ${place.Arrival} ⏱ ${place.Flight_time}
        </p>
            <div>
                <div>
                    <p>
                    Airline : ${place.Airline}
                    </p>
                    <p>
                    Helicopter : ${place.Helicopter}
                    </p>
                </div>
                <div>
                    <p>
                    Single Pilot :<br>
                    ${place.Single_pilot} ${place.Currency}
                    </p>
                    <p>
                    Double Pilot :<br>
                    ${place.Double_pilot} ${place.Currency}
                    </p>
                </div>
            </div>
        </div>`
    }).join('')
    document.querySelector('.content').innerHTML = html
}

// Run matches when typing in input
const searchInputCity1 = document.querySelector('.city1')
const searchInputCity2 = document.querySelector('.city2')

searchInputCity1.addEventListener('change', displayMatches)
searchInputCity2.addEventListener('change', displayMatches)
searchInputCity1.addEventListener('keyup', displayMatches)
searchInputCity2.addEventListener('keyup', displayMatches)