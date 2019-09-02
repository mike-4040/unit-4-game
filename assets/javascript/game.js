let goalMin = 19;
let goalMax = 120;
let crystalMax = 12;

let wins = 0;
let losses = 0;
let score;
let goal;

$(document).ready(function() {
  restart();

  $('img').click(function() {
    score += parseInt($(this).attr('value'));
    $('#score').text(score);
    console.log(score);

    if (score == goal) {
      wins++;
      restart();
    } else if (score > goal) {
      losses++;
      restart();
    }
  });
});

function restart() {
  $('#wins').text(wins);
  $('#losses').text(losses);

  $('#goal').text(goal = randomInRange(goalMin, goalMax));
  $('#score').text(score = 0);

  $('img').each(function() {
    $(this).attr('value', randomInRange(1, crystalMax));
  });
}

randomInRange = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
