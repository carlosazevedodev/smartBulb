let isLampOn = false;
let count = 0;

function toggleLamp() {
  isLampOn = !isLampOn;
  count++;

  if (isLampOn) {
    document.getElementById('lamp').classList.add('on');
    console.log('Bulb is on');
  } else {
    document.getElementById('lamp').classList.remove('on');
    console.log('Bulb is off');
  }

  console.log('Bull is On / Off ' + count + ' times.');
}
