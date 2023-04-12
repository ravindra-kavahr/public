function add(a, b) {
    const result = a + b;
    console.log("Addition result = " + result);
    return result;
}

function subtract(a, b) {
    const result = a - b;
    console.log("Subtraction result = " + result);
    return result;
}

module.exports = {
    add,
    subtract
};