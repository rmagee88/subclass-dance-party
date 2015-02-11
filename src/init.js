  window.dancers = [[],[]];
  //Bouncer Variable
  window.bouncerMode = false;

  $(".lineUpButton").on("click", function(event){

      // loop through dancers
      if($(".lineUpButton").text() === "Line 'Em Up"){
        $(".lineUpButton").text("Return to Position");
        $('.moon').toggle();
        // loop through dancers object
        for (var j = 0; j < dancers.length; j++) {
          // loop through each type of dancer
          var heightMax = $("body").height() * .75;
          var heightMin = $("body").height() * .3;
          var distBetween = (heightMax - heightMin) / dancers[j].length;
          var xDancerLoc = 0 + (j * 700);
          var yDancerLoc = heightMin;

          for (var i = 0; i < dancers[j].length; i++) {
            //debugger;
            // set new position value of left and top
            var newLocs = dancers[j][i].lineUp(yDancerLoc, xDancerLoc, distBetween);
            xDancerLoc = newLocs[0];
            yDancerLoc = newLocs[1];
            var duration = newLocs[2];
            var style = newLocs[3];

            // xDancerLoc += Math.random() * 100;
            // yDancerLoc += distBetween;

            dancers[j][i].$node.animate({"top": yDancerLoc, "left": xDancerLoc}, duration, style)

          }
        }
      }
      else {

        $(".lineUpButton").text("Line 'Em Up");
        if ($('.moon').css('display') === 'block') $('.moon').toggle();
        for (var j = 0; j < dancers.length; j++) {
          for (var i = 0; i < dancers[j].length; i++){
            dancers[j][i].$node.animate({"top": Math.floor(dancers[j][i].top), "left": Math.floor(dancers[j][i].left)}, dancers[j][i].duration, dancers[j][i].style);
          }
        }
      }
  });

  $(".spin").on("click", function(event){
    var spinThis = function(i,j,x){
      setTimeout(function(){dancers[j][i].$node.addClass("animated flip")},x);
    };
    for (var j = 0; j < dancers.length; j++) {
      for (var i = 0, x = 100; i < dancers[j].length; i++) {
        spinThis(i, j, x);
        x += 200;
        dancers[j][i].$node.removeClass("animated flip");
      }
    }
  });

  $(".moon").on("click", function(event) {
    $(this).toggle();
    for (var i = 0; i < dancers[0].length; i++) {
      dancers[0][i].moonWalk(i);
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
    if(dancerMakerFunctionName === "MichaelJacksonDancer"){
      $('audio')[0].play()
      dancers[0].push(dancer);
    }
    if(dancerMakerFunctionName === "MakePopDancer"){
      dancers[1].push(dancer);
    }

  });

  $('.bouncer').on('click',function(event){
    bouncerMode = !bouncerMode;
    if ($('.bouncer').text() === "Bouncer Mode Off"){
      $('.bouncer').text("Bouncer Mode On");
    }
    else{
      $('.bouncer').text("Bouncer Mode Off");
    }
  });


