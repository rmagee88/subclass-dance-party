$(document).ready(function(){
  window.dancers = [];

$(".lineUpButton").on("click", function(event){
    var heightMax = $("body").height() * .75;
    var heightMin = $("body").height() * .3;
    var distBetween = (heightMax - heightMin) / dancers.length;
    var xDancerLoc = 0;
    var yDancerLoc = heightMin;

    // loop through dancers
    if($(".lineUpButton").text() == "Line 'Em Up"){
    $(".lineUpButton").text("Return to Position")
    for (var i = 0; i < dancers.length; i++) {
      // set new position value of left and top
      dancers[i].$node.animate({"top": yDancerLoc, "left": xDancerLoc},500, "swing");
      xDancerLoc += Math.random() * 100
      yDancerLoc += distBetween;
    }
  }
    else {
    {
      $(".lineUpButton").text("Line 'Em Up")
      for (var i = 0; i < dancers.length; i++)
      {
       dancers[i].$node.animate({"top": Math.floor(dancers[i].top), "left": Math.floor(dancers[i].left)},500, "swing");

     }

   }
 }

});

$(".spin").on("click", function(event){

     var spinThis = function(i,x){
        setTimeout(function(){dancers[i].$node.addClass("animated flip")},x);
      }

      for (var i = 0, x = 100; i < dancers.length; i++) {
        spinThis(i,x);
        x += 200;
      }







  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var bodyHeight = $("body").height();
    var bodyWidth = $("body").width();
    var dancer = new dancerMakerFunction(
      Math.min(bodyHeight * .75, Math.max(bodyHeight * .3, bodyHeight * Math.random())), // top
      Math.min(bodyWidth * .8, bodyWidth * Math.random()), // left
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
});

