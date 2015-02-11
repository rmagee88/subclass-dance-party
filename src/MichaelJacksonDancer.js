//http://mp3rehab.com/user_uploads_072014-5/Michael%20Jackson%20-%20Beat%20It.mp3rehab

var MichaelJacksonDancer = function(top, left, timeBetweenSteps){
  MakePopDancer.apply(this, arguments);
  this.$node = $('<img src="lib/mj.gif" class="michaelJackson"></img>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top, left);
  this.duration = 800;
  this.$node.on("mouseover", function() {
    if(bouncerMode){
      $(this).animate({"top": this.y + 50},100);
    }
  });

};

MichaelJacksonDancer.prototype = Object.create(MakePopDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;

MichaelJacksonDancer.prototype.lineUp = function(yDancerLoc, xDancerLoc, distBetween){
  var result = [];
  result.push(Math.random() * 100 + xDancerLoc);
  result.push(yDancerLoc + distBetween);
  result.push(this.duration);
  result.push(this.style);
  return result;
};
