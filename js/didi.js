class Car{
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}
class Itinerary{
  constructor(car, mileage) {
    this.car = car;
    this.mileage = mileage;
  }
  start() {
    console.log(this.car);
  }
  end() {
    console.log(this.car.price * this.mileage);
  }
}

class Zhuanche extends Car{
  price = 2;
  constructor(code, name) {
    super(code, name);
  }
}

class Kuaiche extends Car{
  price = 1;
  constructor(code, name) {
    super(code, name);
  }
}

const kuaiA = new Kuaiche('A8998', '奥迪', 1);
const zhuanA = new Zhuanche('A8888', '兰博基尼', 2);

const kuaiAIti = new Itinerary(kuaiA, 5);
const zhuanAIti = new Itinerary(zhuanA, 5);
kuaiAIti.start()
kuaiAIti.end()
zhuanAIti.start()
zhuanAIti.end()