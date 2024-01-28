function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
    document.getElementById('Zegaros').textContent = timeString;
}
function addZeroBefore(number) {
    return number < 10 ? '0' + number : number;
}
setInterval(updateClock, 1000);
updateClock();
