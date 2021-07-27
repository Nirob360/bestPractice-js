// method chaining use korun.
// bad

// class Product {
//   constructor(name) {
//     this.name = name;
//   }
//   setPrice(price) {
//     this.price = price;
//   }
//   setUnits(units) {
//     this.units = units;
//   }

//   save() {
//     console.log(this.name, this.price, this.units);
//   }
// }

// const product = new Product("bag");
// product.setPrice(23, 99);
// product.setUnits(12);
// product.save();

// goood practice
class Product {
  constructor(name) {
    this.name = name;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }
  setUnits(units) {
    this.units = units;
    return this;
  }

  save() {
    console.log(this.name);
    console.log(`Price ${this.price}`);
    console.log(`units ${this.units}`);
  }
}

const product = new Product("T-shirt").setPrice(600).setUnits(2).save();
