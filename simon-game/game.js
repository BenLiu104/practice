let buttonColours = ['green', 'red', 'yellow', 'blue'];
let userClickedPattern = [];
let gamePattern = [];
let level = 0;
let currentLevel = 0;
let started = false;

//generate next color
function nextSequence() {
  $('h1').text(`level ${level}`);
  let randomColor = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomColor];

  setTimeout(() => {
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
  }, 1000);
  gamePattern.push(randomChosenColour);
  level++;
  console.log(gamePattern);
}

//catch user answer
function grabUserInput() {
  $('.btn').on('click', (e) => {
    let userChosenColour = e.target.id;

    userClickedPattern.push(userChosenColour);
    console.log(userChosenColour);
    playSound(`${userChosenColour}`);
    animatePress(userChosenColour);
    if (checkAnswer(currentLevel)) {
      if (currentLevel == gamePattern.length - 1) {
        currentLevel = 0;
        userClickedPattern = [];
        nextSequence();
      } else currentLevel++;
    } else gameOver();
    console.log(userClickedPattern);
  });
}

//check user answer on specific position of array
function checkAnswer(level) {
  if (userClickedPattern[level] == gamePattern[level]) return true;
  else return false;
}

//play sound of specific color
function playSound(color) {
  let sound = new Audio(`./sounds/${color}.mp3`);
  sound.play();
}

//add animation on button click
function animatePress(currentColour) {
  $(`.${currentColour}`).addClass('pressed');
  setTimeout(() => {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
}

// start game
function init() {
  $(document).on('keydown', () => {
    if (started == false) {
      nextSequence();
      grabUserInput();
      started = true;
    }
  });
}

// reset game
function gameOver() {
  playSound('wrong');
  $('.btn').off('click');
  $('h1').text('press any key to restart');
  started = false;
  currentLevel = 0;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
}

init();
