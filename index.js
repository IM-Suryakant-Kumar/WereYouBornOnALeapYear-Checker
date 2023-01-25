// Import Statements
const readlinesync = require("readline-sync");
const chalk = require("chalk");

// Productivity
const success = chalk.hex("#3ae374");
const failure = chalk.hex("#ff4d4d");
const hightlight = chalk.blueBright;


const user = readlinesync.question(chalk.blue(`Enter Your Name : `));
console.log(hightlight(`Welcome ${user}`));

const dob = readlinesync.question(chalk.blue(`Enter your birth-date in DD/MM/YY format : `));

function validateDOB(date) {
  const arr = date.split("/");

  let userDD = arr[0];
  let userMM = arr[1];
  let userYY = arr[2];

  if (isNaN(userDD) || isNaN(userMM) || isNaN(userYY) || Number(userDD) <= 0 || Number(userMM) <= 0 || Number(userYY) <= 0 || Number(userDD) > 31 || Number(userMM) > 12
  ) {
    console.log(hightlight("Please enter the valid date ❌"));
  } else {
    leapYear(userYY);
  }
}

function leapYear(year) {
  if (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0)) {
    console.log(success.underline.bold(`Contrats! ${user}!! your birth year is a leap year`));
    console.log(hightlight.underline.bold(`Don't hesitate to take a snap share this on your social handles`)
    );
  } else {
    console.log(failure(`${user}!! your birth year is not a leap year`));
  }
}

// Invoke Functions
validateDOB(dob);
