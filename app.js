let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")
document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        let date = new Date()
        hour.textContent = (date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`)
        minute.textContent = (date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`)
        second.textContent = (date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`)
    }, 1000);
})