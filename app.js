const countdown = document.querySelector('.countdown-holder');

const launchDate = new Date('Oct 17, 2019 9:00:00').getTime();

const distance = setInterval(() => {
  const now = new Date().getTime();

  const difference = launchDate - now;

  // Days, Hours, Minutes, Seconds calculations
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>
  <h1>${days}</h1>
  <span>DAYS</span>
  </div>
  <div>
  <h1>${hours}</h1>
  <span>HOURS</span>
  </div>
  <div>
  <h1>${minutes}</h1>
  <span>MINUTES</span>
  </div>
  <div>
  <h1>${seconds}</h1>
  <span>SECONDS</span></div>
  `;
  if (difference < 0) {
    // Check if the launch date passed
    clearInterval(distance);

    countdown.innerHTML = `
    <h1>Hoouaaah this site is now launched</h1>
    `;
    countdown.children[0].style.color = '#fff';
    countdown.parentElement.children[1].style.display = 'none';
  }
}, 1000);
