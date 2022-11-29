/* VALUE === A PIECE OF DATA */
// console.log("jonas") /* jonah is a value */
// console.log(23) /* 23 is a value */

// let firstName = "Jonas";/* a variable with a value of Jonas */

// console.log(firstName)
// console.log(firstName)
// console.log(firstName)

// let myFirstJob = "coder"
// let myCurrentJob = "teacher" /* Good NAMING CONVENTION! */

// /* Variable === A box in which we can store a value! */

// console.log(myFirstJob)

/* EVERY VALUE IS EITHER AN OBJECT OR A PRIMITIVE! */

/* THERE ARE 7 PRIMITIVE DATA TYPES! */

/*(1) Numbers == Floating point numbers! Used for decimals or intergers! */

// (2) STRINGS == SEQUENCE OF CHARACTERS used for text

// (3)BOOLEAN == LOGICAL type that can only be TRUE or FALSE -> used for decision making

// (4)UNDEFINED == VALUE taken by a variable that is yet not defined -> let children; is an empty value!

// (5)NULL == ALSO MEANS EMPTY VALUE

// (6)SYMBOL(ES2015) == simply defines a value that is unique and cannot be changed!

// (7)BigInt(ES2020) == Larger intergers then NUMBER type can hold!

// let javaScriptIsFun = true;

// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "jonas");

// javaScriptIsFun = "YES!";
// console.log(javaScriptIsFun);
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(typeof year);
// console.log(year);

// year = 1991;
// console.log(year);
// console.log(typeof year);
// console.log(typeof null);

/* Declaring VARIABLES === LET CONST VAR */

// let age = 30;
// age = 31; /* let creates MUTABLE VARIABLES! */
// console.log(age);

// // const birth = 1991;
// // const birth = 1990 /* const creates an IMMUTABLE VARIABLE!
// // WE CANNOT DECLARE EMPTY VARIABLES*/

// /* VAR is the old E6 way of doing variable declaration!! */
// var job = "programmer";
// job = "teacher";

// // BASICALLY NEVER USE VAR XD

// /* ALWAYS PROPERLY DECLARE VARIABLE LET OR CONST! */
// lastName = "farah"; /* THIS IS A NOO NOO! */
// console.log(lastName);

/* BASIC OPERATORS!
OPERATOR === ALLOWS US TO COMBINE MULTIPLE VALUES AND DO ALL KIND OF WORK WITH VALUES! */

/* TYPES OF OPERATORS! */

//  ALL THESE ARE MATH OPERATORS!
// const now = 2037;
// const ageJonah = now - 1991;
// const ageSarah = now - 2018;

// console.log(ageJonah, ageSarah);
// console.log(ageJonah * 2, ageJonah / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "sadiq";
// const lastName = "farah";
// console.log(firstName + " " + lastName);

// let x = 10 + 5; /* Assignment operator! is = */
// x += 10; //x = x + 10
// x *= 4; // 100
// x++; // x = x + 1      ALL THESE ARE ASSIGNMENT OPERATORS
// x--; // x = x - 1
// console.log(x);

// // COMPARARISON OPERATORS

// console.log(ageJonah > ageSarah); //  >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageJonah = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);
// console.log(now - 1991, now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // y = 10 x = 10

// console.log(x, y);

// const averageAge = ageJonah + ageSarah / 2;
// console.log(ageJonah, ageSarah, averageAge);

// const firstName = "jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);
// // This is a pain way to do it!!
// /* BETTER METHOD IS TEMPLATE STRINGS */

// const jonasNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`WE can use back ticks for any regular strings`);

// console.log("string with \n\
// multiple\n\
// lines");
// // USING TEMPLATE STRING FOR MULTI-LINE STRING!
// console.log(`String
// Multiple
// line!`);

/* IF ELSE STATEMENTS! ---Control Structure*/
// const age = 15;

// if (age >= 18) {
//   console.log("sarah can start driving license!");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`sarah is too young. wait another ${yearsLeft} years`);
// }

// const birthYear = 1999;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

/* TYPE CONVERSION/ TYPE COERCION! */
// Type Conversion Below
// const inputYear = `1991`;
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number(`jonas`));
// console.log(typeof NaN); //Not a Number
// console.log(String(23), 23);

// // Type Coercion!
// console.log(`I am ` + 23 + ` years old`); //Java does this automatically behind the scenes!
// console.log(`23` + `10` - 3);
// // the MINUS operator js converted string to numbers above!
// console.log(`23` * `2`);
// let n = `1` + 1; //11
// n -= 1;
// console.log(n);

/* TRUTHY AND FALSY VALUES */

// FIVE FALSY VALUES:
//  0, '', undefined, null, NaN === Will become false when converted to a Boolean!
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(`jonas`));
// console.log(Boolean({}));
// console.log(Boolean(""));
// console.log(Boolean(``));

// let sarahName = "row";
// if (sarahName) {
//   console.log(`Her name is ${sarahName}`);
// } else {
//   console.log("that is not her name!");
// }

// let money = 0;
// if (money >= 1) {
//   console.log("you got some Bread! go spend it!");
// } else {
//   console.log("go get a job:(");
// }

// let height = 0;
// if (height) {
//   console.log("height is defined");
// } else {
//   console.log("height not defined!");
// }

/* EQUALITY OPERATORS == vs === */
// const age = `18`;
// const age = 18;
// if (age === 18) console.log("you just became an adult(strict)");
// if (age == 18) console.log("you just became an adult(loose)");
// // ALWAYS USE STRICT EQUALITY ===

// const favorite = Number(prompt("what's your favorite number?"));
// console.log(favorite, typeof favorite);

// if (favorite === 23) {
//   console.log("cool 23 is an amaizng number");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number");
// } else if (favorite === 9) {
//   console.log("9 is an awesome number");
// } else {
//   console.log("number is not 23, 9 or 7");
// }
// //Diference operator !==
// if (favorite !== 23) console.log("why not 23?");

// /* BOOLEAN LOGIC = THE AND OR & NOT OPERATORS */

// const hasDriverLicense = true; //Variable A
// const hasGoodVision = true; //Variable B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// // if (hasDriverLicense && hasGoodVision) {
// //   console.log("Sarah able to drive");
// // } else {
// //   console.log("someone else should drive...");
// // }

// const isTired = false; //Variable C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("someone else should drive...");
// }

// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(averageScoreKoalas);
// console.log(averageScoreDolphins);

// let draw = averageScoreDolphins === averageScoreKoalas;

// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log(`dolphins win the trophy!`)

// } else if (averageScoreKoalas > averageScoreDolphins) {
//     console.log(`Koalas win the Trophy!`)
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("we HAVE A DRAW! Both are winnners");
// }

/* BEST IF EXAMPLE --> UnderStand This! */

// const averageScoreDolphins = (97 + 112 + 80) / 3;
// const averageScoreKoalas = (109 + 95 + 50) / 3;
// console.log(averageScoreDolphins, averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//   console.log(`dolphins win the trophy!`);
// } else if (
//   averageScoreKoalas > averageScoreDolphins &&
//   averageScoreKoalas >= 100
// ) {
//   console.log(`Koalas win the Trophy!`);
// } else if (
//   averageScoreDolphins === averageScoreKoalas &&
//   averageScoreDolphins >= 100 &&
//   averageScoreKoalas >= 100
// ) {
//   console.log("we HAVE A DRAW! Both are winnners");
// } else {
//   console.log(`nobody is a winner!`);
// }

// const days = "sunday";

// switch (days) {
//   case "monday": //day === `monday
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the WEEKEND:D");
//     break;
//   default:
//     console.log("Not a valid daay!");
// }

// const day = "sunday";

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record Videos!");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("its the WEEEKEND!!");
// } else {
//   console.log("not a valid day!");
// }

/* DIFFERENCE BETWEEN STATEMENTS AND EXPRESSIONS */
// EXPRESSION=== A PIECE OF CODE THAT PRODUCES A VALUE.
// STATEMENTS=== FULL SENTENCES THAT TRANSLATE ACTIONS we want a program to perform like if else statement.

// 3 + 4;
// 1991;
// true && false && !false; //ALL EXPRESSIONS

// if (23 > 10) {
//   //STATEMENT else if
//   const str = "23 is bigger";
// }

// console.log(`i'm ${2037 - 1991} years old`);

/* CONDITIONAl(ternary) OPERATOR */
//another method to riding condition other then SWITCH and if else statements

// const age = 9;
// // age >= 18
// //   ? console.log("I like to drink wine")
// //   : console.log(`I like to drink water`);

// /* HAS 3 parts!  (1)condition (2)IF (3)ELSE  */
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine"; //Transform big block of code to small
// } else {
//   drink2 = "water";
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
