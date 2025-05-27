// === NAV TOGGLE & EXERCISE SWITCH ===
const navToggle = document.getElementById('navToggle');
const menu      = document.getElementById('menu');
const exercises = document.querySelectorAll('.exercise');

navToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('show');
  navToggle.textContent = isOpen ? '▲' : '▼';
});

menu.addEventListener('click', e => {
  if (e.target.tagName !== 'LI') return;
  const exToShow = e.target.dataset.ex;
  exercises.forEach(sec => {
    sec.id === 'exercise' + exToShow
      ? sec.classList.remove('hidden')
      : sec.classList.add('hidden');
  });
});

// === EXERCISE 1: BIKE ANIMATION ===
const bike       = document.getElementById('bike');
const speedRange = document.getElementById('speedRange');
const goBtn      = document.getElementById('goBtn');
const stopBtn    = document.getElementById('stopBtn');
let   animation;

goBtn.addEventListener('click', () => {
  const speedVal = +speedRange.value;          // 1–5
  const duration = 3000 / speedVal;            // faster → shorter duration

  // cancel any prior run
  if (animation) animation.cancel();

  // compute how many pixels the bike can travel
  const container = bike.parentElement;
  const maxX      = container.clientWidth - bike.clientWidth;

  // animate from 0 → maxX px
  animation = bike.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(${maxX}px)` }
    ],
    {
      duration:   duration,
      iterations: Infinity,
      easing:     'linear'
    }
  );
});

stopBtn.addEventListener('click', () => {
  if (animation) animation.cancel();
});

// === EXERCISE 2: CSS ART ===
const artButtons   = document.querySelectorAll('.art-buttons button');
const artContainer = document.getElementById('artContainer');

const drawArt = e => {
  const type = e.target.dataset.art;
  artContainer.innerHTML = '';       // clear previous shape
  const el = document.createElement('div');

  // single function + if statements
  if (type === 'moon') {
    el.className = 'moon';
  } else if (type === 'star') {
    el.className = 'star';
  } else {
    el.className = 'cloud';
  }

  artContainer.appendChild(el);
};

artButtons.forEach(btn => btn.addEventListener('click', drawArt));

