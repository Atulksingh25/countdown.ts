var countInput = document.getElementById("countInput");
var startBtn = document.getElementById("startCountdown");
var timer = document.getElementById("timer");
startBtn.addEventListener("click", function () {
    var count = parseInt(countInput.value);
    var interval = setInterval(function () {
        timer.textContent = count.toString();
        count--;
        if (count < 0)
            clearInterval(interval);
    }, 1000);
});
