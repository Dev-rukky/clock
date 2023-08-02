let seconds = 0;
let tens = 0;
let mins = 0;
let interval;
const secondsTimer = document.querySelector('.seconds');
const tensTimer = document.querySelector('.tens');
const minsTimer = document.querySelector('.mins');
const startButton = document.querySelector('.start-btn');
const stopButton = document.querySelector('.pause-btn');
const resetButton = document.querySelector('.reset-btn');
const timerbox = document.querySelector('.timer');
const startBox = document.querySelector('.container');


startButton.addEventListener('click', () => {
   interval = setInterval(startTimer, 10)
   timerbox.style.display = '';
        
        timerbox.classList.add('fadeIn');
        startBox.style.height = '620px';
        startBox.classList.add('centerContent');
});

stopButton.addEventListener('click', () => {
   clearInterval(interval)
 });

 resetButton.addEventListener('click', () => {
    clearInterval(interval)
    tens = "00";
    seconds = "00";
    secondsTimer.innerHTML = seconds;
    tensTimer.innerHTML = tens;
  });

function startTimer() {
    tens++;

    if (tens <= 9) {
        tensTimer.innerHTML = "0" + tens;
    } else if (tens > 9 && tens <= 99) {
        tensTimer.innerHTML = tens;
    }

    if (tens > 99) {
        seconds++;
        if (seconds <= 9) {
            secondsTimer.innerHTML = "0" + seconds;
        } else if (seconds > 9 && seconds <= 60) {
            secondsTimer.innerHTML = seconds;
        }

        if (seconds > 60) {
            mins++;
            if (mins <= 9) {
                minsTimer.innerHTML = "0" + mins;
            } else {
                minsTimer.innerHTML = mins;
            }

            seconds = 0;
            secondsTimer.innerHTML = "00";
        }

        tens = 0;
        tensTimer.innerHTML = "00";
    }
}

// function startTimer() {
//     tens++;
//     if (tens <= 9) {
//         tensTimer.innerHTML = "0" + tens;
//     }else if (tens > 9) {
//         tensTimer.innerHTML = tens;
//     }if (tens > 99) {
//         seconds++;
//         secondsTimer.innerHTML = "0" + seconds;
//         tens = 0;
//         tensTimer.innerHTML = "0" + 0;
//     }else if (seconds > 9) {
//         secondsTimer.innerHTML = seconds;
//     }else if (seconds > 60) {
//         mins++;
//         minsTimer.innerHTML = "0" + mins
//         seconds = 0
//         secondsTimer.innerHTML = "0" + 0;
//     }
// }