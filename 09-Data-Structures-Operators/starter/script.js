'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

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

console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 Enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time, address }) {
    console.log(
      `order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delived to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//  WITH optional chainining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);
console.log(restaurant.openingHours?.fri);

const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`on ${day}, we open at ${open}`);
}

//OPTIONAL CHAINING ON METHODS
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Optional Chaining on ArraYS
const users = [{ name: 'jonas', email: 'Hello@jonas.io' }];
console.log(users[0]?.email ?? `User array empty`);

// FOR OF LOOP
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// console.log(...menu.entries());

// //LoGical Assignment Operators
// const rest1 = {
//   name: 'capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // OR Assignment Operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //Nullish Assignment Operator (null, undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;
// // console.log(rest1);
// // console.log(rest2);

// // AND ASSIGNMENT OPERATOR
// // rest1.owner = rest1.owner && '<ANNONYMOUS>';
// // rest2.owner = rest2.owner && '<ANNONYMOUS>';

// rest1.owner &&= '<ANNONYMOUS>';
// rest2.owner &&= '<ANNONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// //NullISH coalesing operator
// restaurant.numGuests = 1;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //Nullish: null and Undefined(Not 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// console.log('----OR----');
// // Use ANY DATA TYPE, Return ANY data TYPe, CAPABLE of short-circuit evaluation

// console.log(3 || 'jonas');
// console.log('' || 'jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// // Short-Circuiting with the OR operator
// const guest2 = restaurant.numGuests || 15;
// console.log(guest2);

// console.log('----AND----');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas');

// console.log('hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// //Rest Patterns
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //rest in OBJECTS
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2) functions!
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza(`mushroom`, 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

//REAL WORLD EXAMPLE!
// const ingredients = [
//   prompt(`let\'s make past! Ingrediants 1?`),
//   prompt(`let\'s make past! Ingrediants 2?`),
//   prompt(`let\'s make past! Ingrediants 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// // THE SPREAD OPERATOR
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Create Shallow copies of ARRAYS AND TO MERGE ARRAYS TOGETHER
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// // Join two arrays together
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // ITERABLES: arrays, strings, maps, sets, and are NOT OBJECTS

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// restaurant.orderDelivery({
//   time: '23:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2
// })

// restaurant.orderDelivery({
//   time: '23:30',
//   address: "via del sole, 22",
//   starterIndex: 1,

// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories)

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
// console.log(restaurantName, hours, tags)

// // Default Values
// const {menu = [], starterMenu: starters} = restaurant
// console.log(menu, starters)

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj);
// console.log(a, b)
// // Nested Objets
// const {fri: {open: o, close: c}} = openingHours
// console.log(o, c)
// const {sat: {open: d, close: e}} = openingHours
// console.log(d, e)
// const{thu: {open: r, close: s}} = openingHours
// console.log(r, s )

//SWitching Variables!
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// const [starter, mainCourse] = (restaurant.order(0, 1))
// console.log(starter, mainCourse)

// // Nested Destructuring
// const nested = [ 2, 4, [5, 6]]
// // const [i, , j] = nested
// // console.log(i, j)
// const [i, s, [j, k]] = nested
// console.log(i, s, j, k)

// // default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)
