var weekdays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

var getDay = new Date().getDay;

Date.prototype.getDay = function() {
  var getRandom = function(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  };
  var r = getRandom(1, 10);
  if (r > 5) {
    return getDay.bind(this)();
  }
  return null;
};

function myGetDay() {
  var date = new Date();
  var day = date.getDay();
  return weekdays[day] || 'Strange day';
}

for (var i = 0; i < 10; i++) {
  console.log(myGetDay());
}
