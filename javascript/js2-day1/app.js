console.log("Hello world");

function sayHello(word) {
  console.log('hello ' + word);
}

sayHello('allie');

// Method 1
var o = {};
o.name = 'Allie';
o.address = '123 Main St';
o.age = 21;

o.age += 20;

// Method 2
var o2 = {
  name: 'Allie',
  address: '123 Main St',
  age: 21,
  // You can add functions inside an object, it's call method
  sayHello: function() {
    console.log('hello, object method!');
  },
  fruit: ['Apples', 'Oranges', 'Kiwi']
};
o2.sayHello();

o2.age += 20;

var myArray = ['apples', 'oranges', 'kiwi']

console.log(o);
console.log(o2);
console.log(myArray[1]);
console.log(o2.fruit[0]);
