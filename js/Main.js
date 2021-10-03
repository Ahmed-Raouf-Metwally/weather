"use strict";
let searchBar = document.getElementById("searchBar");
let buttonSearch = document.getElementById("button-search");
let today = document.getElementById("today");
let todayDate = document.getElementById("todayDate");
let country = document.getElementById("country");
let Deg = document.getElementById("Deg");
let icn1 = document.getElementById("icn1");
let details = document.getElementById("details");
let icn2 = document.getElementById("icn2");
let icn3 = document.getElementById("icn3");
let icn4 = document.getElementById("icn4");

let icn_tomorrow = document.getElementById("icn_tomorrow");
let icn_after_tomorrow = document.getElementById("icn_after_tomorrow");

let max_deg_tomorrow = document.getElementById("max_deg_tomorrow");
let min_deg_tomorrow = document.getElementById("min_deg_tomorrow");

let max_deg_after_tomorrow = document.getElementById("max_deg_after_tomorrow");
let min_deg_after_tomorrow = document.getElementById("min_deg_after_tomorrow");

let d1 = document.getElementById("d1");
let d2_deg_after_tomorrow = document.getElementById("d2");


let weather


async function getWeather() {
    let respns = await fetch("https://api.weatherapi.com/v1/forecast.json?key=791e58b14fcd43d7ba102048211509&q=Cairo&days=3&aqi=no&alerts=no");
    weather = await respns.json();
    console.log(weather);
}

function display1() {
    todayDate.innerHTML = `Today: ` + weather.forecast.forecastday[0].date;
    country.innerHTML = weather.location.name;
    Deg.innerHTML = weather.current.temp_c + ` °C`;
    icn1.setAttribute("src", weather.current.condition.icon);
    details.innerHTML = weather.current.condition.text;
    icn2.innerHTML = weather.current.humidity + ` %`;
    icn3.innerHTML = weather.current.wind_kph + ` K/H`;
    icn4.innerHTML = weather.current.wind_dir;
}
function display2() {
    icn_tomorrow.setAttribute("src", weather.forecast.forecastday[1].day.condition.icon);
    max_deg_tomorrow.innerHTML = weather.forecast.forecastday[1].day.maxtemp_c + ` °C`;
    min_deg_tomorrow.innerHTML = weather.forecast.forecastday[1].day.mintemp_c + ` °C`;
    d1.innerHTML = weather.forecast.forecastday[1].day.condition.text;
}
function display3() {
    icn_after_tomorrow.setAttribute("src", weather.forecast.forecastday[2].day.condition.icon);
    max_deg_after_tomorrow.innerHTML = weather.forecast.forecastday[2].day.maxtemp_c + ` °C`;
    min_deg_after_tomorrow.innerHTML = weather.forecast.forecastday[2].day.mintemp_c + ` °C`;
    d2.innerHTML = weather.forecast.forecastday[2].day.condition.text;
}

async function callAll() {
    if (searchBar.value == "") {
        await getWeather();
        display1();
        display2();
        display3();

    }
    else {
        let respns = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=791e58b14fcd43d7ba102048211509&q=${searchBar.value}&days=3&aqi=no&alerts=no`);
        weather = await respns.json();
        display1();
        display2();
        display3();
    }
}
async function search() {

}
addEventListener("keyup", callAll)

callAll();