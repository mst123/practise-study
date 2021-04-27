class Subject {
  constructor() {
    this.state = 0;
    this.observers = [];
  }
  getState() {
    return this.state;
  }
  setState(state) {
    this.state = state;
    this.notifyAllObservers();
  }
  notifyAllObservers() {
    this.observers.forEach(observer => {
      observer.update();
      console.log(`${observer.name} -- updata --- ${this.getState()}`);
    })
  }
  attach(observer) {
    this.observers.push(observer);
  }
}
// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.subject.attach(this);
  }
  update() {
    console.log('更新');
  }
}

const subject = new Subject();
const ob1 = new Observer('ob1', subject);
const ob2 = new Observer('ob2', subject);
const ob3 = new Observer('ob3', subject);
subject.setState(1);
subject.setState(2);
subject.setState(3);
