/*
Let’s practice working with strings and arrays by writing a few different functions:
truncate(string, number): In this function, we want to cut off the last number 
characters of string and return that new string
*/

function truncate(string, number) {
    return string.substring(0, string.length - number);
}

console.log(truncate("Hello World!", 1));
console.log(truncate("JavaScript", 6));
console.log(truncate("TPEO", 4));

/*
capitalizeFirstLetters(strings): In this function, we want to capitalize the first 
letter of each string in strings and return the updated array
*/

function capitalizeFirstLetters(strings) {
    for (var i = 0 ; i < strings.length ; ++i) {
        strings[i] = strings[i][0].toUpperCase() + strings[i].substring(1);
    }

    return strings
}

console.log(capitalizeFirstLetters(["kailer", "yassen", "aarushi"]));


/*
swapcase(string): In this function, we want to edit a string so that its lowercase 
letters become uppercase and so that its uppercase letters become lowercase
*/

function swapcase(string) {
    var newString = "";
    var uppercase = string.toUpperCase();
    var lowercase = string.toLowerCase();
    for (var i = 0 ; i < string.length ; i++) {
        if (string[i] == uppercase[i]) {
            newString += lowercase[i];
        } else {
            newString += uppercase[i];
        }
    }
    return newString;
}

console.log(swapcase("aBcDefgHIJ"));