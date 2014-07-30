var makechangeColor = function(top,left, timeBetweenSteps){
	 makeDancer.call(this, top, left, timeBetweenSteps);
	 

}

makechangeColor.prototype = Object.create(makeDancer.prototype);
makechangeColor.prototype.constructor = makeDancer;

makechangeColor.prototype.step = function(){
	 var that = this; 
	 var colors = ["#0BF", "#FF6", "#8F0", "#F06", "#93F"];

	 makeDancer.prototype.step.call(this);

	this.$node.animate({
    top: "+=" + (Math.random() * 100 - 50),
    left: "+=" + (Math.random() * 100 - 50)
  }, that.timeBetweenSteps/2);

	 this.$node.mouseenter(function(){
    that.$node.css({
      "border-color": colors[Math.floor(Math.random()*colors.length)]
  });
}); 

};