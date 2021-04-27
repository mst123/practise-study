function log(target, name, descriptor){
  const oldFnc = descriptor.value;
  descriptor.value = function(){
    console.log(target, name, descriptor);
    // return 是为了确保不丢失函数返回值
    return oldFnc.call(this, arguments);
  }
}

class Math {
  @log
  add(a, b) {
    return a + b
  }
}