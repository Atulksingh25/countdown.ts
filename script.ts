 const countInput = document.getElementById("countInput") as HTMLInputElement;
const startBtn = document.getElementById("startCountdown") as HTMLButtonElement;
const timer = document.getElementById("timer") as HTMLDivElement;

startBtn.addEventListener("click", () => {
  let count = parseInt(countInput.value);
  const interval = setInterval(() => {
    timer.textContent = count.toString();
    count--;
    if (count < 0) clearInterval(interval);
  }, 1000);
});
