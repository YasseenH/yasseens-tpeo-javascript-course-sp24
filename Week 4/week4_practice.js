setTimeout(console.log, 2000, 1);

var timeoutID = setInterval(console.log, 3000, 1);
setTimeout(clearInterval, 10000, timeoutID);

var time = 1;
function printNumber() {
    console.log(time);
    time++;
}
var ID = setInterval(printNumber, 1000);
setTimeout(clearInterval, 16000, ID);