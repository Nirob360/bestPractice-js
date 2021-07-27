//Globle prototypes pollute na korai valo.
// bad practice

Array.prototype.myfunction = function myfunction() {
  //implementation
};

// Good practice
class MyArray extends Array {
  myFunt() {
    // implementation
  }
}
