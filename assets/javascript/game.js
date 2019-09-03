let goalRange = [19, 120];
let crystalRange = [1, 12];

let wins = 0;
let losses = 0;
let score;
let goal;

$(document).ready(function() {
  restart();

  $('img').click(function() {
    score += parseInt($(this).attr('numValue'));
    $('#score').text(score);

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

  $('#goal').text((goal = randomInRange(goalRange)));
  $('#score').text((score = 0));

  $('img').each(function() {
    $(this).attr('numValue', randomInRange(crystalRange));
  });
}

let randomInRange = arr =>
  arr[0] + Math.floor(Math.random() * (arr[1] - arr[0] + 1));
