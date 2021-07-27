// add mehods on the .prototype when writing constructrs
//Bad practice

// function Player(name, age) {
//   this.name = name;
//   this.age = age;

//   this.play = function () {
//     console.log(`${this.name} is plaing`);
//   };
// }

// const sakib = new Player("Sakib", 35);

// sakib.play();

function player(name, age) {
  this.name = name;
  this.age = age;
}

player.prototype.play = function () {
  console.log(`${this.name} is playing`);
};

const sakib = new player("sakib", 40);
sakib.play();
