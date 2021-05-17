Function.prototype.selfBind = function (context) {
  const ctx = context || window;
  ctx.fnc = this;
  const arg = [...arguments].slice(1);
  return function () {
    ctx.fnc(...arg)
  }
} 