/**
 * 
 * This function uses setTimeout method provided by JavaScript to demonstrate it's async nature
 * 
 * Normally, we would expect to get the logs in below sequence.
 * 
 * Start of function
 * Task complete
 * Addition result is some_number
 * End of function
 * 
 * However, when we call add function the output is something like below
 * Start of function
 * End of function
 * Task complete
 * Addition result is some_number
 * 
 * This is because even though the wait time is zero millisceonds in setTimeout method it's still an asynchronous call
 * Non-async code is always executed right away and that's why it is crucial to not having any blocking code in synchronous blocks.
 * 
 * JS does not wait for async code to complete but rather it'll maintain a queue from which it'll show the results when there is no more sync code.
 * 
 */
function add(a, b) {
    console.log("Start of function");
    setTimeout(() => {
        console.log("Task complete");
        console.log("Addition result is " + (a + b));
    }, 0);
    console.log("End of function");
}

add(3, 4);