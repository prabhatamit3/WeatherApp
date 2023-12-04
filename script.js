const apikey='75c13fee0c68d43db8a3560dea2142a1';
const apiurl='https://api.openweathermap.org/data/2.5/weather?q=';
const searchBox=document.querySelector('.search input');
const searchBtn=document.querySelector('.search button');
const weatherIcon=document.querySelector('.weather-icon');
async function checkweather(city){
    const res=await fetch(apiurl+city+`&&appid=${apikey}`)
    var data=await res.json()
    console.log(data)
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.humidity').innerHTML=Math.round(data.main.humidity)+'%';
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°f';
    document.querySelector('.wind').innerHTML=data.wind.speed+' km/hr';
    if(data.weather[0].main=='Clear'){
        weatherIcon.src='images/clear.png'
    }else if(data.weather[0].main=='Cloud'){
        weatherIcon.src='images/clouds.png'
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src='images/rain.png'
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src='images/drizzle.png'
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src='images/mist.png'
    }else if(data.weather[0].main=='Snow'){
        weatherIcon.src='images/snow.png'
    }
}
searchBtn.addEventListener('click',()=>{
    console.log(searchBox.value);
    checkweather(searchBox.value);
});
//checkweather(searchBox.value);