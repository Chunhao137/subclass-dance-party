 var BeyonceDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.prepend('<img width=400 height=350 src="beyonce.gif" />');
  
  this.$node.one('mouseover', function(){
      console.log("hello")
      $('body').append('<img width=300 height=350 src="fireworks.png"/>');
  })

  this.$node.css({
      'border':0,
  })
};

BeyonceDancer.prototype = Object.create(makeDancer.prototype);
BeyonceDancer.prototype.constructor = BeyonceDancer;
// PenguinDancer.prototype.node = 
BeyonceDancer.prototype.step = function(){
  var that = this; 
    // debugger;
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);

    /* toggle() is a jQuery method to show/hide the <span> tag.
     * See http://api.jquery.com/category/effects/ for this and
     * other effects you can use on a jQuery-wrapped html tag. */
  
  };

BeyonceDancer.prototype.lineup = function(){
     
      this.$node.animate({
       top:200 
       },500);
      console.log("yes")
  };

