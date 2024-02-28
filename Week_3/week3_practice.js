function sayHappyBirthday() {
    console.log("Happy Birthday!");
}

for (var i = 0; i < 5; i++) {
    switch(i) {
        case i: 
            console.log("Inside Case " + i);
            i++;
            break;
        default:
            console.log("Default");
    }
    sayHappyBirthday();  
}
var conditionalB = true;
var counter = 1;
while (conditionalB) {
    if (counter % 3 == 0) {
        conditionalB = false;
        console.log(counter);
    }
    else {
        counter++;
        console.log("Not yet.");
    }
}

function findTreasure(x, y) {
    var treasureX = 3;
    var treasureY = 9;

    if (x == treasureX && y == treasureY) {
        console.log("Found the treasure");
    }
    while (x != treasureX) {
        if (x < treasureX) {
            console.log("Stepping to the right");
            x++;
        }
        else if(x > treasureX){
            console.log("Stepping to the left");
            x--;
        }
    } 
    var entered = true;
    while (y != treasureY) {
        if (y < treasureY) {
            console.log("Stepping to the up");
            y++;
        }
        else if(y > treasureY){
            console.log("Stepping to the down");
            y--;
        }
        entered = false;
    } 
    if (!entered) {
        console.log("Now the treasure is found");
    }
}

findTreasure(3, 9);
findTreasure(6, 3);
findTreasure(3,8);