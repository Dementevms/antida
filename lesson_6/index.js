class App {
  async getUsers(n){
    const url = `https://api.github.com/users?since=${n}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('response', data);
  }
}

const app = new App();
app.getUsers(10);