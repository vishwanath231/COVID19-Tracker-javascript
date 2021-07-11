

//Comparer Function    
function GetSortOrder(prop) {   

    return function(a, b) {  

        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    

function getLiveCases(x) {
     var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


fetch(`https://disease.sh/v3/covid-19/countries`)
.then(res => res.json())
.then(data => {

    let output = '';
    data.sort(GetSortOrder("cases")); //Pass the attribute to be sorted on    
    for (var item in data) {  

        const Country = data[item].country;
        const Live__Cases = data[item].cases ;
            
        output += `
        <div class="country_info">
            <div class="country__names">${Country}</div>
            <div class="country__cases">${getLiveCases(Live__Cases)}</div>
        </div>
        `;    
    }    

    document.querySelector(".table__info").innerHTML = output;
});

    

 