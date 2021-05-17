Function.prototype.selfApply = function (context) {
  const ctx = context || window;
  ctx.fnc = this;
  const arg = [...arguments].slice(1);
  // const arg = Array.slice.call(arguments, 1);
  ctx.fnc(arg)
  Reflect.deleteProperty(ctx, "fnc")
}