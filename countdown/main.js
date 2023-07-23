/* Countdown to 1 Jan 2024 const newYears = 1 jan 2024
look into Date Object
look into setInterval
substract newYears - CURRENT DATE
make function that counts months,days,hours,min,secs
add it to the paragraphs */ 



const newYears = new Date ('January 1, 2024')


const now = new Date();





function countdown(){
    const now = new Date();
    let timeUntilNewYears = newYears.getTime() - now.getTime()
    let totalSeconds = timeUntilNewYears / 1000


let days = Math.floor(totalSeconds / 3600 / 24)
let hours = Math.floor(totalSeconds / 3600) % 24
let minutes = Math.floor(totalSeconds / 60) % 60
let seconds = Math.floor(totalSeconds % 60)


    document.getElementById('days').innerHTML =  days.toString().padStart(2, '0')
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0')
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0')
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0')
   
}
window.setInterval(countdown, 1000)




console.log(days, hours, minutes, seconds)


