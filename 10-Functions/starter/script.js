'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price ||= 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('lH123');
// createBooking('LH123', 2, 800);
// createBooking('lH123', 5);
// createBooking('lH123', undefined, 1000);

// const flight = 'LH234';
// const jonas = {
//   name: 'jonas Schmedtmann',
//   passport: '24739479294',
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr ' + passenger.name;

//   if (passenger.passport === 24739479294) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport!');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   //   return str.replaceAll(' ', '').toLowerCase();
//   return str.replace(/ /g, '').toLowerCase();
// };

// // callback function
// const upperFirstWord = function (str) {
//   const [first, ...Others] = str.split(' ');
//   return [first.toUpperCase(), ...Others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer(`JavaScript is the best`, upperFirstWord);
// transformer(`JavaScript is the best`, oneWord);

// const high5 = function () {
//   console.log('✋');
// };
// //  Higher order -- AddEventListener  Callback-function- high5
// document.body.addEventListener('click', high5);

// ['jonas', 'Martha', 'adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('steven');
// greet('hey')('sadiq');

// const greet1 = greeting1 => nyme => console.log(`${greeting1} ${nyme} `);

// const greetHey = greet1('heyyy');
// greetHey('sadiq');
// greet1('Whatsuppp!')('Sadiqqq!');

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`transformed by: ${fn.name}`);
// };

// transformer('javascript is the best!', upperFirstWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');
// greeterHey('jonas');
// greeterHey('Steven');

// greet('hello')('Jonas');

// const greet1 = greeting => name => console.log(`${greeting} ${name}`);

// greet1('Whats up')(`Michael`);

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Sadiq brocode');
// lufthansa.book(635, 'john Smith');
// console.log(lufthansa);
// const eurowings = {
//   airline: 'eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// //DoeS NOT WORK
// // book(23, 'sarah Williams');

// // CAll METHOD
// book.call(eurowings, 23, 'Sarah Williams');
// // console.log(eurowings);

// book.call(lufthansa, 239, 'Marry Cooper');

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Marry Cooper');
// // console.log(swiss);

// // Apply Method
// const flighData = [583, 'George Cooper'];
// book.apply(swiss, flighData);

// //Bind Method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// // Partial Application: Part of arguement are already redefined!
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas Schmdtoann');
// bookEW23('Martha Cooper');
// console.log();

// // Use objects with EventListeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// //Partial Applications
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!

//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join(`\n`)}\n(This option NUmber)`
//       )
//     );
//     console.log(answer);
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       //Poll results are 13, 2, 4 ,1
//       console.log(`Poll Results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] });
// poll.displayResults.call({ answers: [1, 5, 3, 0, 9, 6, 1] });

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// // IFFY Imediately invoked function expression
// // These two functions WIll never run more then once.Gets destroyed after one use.
// (function () {
//   console.log(`This will never run again`);
//   const isPrivate = 234;
// })();

// (() => console.log(`This too Will never run again`))();

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal${i + 1}: ${player}`);
// }

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// // 3.
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamStr} ${odd}`);
//   }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odds of ${teamStr} ${odd}`);
}
