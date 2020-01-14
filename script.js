// Sorting function
var sortBy = function (property) {
    return function (x, y) {
        return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    };
};

// Input list
const from = document.querySelector('.from')
const to = document.querySelector('.to')
const helicopter = document.querySelector('.helicopter')
const pax = document.querySelector('.pax')
const luggage = document.querySelector('.luggage')
const departureZone = document.querySelector('.departure-zone')
const engine = document.querySelector('.enginge-type')
const sport = document.querySelector('.sport')
const arrivalZone = document.querySelector('.arrival-zone')

// Button
const search = document.querySelector('.search')
const advancedSearch = document.querySelector('.advanced-search')

// Get data
endpoint = 'https://clement-dejardin.github.io/data.json'
const data = []
fetch(endpoint)
    .then(blob => blob.json())
    .then(stuff => data.push(...stuff))

// Search From and To
function seachFromTo(from, to ,data) {
    return data.filter(route => {
        const regex1 = new RegExp(from, 'gi')
        const regex2 = new RegExp(to, 'gi')
        return route.Departure.match(regex1) && route.Arrival.match(regex2)
    })
}

// Dispay the result
function displayMatches() {
    const matchArray = searchFromTo(from.value, to.value, data)
    // Sort matchArray by price
    matchArray.sort(sortBy('Single_Pilot_Official_Price'))
    const html = matchArray.map(route => {
        return `
    <div class="row">
        <div class="main">
            <div>
                <h1>Heli alp</h1>
                <div>
                    <i class="fas fa-fw fa-phone-alt"></i> <i class="fas fa-fw fa-envelope"></i>
                </div>
            </div>
            <div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-helicopter"></i>
                    </div>
                    <div>
                        <p> h130</p>
                    </div>
                </div>
            </div>

            <div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-users"></i>
                    </div>
                    <div>
                        <p> 5</p>
                    </div>
                </div>
                <p class="warning">*Max capacity assuming single pilot operation</p>
            </div>

            <table>
                <tr>
                    <th></th>
                    <th>Official Price</th>
                    <th>Luna Price</th>
                </tr>
                <tr>
                    <td><i class="fas fa-fw fa-user-tie"></i>1 Pilot</td>
                    <td>5 000€</td>
                    <td>4 000€</td>
                </tr>
                <tr>
                    <td><i class="fas fa-fw fa-user-tie"></i>2 Pilots</td>
                    <td>5 000€</td>
                    <td>4 000€</td>
                </tr>
            </table>
        </div>

        <div class="secondary">
            <div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-cogs"></i>
                    </div>
                    <div>
                        <p> Engine </p>
                        <p>Twin</p>
                    </div>
                </div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-hospital-symbol"></i>
                    </div>
                    <div>
                        <p> Departure Zone </p>
                        <p>Prevessins</p>
                    </div>
                </div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-suitcase"></i>
                    </div>
                    <div>
                        <p> Luggage </p>
                        <p>5</p>
                    </div>
                </div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-hospital-symbol"></i>
                    </div>
                    <div>
                        <p> Arrival Zone </p>
                        <p>Airport</p>
                    </div>
                </div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-luggage-cart"></i>
                    </div>
                    <div>
                        <p> Sport Equipment </p>
                        <p>Yes</p>
                    </div>
                </div>
                <div class="icon-text">
                    <div>
                        <i class="fas fa-fw fa-fw fa-stopwatch"></i>
                    </div>
                    <div>
                        <p> Flight Time </p>
                        <p>1h 00</p>
                    </div>
                </div>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper, libero a laoreet
                dignissim, risus sem euismod metus, eu hendrerit erat orci nec lacus.
            </p>
            <div>
                <img src="https://c.eu12.content.force.com/servlet/servlet.FileDownload?file=0151r000006oMiw">
            </div>
        </div>
    </div>
        `
    }).join('')
    document.querySelector('.content').innerHTML = html
}

// Run displayMatches when typing in inpu
