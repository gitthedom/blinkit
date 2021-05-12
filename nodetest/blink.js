var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms

function blinkLED() {
  if (LED.readSync() === 0) {
    LED.writeSync(1);
    console.log('On');
  } else {
    LED.writeSync(0);
    console.log('off');
  }
}

function endBlink() {
  clearInterval(blinkInterval);
  LED.writeSync(0);
  console.log('Goodbye');
  LED.unexport();
}

setTimeout(endBlink, 5000);
