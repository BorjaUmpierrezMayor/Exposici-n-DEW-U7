window.onload = function() {
    initialize();
}

let watch, btn_start, btn_stop, timeInterval, time, miliseconds;
let clicked;

function initialize()
{
    watch = document.getElementById('watch').querySelector('span');
    clicked = false;

    btn_start = document.getElementById('play');
    btn_start.addEventListener('click', startTime, false);

    btn_stop = document.getElementById('stop');
    btn_stop.addEventListener('click', stopTime, false);

    miliseconds = 0;
    time = "0:00";
    watch.innerHTML = time;
}

function showTime()
{
    miliseconds += 10;
    console.log(miliseconds);
    time = formatTime(miliseconds);
    watch.innerHTML = time;
}

function startTime()
{
    if(!clicked) {
        time = formatTime(miliseconds);
        timeInterval = setInterval(showTime, 20);
        clicked = true;
    }
}

function stopTime()
{
    clearInterval(timeInterval);
    miliseconds = 0;
    clicked = false;
}

function formatTime(value)
{
    return ((Math.round((value/1000) * 100) / 100).toFixed(2) + "").replace('.',':');
}