var busstop;

function check() {
    busstop = document.getElementById('1').value;

    window.location = "http://rozklady.lodz.pl/Home/TimeTableReal?busStopNum=" + busstop;
}