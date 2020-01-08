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
function findMatches(city1, city2 ,data) {
    return data.filter(place => {
        const regex1 = new RegExp(city1, 'gi')
        const regex2 = new RegExp(city2, 'gi')
        return place.Departure.match(regex1) && place.Arrival.match(regex2) && place.Pax >= searchInputPax.value && place.Pilot == searchInputPilot.value
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
        <div>
            <h1>${place.Operator}</h1>
            <table class="from-to">
                <tr>
                    <td>
                        <div class="icon-text">
                            <div>
                                🛫
                            </div>
                            <div>
                                <b>From</b> <br>
                                ${place.Departure}
                            </div>
                        </div>
                        <div class="icon-text">
                            <div>
                                🅷
                            </div>
                            <div>
                                <a href="${place.Departure_Coord}" target="_blank">${place.Departure_Helistation}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="icon-text">
                            <div>
                                ⏱
                            </div>
                            <div>
                                <b>Flight Time</b> <br>
                                ${place.Flight_Time}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="icon-text">
                            <div>
                                🛫
                            </div>
                            <div>
                                <b>To</b> <br>
                                ${place.Arrival}
                            </div>
                        </div>
                        <div class="icon-text">
                            <div>
                                🅷
                            </div>
                            <div>
                                <a href="${place.Arrival_Coord}" target="_blank">${place.Arrival_Helistation}
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
    
            <div style="margin: 2em 1em">
                <hr>
            </div>
    
            <div class="info">
                <div class="helicopter-info">
                    <div class="icon-text">
                        <div>
                            🚁
                        </div>
                        <div>
                            <b>Helicopter Type</b> <br>
                            ${place.Helicopter}
                        </div>
                    </div>
                    
                    <div class="icon-text">
                        <div>
                             👨‍✈ 
                        </div>
                        <div>
                            <b>Nbr of Pilot</b> <br>
                            ${place.Pilot}
                        </div>
                    </div>
    
                    <div class="icon-text">
                        <div>
                            👨 
                        </div>
                        <div>
                            <b>Max Nbr of Pax</b> <br>
                            ${place.Pax}
                        </div>
                    </div>
    
                    <div class="icon-text">
                        <div>
                            💼 
                        </div>
                        <div>
                            <b> Max Nbr of Luggages</b> <br>
                            ${place.Luggages}
                        </div>
                    </div>
    
                    <div class="icon-text">
                        <div>
                            🎿 
                        </div>
                        <div>
                            <b>Ski / Snowboard</b> <br>
                            ${place.Skis}
                        </div>
                    </div>
                </div>
    
                <table class="price">
                    <tr>
                        <td><b>Official Price</b></td>
                        <td>${place.Price} ${place.Currency}</td>
                    </tr>
                    <tr>
                        <td><b>LunaJets Discount</b></td>
                        <td>${place.Discount}</td>
                    </tr>
                    <tr>
                        <td><b>LunaJets Price</b></td>
                        <td>${place.Price_Discounted} ${place.Currency}</td>
                    </tr>
                </table>
            </div>
    
        </div>
        <div>
            <img src="${place.Picture}">
            <p>
                📞 <a href="tel:${place.Phone}">${place.Phone}
            </p>
            <p>
                📧 <a href="mailto:${place.Email}">${place.Email}</a>
            </p>
        </div>
    </div>
        `
    }).join('')
    document.querySelector('.content').innerHTML = html
}

// Run matches when typing in input
const searchInputCity1 = document.querySelector('.city1')
const searchInputCity2 = document.querySelector('.city2')
const searchInputPax = document.querySelector('.pax')
const searchInputPilot = document.querySelector('.pilot')

searchInputCity1.addEventListener('change', displayMatches)
searchInputCity2.addEventListener('change', displayMatches)
searchInputPax.addEventListener('change', displayMatches)
searchInputPilot.addEventListener('change', displayMatches)

searchInputCity2.addEventListener('change', displayMatches)
searchInputCity1.addEventListener('keyup', displayMatches)
searchInputPax.addEventListener('keyup', displayMatches)
searchInputPilot.addEventListener('keyup', displayMatches)