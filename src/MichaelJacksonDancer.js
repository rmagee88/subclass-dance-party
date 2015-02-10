var MichaelJacksonDancer = function(top, left, timeBetweenSteps){
  MakePopDancer.apply(this, arguments);
  this.$node = $('<img src="lib/mj.gif" class="michaelJackson"></img>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition(top, left);

};

MichaelJacksonDancer.prototype = Object.create(MakePopDancer.prototype);
MichaelJacksonDancer.prototype.constructor = MichaelJacksonDancer;



