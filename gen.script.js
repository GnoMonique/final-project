
// Art Prompt Generator 
const button = document.getElementById("generateButton");
const display = document.getElementById("prompt");
const button2 = document.getElementById("generateButton2")
const display2 = document.getElementById("details")


// Generate Character
const character = ["Dog", "Person", "Bird", "Squirrel", "Fish", "Cat", "Rabbit", "Frog", "Kangaroo", "Fox", "Weasel", "Chicken", "Rooster", "Robot", "Flower", "Tree"];

function generatePrompt () {
    const randomIndex = Math.floor(Math.random()* character.length);
    const randomValue = character[randomIndex];
    return randomValue;
}

button.addEventListener("click", function () {
    const randomValue = generatePrompt();
    display.textContent = randomValue;
    const randomValor = generateDetails();
    display2.textContent = randomValor;
});

// Generate Details

const details = ["Running", "Gardening", "Wizard", "Doing sports", "Scientist", "Traveling", "Singing", "Fancy", "Painter/Artist", "Sailor", "Baking", "Reading", "At the beach", "Winter-time", "Astronaut", "Cowboy"];

function generateDetails () {
    const randomI = Math.floor(Math.random()* details.length);
    const randomValor = details[randomI];
    return randomValor;
}

/*button2.addEventListener("click", function () {
    const randomValor = generateDetails();
    display2.textContent = randomValor;
});
*/

// Timer

const timerDisplay= document.getElementById("timer")
const buttonStart= document.getElementById("start")
const buttonRestart= document.getElementById("restart")
const message= document.getElementById("messageContainer")

let timeRemaining = 300;
let timerInterval;
let isPaused = true;
let isRunning = false

function formatTime (seconds) {
  let minutes = Math.floor (seconds/60);
  let secondsRemaining = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
}

// Update display  - messages

function updateTimerDisplay (){
  timerDisplay.textContent = formatTime(timeRemaining);
  if (timeRemaining>30) {
    timerDisplay.textContent= `${formatTime(timeRemaining)}`;
    message.textContent = "Time remaining!"
  } else {
    timerDisplay.textContent= `${timeRemaining}`;
    message.textContent= "Time is almost up!"
  }
}

// Button Start/Pause/Resume

function startPauseTimer() {
  if (isRunning) {
      clearInterval(timerInterval);
      isRunning = false;
      buttonStart.textContent = "Resume";
      isPaused = true;
  } else {
      if (isPaused) {
          timerInterval = setInterval(() => {
              timeRemaining--;
              updateTimerDisplay();
              if (timeRemaining <= 0) {
                  clearInterval(timerInterval);
                  isRunning = false;
                  buttonStart.textContent = "Start Timer";
              }
          }, 1000);
          isRunning = true;
         buttonStart.textContent = "Pause";
          isPaused = false;
      }
  }
}


buttonStart.addEventListener("click", startPauseTimer)

// Button Reset timer

function resetTimer (){
  clearInterval(timerInterval);
  timeRemaining = 300;
  updateTimerDisplay ();

  buttonStart.textContent = "Start"
  isRunning= false;
  isPaused= true;
}

buttonRestart.addEventListener("click", resetTimer)





















