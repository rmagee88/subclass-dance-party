var MakePopDancer = function(top, left, timeBetweenSteps){
  MakeDancer.apply(this, arguments);
  this.$node = $('<img src="lib/carlton.gif" class="carlton"></img>');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

MakePopDancer.prototype = Object.create(MakeDancer.prototype);
MakePopDancer.prototype.constructor = MakePopDancer;

MakePopDancer.prototype.oldStep = function(){
  MakeDancer.prototype.step.call(this);
};

MakePopDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // debugger;
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.show();
};

