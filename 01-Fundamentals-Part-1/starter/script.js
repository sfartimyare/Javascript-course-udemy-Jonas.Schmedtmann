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

const now = 2037;
const ageJonah = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(now - 1991, now - 2018);
