// function er nam long and descriptive deyar cesta korun.
// bad practice
function email(user) {
  // implementation
}
// good practice

function sendEmailToUser(email) {
  // implementation
}
// onek arguments aboid korun,

// bad practice
function getProducts(fields, fromDate, toDate) {
  //implementation
}
// Good practice
function getProducts({ fields, fromDate, toDate }) {
  //implementation
}

// functin arguments 3
// default arguments use korun, conditional na.
// bad practice
function createShape(type) {
  const shapeType = type || "circle";
}
//Good practice
function createShape(type = "circle") {
  //....
}
//function arguments 4
// parameter hisebe flag pathanor projon nei

// bad practice
function createFile(name, isPublic) {
  if (isPublic) {
    fs.create(`./public/${name}`);
  } else {
    fs.create(name);
  }
}

//Good practice

function createFile(name) {
  fs.create(name);
}
function creactePublicFile(name) {
  createFile(`./public/${name}`);
}
