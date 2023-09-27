import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" class="logo" target="_blank">
      <img src="${viteLogo}" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="logo vanilla" target="_blank">
      <img src="${javascriptLogo}" alt="JavaScript logo" />
    </a>
    <h1>VITE STATIC BOILERPLATE</h1>
    <h1>Create cool</h1>
    <div class="card">
      <button type="button">
        <span class="spinner"><svg viewBox="0 0 18 18">
        <path d="M6.254 17.5863L6.72417 12.3786L2.4339 15.3967L0.0830688 11.2542L4.78473 9.06455L0.0830688 6.87493L2.4339 2.73241L6.72417 5.75053L6.254 0.542786H10.9557L10.4855 5.75053L14.7758 2.73241L17.1266 6.87493L12.4249 9.06455L17.1266 11.2542L14.7758 15.3967L10.4855 12.3786L10.9557 17.5863H6.254Z" fill="#FF3C00"/>
      </svg></span>
        <span id="counter"></span>
      </button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`

const counter = document.querySelector('#counter')

setupCounter(counter)

const spinner = document.querySelector('span.spinner');
const marquee = document.querySelectorAll('footer h4');
let currentRotation = 0;
let targetRotation = 0;
let currentTransform = 0;
let targetTransform = 0;
const lerpFactor = 0.05;

function update() {
  currentRotation = lerp(currentRotation, targetRotation, lerpFactor);

  if(targetTransform === 100) {
    currentTransform = 0;
  }
  else currentTransform = lerp(currentTransform, targetTransform, lerpFactor);
  


  spinner.style.transform = `rotate(${currentRotation}deg)`;
  
  marquee.forEach(e => {
    e.style.transform = `translateX(-${currentTransform}%)`;
  });

  
  
  requestAnimationFrame(update);
}

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

counter.parentNode.addEventListener('click', () => {
  targetRotation += 45;
  targetTransform += 1;
  if (targetTransform > 100) targetTransform = 0;
});


update();
