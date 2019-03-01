const container   = document.getElementById("container");
const myAssignment= document.getElementById("myAssignment");
const myAnswer    = document.getElementById("myAnswer");
const footer      = document.getElementById("footer");
const imgFeedback = document.getElementById('feedback');

    var output, goed, goed = 0, fout = 0;
    var running = false;
    var sound = new Audio();

    function randomSum() {
    var a = Math.floor(Math.random() * 10 + 1);
    var b = Math.floor(Math.random() * 10 + 1);
      output = a + " x " + b;
      goedAntwoord = a * b;
      myAssignment.innerHTML = output;
      myAnswer.focus();
}

    function waiting() {
      feedback.src = "img/feedback.png";
      myAnswer.value = "";
      footer.innerHTML = "Goed: " + goed + "  Fout: " + fout;
      randomSum();
}

randomSum();
  myAnswer.addEventListener("keyup", function(e) {
    if(e.keyCode === 13 && !running) {
    if(goedAntwoord.toString() === myAnswer.value)
{
      feedback.src ="img/3.png";
      footer.innerHTML = "Goed!";
      goed++;
      sound.src = "img/goed.wav";
      sound.play();
}
    else
        {
      feedback.src ="img/2.png";
      footer.innerHTML = "Fout!";
      fout++;
      sound.src = "img/fout.wav";
      sound.play();
        }
        window.setTimeout(waiting, 2000);
    }
});
