let hr = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function displayTime() {
    let date = new Date();

    // getting hours mins secs form the date

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotations = 30 * hh + mm / 2;
    let mRotations = 6 * mm;
    let sRotations = 6 * ss;

    hr.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform = `rotate(${mRotations}deg)`;
    sec.style.transform = `rotate(${sRotations}deg)`;

}

setInterval(displayTime, 1000);