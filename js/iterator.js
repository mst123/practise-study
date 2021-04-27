class Interator{
  index = 0
  constructor(container) {
    this.list = container.list
  }
  next() {
    if (this.hasNext()) {
      // 先返回，后加加
      return this.list[this.index++]
    }
  }
  hasNext() {
    if (this.index >= this.list.length) {
      return false
    }
    return true
  }
}
class Container{
  constructor(list) {
    this.list = list;
  }
  getInterator() {
    return new Interator(this);
  }
}