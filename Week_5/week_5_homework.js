/* Create a constructor for a Car object. 
Each Car object should contain the following properties: model, year, color, and mpg. 
Use the constructor to create 3 different Car objects. 
Print out the mpg of each car to the console.
*/

//Constructor
function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

//Creates the 3 objects of type Car
var Honda = new Car("Civic", 2012, "Black", 62000);
var Toyota = new Car("Prius", 2010, "White", 10000);
var Nissan = new Car("Altima", 2022, "Gray", 12000);

//Prints out their mpg
console.log(Honda.mpg);
console.log(Toyota.mpg);
console.log(Nissan.mpg);

/* Create a constructor for a Vehicle object. 
Each Vehicle object should contain only one property: car. 
Using the 3 Car objects you created previously, create 3 Vehicle objects. 
Print out the mpg of the car property in each Vehicle object.
*/

//Constructor
function Vehicle(Car) {
    this.Car = Car;
}

//Creates the 3 objects of type vehicle
var myHonda = new Vehicle(Honda);
var myToyota = new Vehicle(Toyota);
var myNissan = new Vehicle(Nissan);

//Prints out their mpg
console.log(myHonda.Car.mpg);
console.log(myToyota.Car.mpg);
console.log(myNissan.Car.mpg);