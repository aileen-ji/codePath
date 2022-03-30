// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [6, 1, 2, 3, 6, 1, 2, 1];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistakes = 0; //how many mistakes the user made
var time = 30000; //ticking clock
var tickingClock; //10 second clock

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistakes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  randomize();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  clueHoldTime = 1000;
  stopClock();
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function randomize() {
  //randomize notes
  for (let i = 0; i < 8; i++) {
    pattern[i] = Math.floor(Math.random() * 7) + 1;
  }
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  time = 30000;
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  startClock();
  clueHoldTime -= 70;
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  //is guess correct?
  if (pattern[guessCounter] == btn) {
    //is turn over?
    if (guessCounter == progress) {
      //is this last turn?
      if (progress == pattern.length - 1) {
        stopClock();
        winGame();
      } else {
        progress++;
        stopClock();
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    stopClock();
    mistakes++;
    alert("Incorrect button. You have " + (3 - mistakes) + " chances left.");
    if (mistakes == 3) {
      loseGame();
    }
    stopClock();
    playClueSequence();
  }
}

function startClock() {
  tickingClock = setInterval(countDown, 1000);
}

function stopClock() {
  clearInterval(tickingClock);
  time = 30000;
  document.getElementById("clock").innerHTML = "Time left: " + time / 1000;
}

function countDown() {
  if (time <= 0) {
    stopClock();
    alert("Time up.");
    loseGame();
  }
  time = time - 1000;
  document.getElementById("clock").innerHTML = "Time left: " + time / 1000;
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.68,
  3: 329.64,
  4: 349.24,
  5: 392.0,
  6: 440.0,
  7: 493.92,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
