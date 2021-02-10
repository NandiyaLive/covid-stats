const active = document.querySelector("#active");
const newCases = document.querySelector("#new-cases");
const totalCases = document.querySelector("#total-cases");
const recovered = document.querySelector("#recovered");
const newDeaths = document.querySelector("#new-deaths");
const totalDeaths = document.querySelector("#total-deaths");
const time = document.querySelector("#time");

document.querySelector(".refresh").addEventListener("click", getLKData)

getLKData()

async function getLKData(){
    const req = await fetch(" https://hpb.health.gov.lk/api/get-current-statistical");
    const stats = await req.json();

    console.log(stats)

    active.innerText = stats.data.local_active_cases;
    newCases.innerText = stats.data.local_new_cases;
    totalCases.innerText = stats.data.local_total_cases;
    recovered.innerText = stats.data.local_recovered;
    newDeaths.innerText = stats.data.local_new_deaths;
    totalDeaths.innerText = stats.data.local_deaths;
    time.innerText = stats.data.update_date_time;
};