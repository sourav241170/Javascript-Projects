const apiKey= "b36b839826e56b9f11dab0f0aa9c3b04";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")


async function checkWeather(city) {
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + " %";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    document.querySelector("#clock").innerHTML = getTimeFromOffset(data.timezone);


    console.log(data);
    

    if (data.weather[0].main== "Clouds"){
        document.querySelector(".weather-icon").src= "images/clouds.png"
    }
    else if(data.weather[0].main== "Clear"){
        document.querySelector(".weather-icon").src= "images/clear.png";
    }
    else if(data.weather[0].main== "Rain"){
        document.querySelector(".weather-icon").src= "images/rain.png";
    }
    else if(data.weather[0].main== "Snow"){
        document.querySelector(".weather-icon").src= "images/snow.png";
    }
    else if(data.weather[0].main== "Drizle"){
        document.querySelector(".weather-icon").src= "images/drizzle.png";
    }
    else if(data.weather[0].main== "Mist"){
        document.querySelector(".weather-icon").src= "images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

function getTimeFromOffset(offsetInSeconds) {
    const now = new Date();

    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);

    const targetDate = new Date(utcMs + offsetInSeconds * 1000);

    return targetDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
