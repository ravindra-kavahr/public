const fs = require("fs/promises");
const readline = require("readline/promises");

const encoder = new TextEncoder();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const writeGreetingToFile = name => {
    return fs.writeFile("sample.txt", encoder.encode(`Hello, ${name}. Hope you are doing well.`));
}

rl.question("What is your name? ")
    .then((name) => {
        return writeGreetingToFile(name);
    })
    .then(() => {
        console.log("Successfully written text to file");
    })
    .catch((err) => {
        console.log("Faced some exception while writing to a file");
        console.log(err);
    })
    .finally(() => rl.close()); 