let counter = 0;

const incrementAndShowCounter = () => {
  const time = document.querySelector('.js-time');
  if (counter < 12) {
    counter++;
  }
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);
