
class Human {
  constructor(name, lastName){
    this.name = name;
    this.lastName = lastName;
  }

  get hello() {
    return `Hello ${this.name} ${this.lastName}`;
  }

}

class HumanAge extends Human {
  constructor(name, lastName, age){
    super(name, lastName);
    this.age = age;
  }

  get isAdult(){
    return this.age >= 18;
  }

}

const data = [
  { name: 'Mikhail', lastName: 'Dementyev', age: 32 },
  { name: 'Ilya', lastName: 'Levin', age: 27 },
  { name: 'Alex', lastName: 'Stolyar', age: 32 },
  { name: 'Pavel', lastName: 'Shnaider', age: 33 },
  { name: 'Olga', lastName: 'Orlova', age: 17 },
  { name: 'Mark', lastName: 'Timoshin', age: 14 },
  { name: 'Vasya', lastName: 'Petrov', age: 18 },
];

const humans = data.map(item => {
  return new HumanAge(item.name, item.lastName, item.age);
});

const evenHumans = humans.filter((item, index) => {
  return index % 2 === 0;
});

const adultHumans = humans.filter(item => {
  return item.isAdult;
});

const nameHumans = humans.filter(item => item.isAdult).map(item => item.name);

console.log('humans');
console.table(humans);
console.log('evenHumans');
console.table(evenHumans);
console.log('adultHumans');
console.table(adultHumans);
console.log('nameHumans');
console.table(nameHumans);