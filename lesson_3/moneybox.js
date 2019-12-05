/**
 * реализовать функцию-конструктор копилки
 * - номер счета - 3-х значное число, начиная с 1
 * - если номер меньше трехзначного числа, слева заполняем нулями
 * - состояние счета при создании, учитывается в транзакциях
 */
function Moneybox(order) {
  order = !order ? 0 : order;
  const prefix = order / 100;
  this.order = prefix < 1 ? '0' + order : order;
  this.order = prefix < 0.1 ? '00' + order : order;
  this.order = prefix === 0 ? '001' : order;
  this.balance = 0;
  this.transactions = [];
  this.transactions.push(this.balance);
}

/**
 * реализовать получение информации о состоянии копилки
 * вывод должен быть в формате
 *
 * ***
 * Номер: 001
 * На счету: 150
 * Транзакции: 200, -100, 50
 * ***
 */
function getMoneyboxInfo(moneybox) {
  const order = 'Номер: ' + moneybox.order + '\n';
  const balance = 'На счету: ' + moneybox.balance + '\n';
  const transactions = 'Транзакции: ' + moneybox.transactions.toString().replace(/,/g,', ');
  return order + balance + transactions;
}

/**
 * реализовать добавление в копилку
 */
function addToMoneybox(moneybox, value) {
  moneybox.balance += value;
  moneybox.transactions.push(value);
}

/**
 * реализовать изъятие из копилки
 */
function takeFromMoneybox(moneybox, value) {
  moneybox.balance -= value;
  moneybox.transactions.push(-value);
}

const moneybox1 = new Moneybox(100);
const moneybox2 = new Moneybox;

/**
 * пиши код ниже
 */

function add100ToMoneybox1() {
  addToMoneybox(moneybox1, 100);
}

function addToMoneybox2() {
  addToMoneybox(moneybox2, 500);
}

/**
 * пиши код выше
 */

function take250FromMoneybox2() {
  takeFromMoneybox(moneybox2, 250);
}

function take10FromMoneybox1() {
  takeFromMoneybox(moneybox1, 10);
}

/**
 * используя addToMoneybox и takeFromMoneybox определи следующие функции
 */
add100ToMoneybox1();    // добавит 100 в moneybox1
addToMoneybox2(500);    // добавит 500 в moneybox2
take250FromMoneybox2(); // изымает 250 из moneybox2
take10FromMoneybox1();  // изымает 10 из moneybox1

console.log(getMoneyboxInfo(moneybox1));
console.log(getMoneyboxInfo(moneybox2));
