function Game(max = 3, tries = 10) {
  const getRandom = function(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };

  this.max = max;
  this.tries = tries;
  this.random = getRandom(1, max);

  this.turn = function(n) {
    if (n === this.random) {
      console.log('Win!!!');
      return;
    }
    n < this.random ? console.log('n <') : console.log('n >');

    this.tries--;
    if(this.tries <= 0){
      console.log('Game Over');
    } else {
      console.log('Tries left: ', this.tries);
    }
  };
}
