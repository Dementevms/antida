function Rectangle(width, length, units) {
  this.width = width;
  this.length = length;
  this.units = units;

  this.getParams = function() {
    return (
      'Rectangle params: width: ' +
      this.width +
      ' ' +
      this.units +
      ', ' +
      'length: ' +
      this.length +
      ' ' +
      this.units
    );
  };
}

function getArea() {
  return `Rectangle area: ${this.width * this.length} ${this.units}²`;
};

function getPerimetr(width, length) {
  return `Rectangle perimetr: ${width * 2 + length * 2} ${
    this.units
  }`;
};

const rectangle = new Rectangle(10, 10, 'cm');
console.log(rectangle.getParams());

const area = getArea.call(rectangle);
console.log(area);

const perimetr = getPerimetr.apply(rectangle,[rectangle.width, rectangle.length]);
console.log(perimetr);
