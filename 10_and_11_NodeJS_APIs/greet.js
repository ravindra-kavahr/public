const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter name to greet : ", el => {
    console.log("Hello " + el);

    rl.close();
});