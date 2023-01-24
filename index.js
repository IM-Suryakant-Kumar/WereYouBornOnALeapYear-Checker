// Import Statements
const readlinesync = require("readline-sync");
const chalk = require("chalk");

// Productivity
const success = chalk.bgHex("#3ae374").black;
const failure = chalk.bgHex("#ff4d4d").black;
const hightlight = chalk.bgBlueBright.black;

// Variable Declarations
let user;

// Object Declarations

// Function Declarations
function welcome() {
  user = readlinesync.question(`What's your name? `);
  console.log(`\nWelcome ${user} to ${hightlight(" WERE YOU BORN IN A LEAP YEAR! ")}`);
}

function checkDOB(){
    const dob = readlinesync.question(`Enter your DateOfBirth In the format "DD/MM/YY"? `);
    const arr = dob.split('/');
    if(arr.length === 1 || arr[arr.length - 1] === ''){
        console.log(failure('Wrong Format! ❌ '));
        return;
    }
    const year = arr.pop();


    if((year % 4 === 0) || (year % 100 !== 0 && year % 400 === 0)){
        console.log(success(`Contarts!, You were born on a leap year `));
        console.log(hightlight(`\nDon't hesitate to take a SNAP share this on your social handles`));
    } else {
        console.log(failure(`Sorry!, You were not born on a leap year `));
    }
}

// Invoke Functions
welcome();
checkDOB();
