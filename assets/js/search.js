fetch(`https://disease.sh/v3/covid-19/countries`)
.then(response => response.json())
.then((data) => {
    var select = document.getElementById("search");

    let firstOptionn = "";
    let option = "";

    data.forEach(info => {

        const Country_Name = info.country
        const Country_Info = info.countryInfo;
        const Country_Code = Country_Info.iso2;

        firstOptionn = `<option value="">Select Your Country</option>`;
        option += ` <option value="${Country_Code}">${Country_Name}</option>`;
    });
    select.innerHTML = firstOptionn + option;
})






// TODAY
function getTodayCases(todayCases) {
    // Nine Zeroes for Billions
    return Math.abs(Number(todayCases)) >= 1.0e+9

    ? (Math.abs(Number(todayCases)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(todayCases)) >= 1.0e+6

    ? (Math.abs(Number(todayCases)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(todayCases)) >= 1.0e+3

    ? (Math.abs(Number(todayCases)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(todayCases));
}
function getTodayRecovered(todayRecover) {
    // Nine Zeroes for Billions
    return Math.abs(Number(todayRecover)) >= 1.0e+9

    ? (Math.abs(Number(todayRecover)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(todayRecover)) >= 1.0e+6

    ? (Math.abs(Number(todayRecover)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(todayRecover)) >= 1.0e+3

    ? (Math.abs(Number(todayRecover)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(todayRecover));
}

function getTodayDeath(todayDeath) {
    // Nine Zeroes for Billions
    return Math.abs(Number(todayDeath)) >= 1.0e+9

    ? (Math.abs(Number(todayDeath)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(todayDeath)) >= 1.0e+6

    ? (Math.abs(Number(todayDeath)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(todayDeath)) >= 1.0e+3

    ? (Math.abs(Number(todayDeath)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(todayDeath));
}




// TOTAL
function getTotalCases(totalCases) {
    // Nine Zeroes for Billions
    return Math.abs(Number(totalCases)) >= 1.0e+9

    ? (Math.abs(Number(totalCases)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(totalCases)) >= 1.0e+6

    ? (Math.abs(Number(totalCases)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(totalCases)) >= 1.0e+3

    ? (Math.abs(Number(totalCases)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(totalCases));
}
function getTotalRecovered(totalRecover) {
    // Nine Zeroes for Billions
    return Math.abs(Number(totalRecover)) >= 1.0e+9

    ? (Math.abs(Number(totalRecover)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(totalRecover)) >= 1.0e+6

    ? (Math.abs(Number(totalRecover)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(totalRecover)) >= 1.0e+3

    ? (Math.abs(Number(totalRecover)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(totalRecover));
}

function getTotalDeath(totalDeath) {
    // Nine Zeroes for Billions
    return Math.abs(Number(totalDeath)) >= 1.0e+9

    ? (Math.abs(Number(totalDeath)) / 1.0e+9).toFixed(2) + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(totalDeath)) >= 1.0e+6

    ? (Math.abs(Number(totalDeath)) / 1.0e+6).toFixed(2) + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(totalDeath)) >= 1.0e+3

    ? (Math.abs(Number(totalDeath)) / 1.0e+3).toFixed(2) + "K"

    : Math.abs(Number(totalDeath));
}




var form = document.getElementById("form");
form.addEventListener("change",searchResult)

function searchResult(e){
    e.preventDefault();

    var searchValue = document.getElementById("search").value;

    fetch(`https://disease.sh/v3/covid-19/countries/${searchValue}`)
    .then(res => res.json())
    .then(data => {

        const Country = data.countryInfo;
        const Country__Flag = Country.flag;
        const Country__Name = data.country;
        
        // TODAY
        const Today__Cases = data.todayCases;
        const Today__Recovered = data.todayRecovered;
        const Today__Deaths = data.todayDeaths;
        
        
        // TOTAL
        const Total__Cases = data.cases;
        const Total__Recovered = data.recovered;
        const Total__Deaths = data.deaths;

        let output = `
        <div class="country__details">
            <div class="country__flag">
                <img src="${Country__Flag}" alt="" />
                <div class="country__name">${Country__Name}</div>
            </div>
            <div class="country">Country</div>
        </div>
        <div class="info__box_1 flex">
            <div class="case__box">
                <div class="info__title">Coronavirus Cases</div>
                <div class="today__case">${getTotalCases(Total__Cases)}</div>
                <div class="total__case">${getTodayCases(Today__Cases)} Today</div>
            </div>
            <div class="recover__box">
                <div class="info__title">Recovered</div>
                <div class="today__recover">${getTotalRecovered(Total__Recovered)}</div>
                <div class="total__recover">${getTodayRecovered(Today__Recovered)} Today</div>
            </div>
            <div class="death__box">
                <div class="info__title">Deaths</div>
                <div class="today__death">${getTotalDeath(Total__Deaths)}</div>
                <div class="total__death">${getTodayDeath(Today__Deaths)} Today</div>
            </div>
        </div>
        `;

        document.getElementById("output").innerHTML = output;
    });
}
