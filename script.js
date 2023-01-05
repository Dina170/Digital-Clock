function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

if (h == 0) {
    h = 12;
}

if (h > 12) {
    h = h - 12;
    session = "PM"
}

h = (h < 10) ? "0" + h : h; 
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

document.getElementById("myClock").innerText = h + ":" + m + ":" + s + " " + session;
document.getElementById("myClock").textContent = h + ":" + m + ":" + s + " " + session;



}

setInterval(showTime,1000)
