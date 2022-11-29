/* JAVASCRIPT FUNDAMENTALS = PART 1 ASSIGNMENTS */

// let country;
// let continent;
// let population;

// country = "somalia"
// continent = "Africa"
// population = (prompt("enter Population"))

// console.log("Country: ", country)
// console.log("the continent is: ", continent)
// console.log("population of somalia is:", population)

// let isIsland = "Somalia";
// const language = "somali";

// console.log(language);
// console.log(typeof isIsland);
// console.log(isIsland);
// console.log(typeof language);

// CHALLENGE code exercise! (1)
// const markWeight = 78;
// const markHeight = 1.69;

// const johnWeight = 92;
// const johnHeight = 1.95;

// // BMI = mass / (height * weight)
// let markBmi = markWeight / markHeight ** 2;
// let johnBmi = johnWeight / johnHeight ** 2;

// markHigherBMI = markBmi > johnBmi;

// console.log(markBmi);
// console.log(johnBmi);
// console.log(markHigherBMI);

// // SECOND DATA FOR FIRST CHALLENGE EXERCISE
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMImark = massMark / heightMark ** 2;
// const BMIjohn = massJohn / (heightJohn * heightJohn);

// if (BMImark > BMIjohn) {
//   console.log(`Mark's BMI ${BMImark} is higher then Jon's ${BMIjohn}!`);
// } else {
//   console.log(`John's BMI ${BMIjohn} is higher then Mark's!${BMImark}`);
// }

// console.log(BMImark);
// console.log(BMIjohn);

/* IF ELSE STATEMENTS WELL MADE */
// let scoreDolphin = (97 + 112 + 101) / 3;
// let scoreKoala = (109 + 95 + 106) / 3;
// console.log(scoreDolphin, scoreKoala);

// if (scoreDolphin > scoreKoala && scoreDolphin >= 100) {
//   console.log("Dolphins win the trophy!!");
// } else if (scoreKoala > scoreDolphin && scoreKoala >= 100) {
//   console.log(`Koalas win the Trophy!`);
// } else if (
//   scoreDolphin === scoreKoala &&
//   scoreKoala > 100 &&
//   scoreDolphin > 100
// ) {
//   console.log(`Its a Draw. Both teams win!`);
// } else {
//   console.log(`NOBODY WINS`);
// }

/* SWITCH EXAMPLE DOWN BELOW */
// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("got to coding meetup");
//     break;
//   case "tuesday":
//     console.log("prepare Theory Videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record Videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Its the weekend. Time to relax!");
//     break;
//   default:
//     console.log("pick a valid day please!");
//     break;
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
