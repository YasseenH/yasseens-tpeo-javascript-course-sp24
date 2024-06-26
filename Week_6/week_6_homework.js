/*
Question 1: Write a function, reverse, that accepts one parameter: string. 
In the function, return the string but reversed (Example: if “hey” is the 
input, then return “yeh”). Call this function three times each with 
different inputs and print the results to the terminal.
*/
function reverse(string) {
    var result = "";
    for (var i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}
console.log(reverse("Hello"));
console.log(reverse("JS"));
console.log(reverse("Car"));

/*
Question 2: Write a function, numVowels, that accepts one parameter: string. 
In the function, return the number of vowels string has. Call this function 
three times each with different inputs and print the results to the terminal.
*/

function numVowels(string) {
    var num = 0;
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        var currentCharacter = string[i];
        if (currentCharacter === "a" || currentCharacter === "e" || currentCharacter === "i"
            || currentCharacter === "o" || currentCharacter === "u") {
                num++;
            }
    }
    return num;
}

console.log(numVowels("Hello"));
console.log(numVowels("JS"));
console.log(numVowels("Car"));

/* 
Question 3: Write a function, numStringsShorterThanLength that accepts two parameters: 
strings (an array of strings) and length (a number). In the function, return the number 
of strings in strings that have a length less than length. Call this function three times 
each with different inputs and print the results to the terminal.
*/

function numStringsShorterThanLength(strings, size) {
    var result = 0;
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < size) {
            result++;
        }
    }
    return result;
}

console.log(numStringsShorterThanLength(["hi", "bye", "noone"], 4));
console.log(numStringsShorterThanLength(["going", "falling", "sizes"], 4));
console.log(numStringsShorterThanLength(["five", "four", "three"], 4));