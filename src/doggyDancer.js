 var DoggyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend('<img width=100 height=150 src="dog.gif" />');

  this.$node.css({
      'border':0,
  })
};

DoggyDancer.prototype = Object.create(makeDancer.prototype);
DoggyDancer.prototype.constructor = DoggyDancer;
// PenguinDancer.prototype.node = 
DoggyDancer.prototype.step = function(){
  var that = this; 
    // debugger;
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
  
  };
DoggyDancer.prototype.lineup = function(){
     
      this.$node.animate({
       top: 200
       },500);
      console.log("yes")
  };
