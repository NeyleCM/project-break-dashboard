        // ---- CLIMA -----

        const containerTime = document.getElementById('container-Time')

        let city = 'Madrid'
        const apiKey = '6eed3220b1cc4ec29ba192021241607'
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`

        const getTime = async () => {
            try {
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch(error) {
         console.log('Este es el error', error)
    }
}

getTime().then(city => {
    const {current, forecast, location} = city
console.log(city)
const dataHour = forecast.forecastday[0].hour
const horaSola = current.hour.time.split(' ')[1]
const hoursData = dataHour.map(hour => {
    return `<div class="time-Hour">${horaSola} <img src=${current.condition.icon} alt="icon"/> ${current.hour.temp_c}°C </div>`;
}).join('');
    containerTime.innerHTML = `<div class="container-city"><h2>${location.name} / ${location.country} </h2> <p>${current.condition.text} </p> 
    <img src=${current.condition.icon} alt="icon" class="iconBig"/> 
    <p>Precipitaciones: ${current.precip_in}% </p>
    <p>Humedad: ${current.humidity}% </p>
    <p>Viento: ${current.wind_kph}Km/h </p>
    <div class="time-Hours">${hoursData}</div>
    `
})


//current.condition.icon / text "Sunny" / wind_kph
//forecast . forecastday .0 . hour
//location . country . name ó region