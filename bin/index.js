#! /usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
console.clear();
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcomeCalc() {
    let rainbowTitle = chalkAnimation.rainbow("Let's Start Calculation"); //start
    await sleep();
    rainbowTitle.stop();
    console.log(` _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|`);
}
await welcomeCalc();
async function askQues() {
    const answers = await inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "opt",
            message: "which operation do you want tp perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "input",
            name: "number1",
            message: "enter number1: ",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input";
                }
                else {
                    return true;
                }
            },
        },
        {
            type: "input",
            name: "number2",
            message: "enter number2: ",
            validate: function (input) {
                if (isNaN(input) || input === "") {
                    return "Not a valid input";
                }
                else {
                    return true;
                }
            },
        },
    ]);
    if (answers.opt == "Addition") {
        console.log(`${answers.number1} + ${answers.number2}= ${answers.number1 + answers.number2}`);
    }
    else if (answers.opt == "Subtraction") {
        console.log(`${answers.number1} - ${answers.number2}= ${answers.number1 - answers.number2}`);
    }
    else if (answers.opt == "Multiplication") {
        console.log(`${answers.number1} * ${answers.number2}= ${answers.number1 * answers.number2}`);
    }
    else if (answers.opt == "Division") {
        console.log(`${answers.number1} / ${answers.number2}= ${answers.number1 / answers.number2}`);
    }
}
;
async function startAgain() {
    do {
        await askQues();
        var doAgain = await inquirer
            .prompt({
            type: "input",
            name: "startAgain",
            message: "Do you want to continue? Press y or n: "
        });
    } while (doAgain.startAgain == "y" || doAgain.startAgain == "Y" || doAgain.startAgain == "yes" || doAgain.startAgain == "YES");
}
startAgain();
