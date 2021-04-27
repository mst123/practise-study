class People {
  constructor(name, house) {
    this.name = name;
    this.house = house;
  }
  saySomething() {
    
  }
}

class A extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySomething() {
    console.log('I am A');
  }
}

class B extends People {
  constructor(name, house) {
    super(name, house);
  }
  saySomething() {
    console.log('I am B');
  }
}

class House {
  constructor(city) {
    this.city = city;
  }
  showHouse() {
    console.log('house in ' + this.city);
  }
}