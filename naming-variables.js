// // bad Practice
//variable naming 1

let daysll = 10;
let ok;

if (daysll < 30) {
  ok = true;
}

// // good practice
//variable naming 1

const MAX_ALLOED_LOGIN_EXPIRATION_DAYS = 30;

let daysSinceLastLogin = 10;

const isUserLoggedIn = daysSinceLastLogin < MAX_ALLOED_LOGIN_EXPIRATION_DAYS;

// variable name practice
//variable naming 2

// bad practice
let nameValue;
let theProduct;

// good practice
//variable naming 2
const name ;
const  products ;

// variable naming 3
// emon vabe variable er nam din jeno purpose mone rakhte na hoy
// very bad practice

const products = ["T-shirt", "Shoes", "Watches", "Bags"];

products.forEach((p) => {
  doSomeThing();
  // what does 'p' stand for?
  doSomeThingElse(p);
});

// very good practice

const products = ["T-shirt", "Shoes", "Watches", "Bags"];
products.forEach((product) => {
  doSomeThing();
  doSomeThingElse(product);
});

// variable naming 4
// unnecessary context add korar kono projon nai.
// bad practice
const products = {
  produnctId: 1,
  productName: "T-Shirt",
  productPrice: 8.99,
  productUnits: 12,
};
// good practice

const products = {
  id: 1,
  name: "T-Shrit",
  price: 8.99,
  units: 12,
};


