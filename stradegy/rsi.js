/*

  RSI - cykedev 14/02/2014

  (updated a couple of times since, check git history)

 */
// helpers
// let's create our own method
var method = {};

// prepare everything our method needs
method.init = function() {
  this.name = 'RSI';
  this.trend = {
    direction: 'none',
    duration: 0,
    persisted: false,
    adviced: false
  };
}

// for debugging purposes log the last
// calculated parameters.

method.check = function(isHot,isCold) {
  if( isHot ) {

    // new trend detected
    if(this.trend.direction !== 'high')
      this.trend = {
        duration: 0,
        persisted: false,
        direction: 'high',
        adviced: false
      };

    this.trend.duration++;

    if(this.trend.duration >= 1)
      this.trend.persisted = true;

    if(this.trend.persisted && !this.trend.adviced) {
      this.trend.adviced = true;
      console.log("go short")
      //this.advice('short');
    } else
      console.log("go...")
      //this.advice();

  } else if( isCold ) {

    // new trend detected
    if(this.trend.direction !== 'low')
      this.trend = {
        duration: 0,
        persisted: false,
        direction: 'low',
        adviced: false
      };

    this.trend.duration++;

    if(this.trend.duration >= 1)
      this.trend.persisted = true;

    if(this.trend.persisted && !this.trend.adviced) {
      this.trend.adviced = true;
      console.log("go long")
      //this.advice('long');
    } else
      console.log("go...")
      //this.advice();

  } else {
      this.init()
      console.log("go...")
    //this.advice();
  }
}

module.exports = method;
