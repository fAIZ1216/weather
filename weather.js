const apiKey = "03fd36b7e5ca92cead017319db79380c"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
const searchBox= document.querySelector(".serch input")
const searchBtn=document.querySelector(".serch button");
const weatherIcon= document.querySelector(".weather-icon")


async function getWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apiKey}`)

    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        let data=await response.json();
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main=="clouds"){
        weatherIcon.src="weather app/img/cloud.png"
    }
    else  if(data.weather[0].main=="snow"){
        weatherIcon.src=".\PRECTICE OF JAV\weather app\img/img/snow.png"
    }
    else  if(data.weather[0].main=="Drizzle"){
        weatherIcon.src=".\PRECTICE OF JAV\weather app\img/img/drizzle.png"
    }
    else  if(data.weather[0].main=="clear"){
        weatherIcon.src=".\PRECTICE OF JAV\weather app\img/img/clear.png"
    }
    else  if(data.weather[0].main=="mist"){
        weatherIcon.src=".\PRECTICE OF JAV\weather app\img/img/mist.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}

    }
    
searchBtn.addEventListener("click", function(){
    getWeather(searchBox.value)
})



// const searchBox= document.querySelector(".serch input");
// const searchBtn= document.querySelector(".serch button");
// const weatherIcon= document.querySelector(".weather-icon")
// async function getWeather(city){
//     const response = await fetch(apiUrl +city+ `&appid=${apiKey}`)
//     let data = await response.json();
//     console.log(data);
//     document.querySelector(".city").innerHTML = data.name;
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
//     document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

//     if(data.weather[0].main=="cloudes"){
//         weatherIcon.src="cloud.png";
//     }
//     else if(data.weather[0].main=="clear"){
//         weatherIcon.src="WEATHER APP/clear.png";
//     }
//     else if(data.weather[0].main=="rain"){
//         weatherIcon.src="WEATHER APP/rain.png";
//     }
//     else if(data.weather[0].main=="Drizzle"){
//         weatherIcon.src="drizzle.png";
//     }
//     else if(data.weather[0].main=="mist"){
//         weatherIcon.src="wist.png";
//     }
// }
// searchBtn.addEventListener("click", function(){
//     getWeather(searchBox.value)
// })
