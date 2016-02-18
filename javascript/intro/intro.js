// WebLab - Intro to Programming Week

// alert("Hello, world!");

var message = 'Hello, world!'; // string

var x = 27; // integer

var temps = [14, 32, 36, 40]; // array

var person = { // object with property with a string as value
  first: 'John',
  last: 'Doe',
  age: 25,
  address: {
    city: 'Somewhere',
    zip: 12345
  }
};

if(person.age >= 21 && person.age < 65) {
  console.log('Hello, ' + person.first + '!');
} else if (person.age >= 65) {
    console.log('Guess what? It\'s discount time!')
} else {
  console.log('You are not old enough to be here!');
}

// console.log(person.address.city);
