const inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function () {
    const cityInput = document.getElementById("city-input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=81ce23af551e015bec7be2d9670ba50c`)
        .then(response => response.json())
        .then(data => {
            const weather = document.getElementById("weather");
            const lead = document.getElementById("lead");
            const cityName = document.getElementById("city-name");
            const country = document.getElementById("country");
            const img = document.getElementById("img").src;
            country.innerText = data.sys.country;
            cityName.innerText = data.name;
            const round = Math.round(data.main.temp - 274.15);
            weather.innerText = round;
            lead.innerText = data.weather[0].main;
            const icon = data.weather[0].icon;
            document.getElementById("img").src = `https://openweathermap.org/img/w/${icon}.png`;
        })
        .catch(err => alert("Wrong City Number!"));
})