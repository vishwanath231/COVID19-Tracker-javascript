
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







fetch(`https://disease.sh/v3/covid-19/all`)
.then(res => res.json())
.then(data => {

    
    // TODAY
    const Today__Cases = data.todayCases;
    const Today__Recovered = data.todayRecovered;
    const Today__Deaths = data.todayDeaths;
    
    
    // TOTAL
    const Total__Cases = data.cases;
    const Total__Recovered = data.recovered;
    const Total__Deaths = data.deaths;

    document.querySelector(".today__case").innerHTML = getTodayCases(Today__Cases);
    document.querySelector(".today__recover").innerHTML = getTodayRecovered(Today__Recovered);
    document.querySelector(".today__death").innerHTML = getTodayDeath(Today__Deaths);


    document.querySelector(".total__case").innerHTML = getTotalCases(Total__Cases) + " Total";
    document.querySelector(".total__recover").innerHTML = getTotalRecovered(Total__Recovered) + " Total";
    document.querySelector(".total__death").innerHTML = getTotalDeath(Total__Deaths) + " Total";
});
 