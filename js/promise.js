function MyPromise(executor) {
  var _this = this;
  this._status = "pending";
  this._successCallBack = null;
  this._errorCallBack = null;
  var resolve = function (res) {
    if (_this._status === "pending") {
      _this._status = "fulfilled";
      _this._nextSuccess(_this._successCallBack(res))
    }
  }
  var reject = function (res) {
    if (_this._status === "pending") {
      _this._status = "rejected";
      _this._errorCallBack(res);
    }
  }
  // 把内部函数resolve, reject作为参数，把传进来的函数执行一遍
  executor(resolve, reject);
}
MyPromise.prototype.then = function (sucess, error) {
  this._successCallBack = sucess;
  this._errorCallBack = error;
  var _this = this;
  return new MyPromise((resolve, reject) => {
    const resolveFnc = resolve;
    _this._nextSuccess = function () {
      resolveFnc();
    }
  });
}

new MyPromise(function(resolve, reject) {
  setTimeout(() => resolve('5秒已过'), 5000)
}).then((res) => {
  console.log(res);
  return new MyPromise(function(resolve, reject) {
    setTimeout(() => resolve('10秒已过'), 5000)
  })
})
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 3000);
}).then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 3000);
  })
}).then((res) => {
  console.log(res);
}).catch((error) => {
  console.log(error);
})