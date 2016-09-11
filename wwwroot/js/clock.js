function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var event = document.getElementById("event");
var eventSub = document.getElementById("eventSub")
var clockLink = document.getElementById("clockLink")

if (new Date() > Date.parse("September 28 2016 23:59:59")) {
    event.innerHTML = "Countdown to Web Summit";
    var deadline = new Date(Date.parse('November 8 2016 09:55:00 GMT'));
    eventSub.innerHTML = "Get ready with our online Masterclasses!";
    clockLink.href = "masterclasses.html"
} else {
    event.innerHTML = "Registrations for the Startup Challenge end in:";
    var deadline = new Date(Date.parse('September 28 2016 23:59:59'));
}

initializeClock('clockdiv', deadline);