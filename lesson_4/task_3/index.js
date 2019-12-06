var counter20 = { count: 20 };
var counter30 = { count: 30 };

counter20.valueOf = function() {
  return this.count;
};

counter30.valueOf = function() {
  if (this.count === 36) {
    this.count = 32;
  }
  var r = this.count - 2;
  this.count = this.count + 2;
  return r;
};

counter20.toString = function() {
  return this.count - 1;
};

var test1 = () => counter20 + counter30 + 2 === counter20 + counter30;

var test2 = Function(`
  return counter20 + counter30 - 2 === counter20 + counter30
`);

console.log('test1', test1());
console.log('test2', test2());

console.log(String(counter20));
console.log(Number(counter20));
console.log(String(counter20));
