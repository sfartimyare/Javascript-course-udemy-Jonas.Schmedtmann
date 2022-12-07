"use strict";

// let HasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive:D");

// /* FUNCTIONS === a piece of code that we can reuse over and over again in our code */

// function logger() {
//   console.log("SIMPLE FUNCTION EXAMPLE!");
// }

// logger(); //CALLING /INVOKING function
/* FUNCTION IS LIKE A MACHINE // LIKE A FOOD PROCESSOR */

// function foodProcessor(oranges, berries) {
//   const foodType = `The ${oranges} oranges and the ${berries} Berries in total count to ${
//     oranges + berries
//   } fruits`;
//   return foodType;
// }

// const appleJuice = foodProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = foodProcessor(10, 15);
// console.log(appleOrangeJuice);

// const num = Number(`23`);
// /* FUNCTION DECLARATION down below...*/
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

// /* FUNCTION EXPRESSION*/
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1996);
// console.log(age2);

// Arrow Function

// const calculateName = (myName, myAge) => {
//   const retirement = 65 - myAge;
//   const ageAndName = `My name is ${myName} and I am ${myAge} years old. I will retire in ${retirement} years from now`;
//   return ageAndName;
// };
// const isMyName = calculateName("sadiq", 25);
// const isMyName2 = calculateName("richard", 40);
// console.log(isMyName);

// console.log(calculateName(`morty`, 40));

// const calcAge3 = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `Este hombre ${firstName} retires in ${retirement} years`;
// };

// console.log(calcAge3(1996, "sadiq"));

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/* FUNCTIONS REVIEW  */

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement}!`
// }

// const callAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// console.log(callAge(1996));

// const yearsUntilRetirement2 = function (birthYear, firstName) {
//   const age = callAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired!`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement2(1991, `jonas`));
// console.log(yearsUntilRetirement2(1950, `mike`));

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already Retired!`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1996, "sadiq"));
// console.log(yearsUntilRetirement(1920, "mike"));

// const calcAverage = function (a, b, c) {
//   return (a + b + c) / 3;
// };
// console.log(calcAverage(22, 23, 24));

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins are the champions (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas are the Champions (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`There are no winners!`);
//   }
// };

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// checkWinner(scoreDolphins, scoreKoalas);

/* FIRST DATA STRUCTURES! */
/* ARRAYS: big table to throw data and reference them later */
// const friend1 = "michael";
// const friend2 = "steven";
// const friend3 = "peter";

// const year = new Array(112, 1991, 2021, 11);
// console.log(year);

// const friends = ["michael", "steven", "peter"];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// console.log(friends[0]);

// friends[2] = "Jayy";
// console.log(friends);

// const firstName = ["jonas"];
// const jonas = [firstName, "brocode", 2037 - 1991, "teacher", friends];
// console.log(jonas);

// EXERCISE
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// ADD ELEMENTS
// const friends = ["Michael", "steven", "peter"];
// const newLength = friends.push("jay");
// console.log(friends);
// friends.unshift("John");
// console.log(friends);
// // REMOVE ELEMENTS
// const popped = friends.pop(); //remove last
// console.log(friends);
// console.log(popped);
// const shifted = friends.shift(); //Remove first
// console.log(friends);
// console.log(shifted);

// console.log(friends.indexOf("steven"));
// console.log(friends.includes("steven"));
// console.log(friends.includes("bob"));

// if (friends.includes("peter")) {
//   console.log("you have a friend called peter");
// }

// const bill = prompt([]);
// tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(tip);

// const calcAge1 = (bills) =>
//   bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// ;

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// const jonasArray = [
//   "jonas",
//   "brocode",
//   2037 - 1991,
//   "teacher",
//   ["micheal", "peter", "steven"],
// ];

// const jonas = {
//   firstName: "jonas",
//   lastName: "bro-code",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Steven", "Peter"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["firstName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about Jonas? Choose between firstName, lastName, age, job, friends"
// );

// console.log(jonas[interestedIn]);

// const sadiq = {
//   lastName: "farah",
//   age: 2022 - 1996,
//   favoriteDrinks: ["root-Beer", "energy Drinks"],
//   hobbies: ["reading", "traveling", "pingPong"],
//   favoriteNumbers: [7, 13, 42, 33, 56],
//   job: "Desktop Technician",
// };

// // const interestedIn = prompt(
// //   "pick one to know more about sadiq: lastName, age, favoriteDrinks. hobbies, favoriteNumbers, job "
// // );

// // if (sadiq[interestedIn]) {
// //   console.log(sadiq[interestedIn]);
// // } else {
// //   console.log("wrong request!");
// // }

// // sadiq.location = "portugal";
// // sadiq["twitter"] = "@sadiqbrocode";
// // console.log(sadiq);

// //sadiq has 3 hobbies and his best favorite hobby is traveling.

// console.log(
//   `${sadiq.lastName} has ${sadiq.hobbies.length} hobbies and his favorite hobby is ${sadiq.hobbies[1]}`
// );

// const jonah = {
//   firstName: "jonah",
//   lastName: "bro-Code",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["michael", "peter", "Steven"],
//   hasDriverLicense: true,

//METHOD === ANY FUNCTION ATTACHED TO An OBJECT
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYear;
// },

// calcAge: function () {
//   this.age = 2037 - this.birthYear;
//   return this.age;
// },
// };

// console.log(jonah.calcAge());

// console.log(jonah.age);

// console.log(jonah["calcAge"](1991));

//Challenge
// Jonas is 46-year old teacher, and he has a driver's lecense"

// const sadiq = {
//   firstName: "sadiq",
//   lastName: "farah",
//   yearOfBirth: 1996,
//   job: "desktop technician",
//   friends: ["ahmed", "abdi", "mohamed"],
//   hasADegree: false,
//   yearsOfWork: [2019, 2020, 2021, 2022],

//   // `Sadiq Farah was born 1996 and works as a ----. He has 3 friends who are named ---. Sadiq doesn't have a four year degree but has a two year degree. He has worked as ---- during the years --
//   calcAge: function () {
//     this.currentAge = 2022 - this.yearOfBirth;
//     return this.currentAge;
//   },
// };

// console.log(sadiq.calcAge());
// console.log(
//   `${sadiq.firstName} ${sadiq.lastName} was born in ${
//     sadiq.yearOfBirth
//   } and is ${sadiq.calcAge()} years old. He has ${
//     sadiq.friends.length
//   } friends named ${sadiq["friends"]}. ${sadiq.firstName} ${
//     sadiq.hasADegree ? "has a" : "doesn't have"
//   } a four year degree but has a two year degree. He has worked as a ${
//     sadiq["job"]
//   } during the years of ${sadiq["yearsOfWork"]} and 2023.`
// );

// // const aboutSadiq = prompt(
// //   "choose between firstName, lastName, job, age, friends, yearsofwork, hasADegree"
// // );

// // console.log(sadiq[aboutSadiq]);

// sadiq.location = "Minnesota";

// sadiq.carModel = "dodge caliber";
// console.log(sadiq);

// const mark = {
//   firstName: "Mark ",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return Math.floor(this.bmi);
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: " Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return Math.floor(this.bmi);
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${
//       mark.firstName + mark.lastName
//     }'s BMI (${mark.calcBMI()}) is higher then ${
//       john.firstName + john.lastName
//     }'s BMI (${john.calcBMI()})`
//   );
// } else {
//   console.log(
//     `${
//       john.firstName + john.lastName
//     }'s BMI (${john.calcBMI()}) is higher then ${
//       mark.firstName + mark.lastName
//     }'s BMI (${mark.calcBMI()})`
//   );
// }

// FOR lOOP has 3 parts!
//FOR LOOP keeps running while condition is TRUE;
// for (let i = 2; i <= 10; i++) {
//   console.log(`lifting weights repetition ${i}`);
// }
// wanted to log a string 10 times! we used a FOR LOOP

// const jonasArray = [
//   "jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   //Reading from jonas Array
//   console.log(jonasArray[i], typeof jonasArray[i]);

//   //FIlling a types array
//   // types[i] = typeof jonasArray[i];

//   types.push(typeof jonasArray[i]);
// }
// console.log(types);

// const years = [1988, 1996, 2015, 2011, 2004, 1940];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//   age.push(2037 - years[i]);
// }
// console.log(age);

// // CONTINUE AND BREAK in loops
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("---Break with NUMBER---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;

//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// LOOPING BACKWARDS
// const jonas = [
//   "jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["michael", "peter", "steven"],
//   true,
// ];

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// HOW TO CREATE A LOOP INSIDE A LOOP

// for (let i = 1; i < 4; i++) {
//   console.log(`-------Starting Exercise ${i}`);
//   for (let ii = 1; ii <= 4; ii++) {
//     console.log(`Exercise${i}: lifting weights repetition ${ii}`);
//   }
// }

// WHILE LOOP

// for (let i = 0; i <= 10; i++) {
//   console.log(`lifting weights repetition ${i}`);
// }

// let i = 1;
// while (i <= 10) {
//   console.log(`WHILE: lifting weights repetition ${i}`);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice} `);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log(`loop is about to end!`);
// }

// FINAL CODING CHALLENGE!!

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   // const tip = calTip(bills[i]);
//   // tips.push(tip);
//   // totals.push(bills[i] + tips[i]);

//   tips.push(calTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// //CALCULATE AVERAGE!
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
