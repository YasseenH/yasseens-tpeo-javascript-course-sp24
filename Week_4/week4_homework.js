/**
 * Write a function named powersOfThree that prints out the powers of 
 * three up to 3⁹ (example: 1, 3, 9, …, 19683) using a for loop. 
 * Pick your favorite number out of all of these powers of three and 
 * also print out “This is my favorite power of three!” when your favorite 
 * power of three prints. 
 * Use a timeout to call this function after waiting 3 seconds.
 */
var power = 3;
function powersOfThree() {
    console.log(power);
    //this is my favorite power
    if (power == 27) {
        console.log("This is my favorite power of three!");
    }
    //increments power
    power *= 3;
}
var timeoutID = setInterval(powersOfThree, 3000);

/**
 * Write a function named everyTenSeconds that prints out “Hello World!”
 * to the terminal every 10 seconds for a total of 2 minutes. 
 * Feel free to create any helper functions you need to accomplish this. 
 * Test your function by calling it once.
 */
function everyTenSeconds() {
    console.log("Hello World!");
}

//calles the method 10 seconds
var timeoutID = setInterval(everyTenSeconds, 10000);

//stops after 2 minutes
setTimeout(clearInterval, 120000, timeoutID);