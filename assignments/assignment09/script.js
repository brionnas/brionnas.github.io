const drawBtn        = document.getElementById('draw-btn');
const townContainer  = document.getElementById('town-container');
const exerciseArea   = document.getElementById('exercise-area');
const stickImg       = document.getElementById('stick');
const exerciseBtn    = document.getElementById('exercise-btn');

drawBtn.addEventListener('click', () => {
  townContainer.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const house = document.createElement('div');
    house.classList.add('house');

    const roof = document.createElement('div');
    roof.classList.add('roof');
    house.appendChild(roof);

    const door = document.createElement('div');
    door.classList.add('door');
    house.appendChild(door);

    townContainer.appendChild(house);
  }

  exerciseArea.classList.remove('hidden');
});

exerciseBtn.addEventListener('click', () => {
  let step = 1;
  const intervalId = setInterval(() => {
    step++;
    if (step > 6) {
      clearInterval(intervalId);
    } else {
      stickImg.src = `images/${step}.png`;
    }
  }, 1000);
});
