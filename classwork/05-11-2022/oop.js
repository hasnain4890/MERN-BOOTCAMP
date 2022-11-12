class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model + " MODEL";
  }
}

let myCar = new Model("BMW", "2022");
console.log(myCar);
console.log(myCar.show());
