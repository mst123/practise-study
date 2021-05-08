// 函数的多种声明方式
const add = (x: number, y: number): number => {
  return x + y
}
function add1(x: number, y: number) : number {
  return x + y
}
interface Add{
  (x: number, y: number) : number
}
let add2 : (x: number, y: number) => number = add