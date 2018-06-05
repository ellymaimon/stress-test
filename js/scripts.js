$(document).ready(function() {
  var points = 0;

  $("form").submit(function(event) {
    event.preventDefault();
    getPoints();

  });

  function getPoints() {
    $("input:checkbox[name=stressed]:checked").each(function(){
    points += parseInt($(this).val());
    });
    analysis(points);

  }

  function analysis(pts) {

    switch(true) {
      case (pts > 15):
      var text = makeText("in urgent need of care", "serious", "seek help immediately", "<br><a href='#'>Click Here</a>");
      $("#resultText").html(text);
      break;
      case (pts > 10):
      var text = makeText("in some need of care", "moderate", "check out some resources that are available online", "<br><a href='#'>Click Here</a>");
      $("#resultText").html(text);
      break;
      case (pts > 5):
      var text = makeText("at risk for stress related symptoms", "light", "check out some resources that are available online for preventive maintenance", "<br><a href='#'>Click Here</a>");
      $("#resultText").html(text)
      break;
      case (pts > 0):
      var text = makeText("not at risk for stress related symptoms", "no apparent", "continue monitoring your mental condition to avoid problems in the future", "<br><a href='#'>Click Here</a>");
      $("#resultText").html(text)
      break;
      case (pts < 0):
      var text = makeText("in good mental health", "no apparent", "continue monitoring your mental condition to avoid problems in the future", "<br><a href='#'>Click Here</a>");
      $("#resultText").html(text)
      break;
      default:
      var text = "Please refresh the page."
      $("#resultText").html(text)
      break;
    }
  }

  function makeText(phrase1, phrase2, phrase3, phrase4) {
    var text = "After reviewing your feedback we have determined that you are " + phrase1 + ". You suffer from " + phrase2 + " symptoms that could be causing your stress. We recommend that you " + phrase3 + ". Check out the following resource to gain some more information on your current state of health: " + phrase4;

    return text;
  }

});
