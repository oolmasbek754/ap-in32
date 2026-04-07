let score = 0;

function addScore() {
  score++;
  document.getElementById("score").innerText = score;

  if (score === 500) {
    document.getElementById("winImage").style.display = "block";
  }
}