const date = document.getElementById("date");
const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");

const weekDay = ["Sunday","Monday","Tuesday","Wednessday","Thursday","Friday","Saturday"];
const allMonths = ["January","Febuary","March","April","May","Jun","July","Agust","September","October","November","December"]
let today = new Date();
console.log(today)
date.innerHTML = (today.getDate()<10 ? "0" : "") + today.getDate();
days.innerHTML = weekDay[today.getDay()];
months.innerHTML = allMonths[today.getMonth()];
years.innerHTML = today.getFullYear();