Function.prototype.selfCall = function(context) {
  const ctx = context || window;
  const arg = [...arguments].slice(1);
  ctx.fnc = this;
  ctx.fnc(...arg);
  Reflect.deleteProperty(ctx, "fnc")
}