'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for a later exercise

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //Enhanced object Literals
//   openingHours,

//   order(starterindex, mainIndex) {
//     return [this.starterMenu[starterindex], [this.mainMenu[mainIndex]]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = 20, address }) {
//     console.log(
//       `order Recieved! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure

//Challenge (1) String/Method/DOM ✅

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// const addCode = string => string.slice(0, 4).toUpperCase();

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🛑' : ' '} ${type} ${addCode(
//     from
//   )} ${to.slice(0, 4).toUpperCase()} (${time.replace(':', 'h')})`.padStart(40);
//   console.log(output);
// }

//  🛑 Delayed Departure FAO9 TXL2 (11h25)
//               Arrival BRU0 FAO9 (11h45)
//    🛑 Delayed Arrival HEL7 FAO9 (12h05)
//             Departure FAO9 LIS2 (12h30)

// Challenge (2) String/Method
// const getCode = str => str.slice(0, 4).toUpperCase();

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🛑' : ' '}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(40);
//   console.log(output);
// }

//  🛑 Delayed Departure FAO9 TXL2 (11h25)
//               Arrival BRU0 FAO9 (11h45)
//    🛑 Delayed Arrival HEL7 FAO9 (12h05)
//             Departure FAO9 LIS2 (12h30)

//Split and JOIN!
// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jonas rocky morgan arther');
// capitalizeName('jessica ann smith davis');
// capitalizeName('sadiq bro code');

// // Padding a string
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('jonas'.padStart(25, '+').padEnd(35, '+'));
// console.log();

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(612324433));
// console.log(maskCreditCard('7635542121'));

// //Repeat Method
// const message2 = 'Bad weather... All Departures Delayed...  ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`there are ${n} planes in the line ${'emoji'.repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('b737'[0]);
// console.log(airline.length);
// console.log('b737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are the middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle Seat');
//   } else {
//     console.log('You got lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('jonas'));

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

//Fix Capitalization in name
// const passenger = 'jonAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //compare email inputs
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

//Replacing string parts

// const priceGB = '288,97@';
// const priceUS = priceGB.replace('@', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'ALl passengers come to boarding door 23, Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

//Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log(`Part of the NEW Airbus family`);
// }

// practice exercise
// const checkBaggage = function (items) {
//   let baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('you are not allowed to board the flight');
//   } else {
//     console.log('you are allowed to board');
//   }
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('I have some socks and camera');
// checkBaggage('get some snacks and a gun for protection');
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(`STEP ONE!`);
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// console.log(`STEP TWO----`);
// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(`STEP THREE---`);
// console.log(
//   `An event happened on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(
//   `An event happened on average, every ${time / gameEvents.size} minutes`
// );

// console.log(`STEP FOUR ----`);

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half}HALF] ${min}: ${event}`);
// }

// const question = new Map([
//   ['question', 'What is the best programming language in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// console.log(question);
// //Convert objects to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// //convert map to an Array
// console.log([...question]);
// // console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisban Portugal');
// console.log(rest);

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set(`open`, 11)
//   .set('close', 23)
//   .set(true, 'We are open!')
//   .set(false, 'we are closed!');

// console.log(rest.get('name'));

// const time = 1;

// console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.size);

// const arr = [1, 2];
// rest.set([arr, 'Test']);
// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');

// SETS TYPE OF ITERABLE!
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'risotto',
//   'pasta',
//   'pizza',
// ]);

// console.log(ordersSet);
// console.log(new Set());
// console.log(ordersSet.size);

// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');
// ordersSet.delete('risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // EXAMPLE
// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
// );

// console.log(new Set('sadiqfarah').size);
// Step 1

// for (const [i, player] of game.scored.entries()) {
//   console.log(`goal ${i + 1}: ${player}`);
// }

// // const calcAverage = (a, b, c) => (a + b + c) / 3;

// let average = 0;
// const odds = Object.values(game.odds);

// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory $${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const scorers = {
//   Gnarly: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };

// const entries = Object.entries(scorers);
// console.log(entries);

// for (const [key, { player, score }] of Object.entries(entries)) {
//   console.log(`${key}: ${player} scored ${score} goals`);
// }

// Step 2

// console.log(game.players?.[0]);

// for(const judos of players.entries()?.)

//PROPERTY NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days `;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // PROPERTY VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // ENTIRE OBJECT
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon);

// //With OPTIONAL CHAINING
// console.log(restaurant.openingHours.open?.close);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`on ${day}, we open at ${open}`);
// }

// //Optional Chaining on methods

// console.log(restaurant.order?.(1, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRessotto?.(1, 2) ?? `Method doesnt exist`);

// // Optional CHAINING ON ARRAYS

// const users = [{ name: 'jonas', email: 'hello.jonas.io' }];
// // const users = [];
// console.log(users[0]?.name ?? `user Array Empty`);
// console.log(users[0]?.email ?? `User array empty`);
