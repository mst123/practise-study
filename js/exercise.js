class SingleObj{
  login() {
    console.log('111');
  }
}
SingleObj.getInstance = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new SingleObj();
    }
    return instance;
  }
})()

const test1 = SingleObj.getInstance();
const test2 = SingleObj.getInstance();

console.log(test1 === test2);