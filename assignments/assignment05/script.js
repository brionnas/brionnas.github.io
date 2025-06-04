// ---- JS conventions from class: arrow functions, const/let ----

const iceBox    = document.querySelector('.ice-cream .content');
const iceArea   = document.querySelector('.ice-cream');
let   iceCount  = 0;

// Ice-Cream click to append bold line
iceArea.addEventListener('click', () => {
  iceCount++;
  const p = document.createElement('p');
  p.innerHTML = '<strong>I like IceCream!</strong>';
  iceBox.appendChild(p);
});

const range  = document.getElementById('iceRange');
const output = document.querySelector('.pick-number .output');

// Slider input to show “I want X ice cream(s)!”
range.addEventListener('input', () => {
  const val = range.value;
  output.textContent = `I want ${val} ice cream${val > 1 ? 's' : ''}!`;
});

const showBtn = document.getElementById('showBtn');


showBtn.addEventListener('click', () => {
  const img = document.createElement('img');
  img.src    = 'icecream.jpg';
  img.alt    = 'Ice Cream';
  img.style.width = '200px';
  showBtn.replaceWith(img);
});
