$(document).ready(function() {
  var points;

  $("form").submit(function(event) {
    event.preventDefault();

  });

  function getPoints() {
    $("input:checkbox[name=stressed]:checked").each(function(){
    points += $(this).val();
    });
    analysis(points);
  }

  function analysis(pts) {

    switch(pts) {
      case > 15:
      // do something
      case > 10:
      // do something else
      case > 5:
      // do something else
      case > 0:
      // do something else
      case < 0:
      // do something else
      break;
      default:
      // you entered an invalid value
      break;
    }
  }

});
