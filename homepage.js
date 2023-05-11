function changeMode() {

    let myBody =document.body;

    myBody.classList.toggle('dark-mode')

    let darkLightText = document.getElementById('darkLightMode')

    let spanELements = document.getElementsByTagName('span')

    let aELements = document.getElementsByTagName('a')

    let pELements = document.getElementsByTagName('p')

    let h3ELements = document.getElementsByTagName('h3')

    if(myBody.classList.contains("dark-mode")){

        darkLightText.innerText='Recharge your browsing experience and switch back to light mode'

        document.getElementById('logoToggle').src = "https://i.ibb.co/4FMrMnk/image.png"

        for (var i = 0 ;i < spanELements.length; i++) {

            spanELements[i].classList.add("spanTagElementWhite")

        }

        for (var i = 0 ;i < aELements.length; i++) {

            aELements[i].classList.add("aTagElementWhite")

        }

        for (var i = 0 ;i < pELements.length; i++) {

            pELements[i].classList.add("pTagElementWhite")

        }

        for (var i = 0 ;i < h3ELements.length; i++) {

            h3ELements[i].classList.add("h3TagElementWhite")

        }

    }
    else{

        darkLightText.innerText='Save battery life and reduce blue light emissions with dark mode'

        document.getElementById('logoToggle').src = "https://i.ibb.co/0XjmwRZ/image.png"

        for (var i = 0; i < spanELements.length; i++) {

            spanELements[i].classList.remove("spanTagElementWhite");

        }

        for (var i = 0; i < aELements.length; i++) {

            aELements[i].classList.remove("aTagElementWhite");

        }

        for (var i = 0; i < pELements.length; i++) {

            pELements[i].classList.remove("pTagElementWhite");

        }

        for (var i = 0; i < h3ELements.length; i++) {

            h3ELements[i].classList.remove("h3TagElementWhite");

        }

    }

    let darkIcon = document.getElementById('darkModeButton')

    if(darkIcon.classList.contains('bi-toggle-off')){

        document.getElementById("darkModeButton").classList.add('bi-toggle-on')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-off')

    }
    else{

        document.getElementById("darkModeButton").classList.add('bi-toggle-off')

        document.getElementById("darkModeButton").classList.remove('bi-toggle-on')

    }
}

function loadCoupon(){
    document.getElementById('MyCoupon').style.visibility = 'visible';
    document.getElementById('mainPage').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('MyCoupon').style.visibility = 'hidden';
    document.getElementById('mainPage').style.opacity = '1'
}

let geoLocationDiv
let geoLocationName
let temperatureText
let temperatureIcon
function geolocation(){
    geoLocationDiv = document.getElementById('weatherDiv')
    geoLocationName = document.getElementById('locationName')
    temperatureText = document.getElementById('temperatureSpan')
    temperatureIcon = document.getElementById('temperatureIcon')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getLocation)
    }else{
        geoLocationDiv.style.visibility='hidden'
    }
}

function getLocation(data){
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url,{method: 'GET'})
    .then((res) =>res.json())
    .then((data) => {
        let cityName = data.city.name
        let country = data.city.country
        let temperature = data.list[0].temp.day
        let temperatureFeelsLike = data.list[0].feels_like.day
        let tempDesc = data.list[0].weather[0].description
        let id = data.list[0].weather[0].id
        geoLocationName.innerText = `${cityName}, ${country}`
        temperatureText.innerText = `${tempDesc}, \u00A0 ${Math.round(temperature)} °C, \u00A0 feels like: ${Math.round(temperatureFeelsLike)} °C`
        if(id==800){
            temperatureIcon.src='https://openweathermap.org/img/wn/01d@2x.png'
        }
        if(id==801){
            temperatureIcon.src='https://openweathermap.org/img/wn/02d@2x.png'
        }
        if(id==802){
            temperatureIcon.src='https://openweathermap.org/img/wn/03d@2x.png'
        }
        if(id==803 || id==804){
            temperatureIcon.src='https://openweathermap.org/img/wn/04d@2x.png'
        }
        if((id>=300 && id<400) || (id>=520 && id<532)){
            temperatureIcon.src='https://openweathermap.org/img/wn/09d@2x.png'
        }
        if(id>=500 && id<505){
            temperatureIcon.src='https://openweathermap.org/img/wn/10d@2x.png'
        }
        if(id>=200 && id<300){
            temperatureIcon.src='https://openweathermap.org/img/wn/11d@2x.png'
        }
        if((id>=600 && id<700) || id==511){
            temperatureIcon.src='https://openweathermap.org/img/wn/13d@2x.png'
        }
        if(id>=700 && id<800){
            temperatureIcon.src='https://openweathermap.org/img/wn/50d@2x.png'
        }
    })
}

