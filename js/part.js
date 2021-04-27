// 停车场
class Park{
  constructor(floors) {
    this.floors = floors;
    this.camera = new Camera();
    this.screen = new Screen();
    this.carLists = {};
  }
  in(car) {
    this.beforeIn();
    console.log(`${car.code}进去了`);
    const info = this.camera.takePic(car);
    const rFI = parseInt(Math.random() * 3);
    const rPI =  parseInt(Math.random() * 100);
    // 忽略停在同一个车位里
    this.carLists[info.code] = {
      inTime: info.time,
      place: this.floors[rFI].places[rPI].in()
    };
  }
  out(car) {
    const info = this.camera.takePic(car);
    const stayTime = Date.now() - this.carLists[info.code].inTime;
    this.carLists[info.code].place.out();
    this.screen.show(`${car.code} 停车${stayTime}毫秒`);
    this.carLists[info.code] = null;
    console.log(`${car.code}出来了`);
  }
  beforeIn() {
    for (let i = 0; i < this.floors.length; i++) {
      console.log(`第${i+1}层还剩${this.floors[i].getEmptyNumber()}个空余车位`);
    }
  }
}
// 层
class Floor{
  constructor(index, places) {
    this.index = index;
    this.places = places;
  }
  getEmptyNumber() {
    let count = 0;
    this.places.forEach(place => {
      if (place.empty) {
        count++
      }
    });
    return count;
  }
}
// 车位
class Place{
  empty = true;
  constructor() {
    
  }
  in() {
    this.empty = false;
    return this;
  }
  out() {
    this.empty = true;
    return this;
  }
}
// 摄像头
class Camera{
  constructor() {
    
  }
  takePic(car) {
    return {
      code: car.code,
      time: Date.now()
    }
  }
}
// 屏幕
class Screen{
  constructor(){
  
  }
  show(msg) {
    console.log(msg);
  }
}
// 车
class Car{
  constructor(code) {
    this.code = code;
  }
}
// 初始化
const floors = [];
for (let i = 0; i < 3; i++) {
  const floor = [];
  for (let i = 0; i < 100; i++) {
    floor.push(new Place());
  }
  floors.push(new Floor(i + 1, floor));
}
const park = new Park(floors);
console.log(park);
// 模拟车
const car1 = new Car("1111")
const car2 = new Car("2222")
const car3 = new Car("3333")
const car4 = new Car("4444")

park.in(car1)
park.in(car2)
park.out(car1)
park.in(car3)
park.in(car4)
park.out(car2)
park.out(car4)
park.out(car3)
