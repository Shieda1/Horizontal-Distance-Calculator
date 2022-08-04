// https://calculator.swiftutors.com/horizontal-distance-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const horizontalDistanceTraveledRadio = document.getElementById('horizontalDistanceTraveledRadio');
const velocityoftheObjectRadio = document.getElementById('velocityoftheObjectRadio');
const timetakenRadio = document.getElementById('timetakenRadio');

let horizontalDistanceTraveled;
let velocityoftheObject = v1;
let timetaken = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

horizontalDistanceTraveledRadio.addEventListener('click', function() {
  variable1.textContent = '(vx) Velocity of the Object (m/s)';
  variable2.textContent = '(t) Time taken (s)';
  velocityoftheObject = v1;
  timetaken = v2;
  result.textContent = '';
});

velocityoftheObjectRadio.addEventListener('click', function() {
  variable1.textContent = '(x) Horizontal Distance Traveled (m)';
  variable2.textContent = '(t) Time taken (s)';
  horizontalDistanceTraveled = v1;
  timetaken = v2;
  result.textContent = '';
}); 

timetakenRadio.addEventListener('click', function() {
  variable1.textContent = '(x) Horizontal Distance Traveled (m)';
  variable2.textContent = '(vx) Velocity of the Object (m/s)';
  horizontalDistanceTraveled = v1;
  velocityoftheObject = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(horizontalDistanceTraveledRadio.checked)
    result.textContent = `Horizontal Distance Traveled = ${computeHorizontalDistanceTraveled().toFixed(2)} m`;

  else if(velocityoftheObjectRadio.checked)
    result.textContent = `Velocity of the Object = ${computeVelocityoftheObject().toFixed(2)} m/s`;

  else if(timetakenRadio.checked)
    result.textContent = `Time taken = ${computeTimetaken().toFixed(2)} s`;
})

// calculation

function computeHorizontalDistanceTraveled() {
  return Number(velocityoftheObject.value) * Number(timetaken.value);
}

function computeVelocityoftheObject() {
  return Number(horizontalDistanceTraveled.value) / Number(timetaken.value);
}

function computeTimetaken() {
  return Number(horizontalDistanceTraveled.value) / Number(velocityoftheObject.value);
}