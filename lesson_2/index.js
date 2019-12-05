const data = require('./data.json');

class Rating {
  constructor(response){
    this.data = response.data;
  }
  getTotalScore(){
    return this.data.reduce((accumulator, item) => accumulator + item.score, 0);
  }
  getAdultUsers(){
    return this.data.filter(item => item.age >= 18);
  }
  getUsersByName(){
    return this.data.filter(item => item.name[0] === 'B');
  }
  getUsersAndScores(){
    return this.data.map(item => {
      item.toString = () => {
        return `${item.name} - ${item.age}: ${item.score}`;
      };
      return item.toString();
    });
  }
  getScore(){
    const array = this.data.reduce((result, item) => {
      const age = item.age;
      if(typeof result[age] === "undefined"){
        result[age] = [];
      }
      result[age].push(item.score);
      return result;
    }, []);
    return array.map(item => item.toString());
  }
}

const rating = new Rating(data);
const totalScore = rating.getTotalScore();
console.log('totalScore', totalScore);
const adultUsers = rating.getAdultUsers();
console.log('adultUsers', adultUsers);
const usersByName = rating.getUsersByName();
console.log('usersByName', usersByName);
const usersAndScores = rating.getUsersAndScores();
console.log('usersAndScores', usersAndScores);
const score = rating.getScore();
console.log('score', score);
