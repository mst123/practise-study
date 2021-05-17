function MyPromise(executor) {
  this._status = "pending"  
  this._sucessFnc = null;
  this._errorFnc = null;
  var resolve = (res) => {
    if (this._status === "pending") {
      this._status = "resolve"
      this._sucessFnc(res)
    }
  }
  var reject = (res) => {
    if (this._status === "reject") {
      this._status = "reject"
      this._errorFnc(res)
    }
  }
  setTimeout(() => { // 使用setTimeout 是让resolve晚于then方法赋值
    executor(resolve, reject)
  }, 0)
}

MyPromise.prototype.then = function (successFunc, errorFunc) {
  this._sucessFnc = successFunc;
  this._errorFnc = errorFunc;
}

new MyPromise((resolve, reject) => {
  resolve(123)
}).then((res) => {
  console.log(res);
})



var demo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2000")
  },2000)
})
demo.then((res) => {
  console.log(res);
}, error => {
  console.log(error);
})