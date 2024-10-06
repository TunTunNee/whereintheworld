function country() {
const apiurl = "https://restcountries.com/v3.1/all"
fetch(apiurl)
.then((response) => response.json())
.then((outcome) => {
    let cardsBar = ""
    outcome.map((item) =>{
        cardsBar += 
        `<div class="cards">
            <img src="${item.flags.svg}"width=250px" height="150px">
            <h2 class="countries">
                ${item.name.common}
            </h2>
            <p class="population">
                Population: <span>${item.population}</span>
            </p>
            <p class="region">
                Region: <span>${item.region}</span>
            </p>
            <p class="capital">
                Capital: <span>${item.capital}</span>
            </p>
        </div>`;
    })
document.querySelector(".cardsBar").innerHTML = cardsBar
})
}

window.onload = country()

function regionFilter() {
   const regionFill = document.querySelector(".regionsFilter").value;
    const europeApi = `https://restcountries.com/v3.1/region/${regionFill}`
    fetch(europeApi)
        .then((response) => response.json())
        .then((outcome) => {
            let cardsBar = "";
            outcome.map((item) =>{
                cardsBar += 
                `<div class="cards">
                    <img src="${item.flags.svg}"width=250px" height="150px">
                    <h2 class="countries">
                        ${item.name.common}
                    </h2>
                    <p class="population">
                        Population: <span>${item.population}</span>
                    </p>
                    <p class="region">
                        Region: <span>${item.region}</span>
                    </p>
                    <p class="capital">
                        Capital: <span>${item.capital}</span>
                    </p>
                </div>`;
            })
        
            document.querySelector(".cardsBar").innerHTML = cardsBar
    
        })
    .catch((error)=> console.log(error));
     
    }
    
        document.querySelector(".regionsFilter").addEventListener("change", regionFilter)


function search(e) {
    e.preventDefault();
    const searchResult = document.querySelector(".countrySearch").value
    if(searchResult.length > 2){
        const europeApi = `https://restcountries.com/v3.1/name/${searchResult}`
    fetch(europeApi)
        .then((response) => response.json())
        .then((outcome) => {
            let cardsBar = "";
            outcome.map((item) =>{
                cardsBar += 
                `<div class="cards">
                    <img src="${item.flags.svg}"width=250px" height="150px">
                    <h2 class="countries">
                        ${item.name.common}
                    </h2>
                    <p class="population">
                        Population: <span>${item.population}</span>
                    </p>
                    <p class="region">
                        Region: <span>${item.region}</span>
                    </p>
                    <p class="capital">
                        Capital: <span>${item.capital}</span>
                    </p>
                </div>`;
            })
        
            document.querySelector(".cardsBar").innerHTML = cardsBar
    
        })
    .catch((error)=> console.log(error));    
    }

    else{
        if (searchResult == "") {
           return country()
        }
            
    }
    
    
}

document.querySelector(".countrySearch").addEventListener("keyup", search)
