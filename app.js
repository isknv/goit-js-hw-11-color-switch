const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

let ranTimes = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

buttonStart.addEventListener('click', () => {
  ranTimes = setInterval(() => {
    const random = randomIntegerFromInterval(0, colors.length - 1);

    document.body.style.backgroundColor = colors[random];
  }, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(ranTimes);
  buttonStart.disabled = false;
});
