/*
 * @Author: mashitu
 * @Date: 2021-05-08 15:19:19
 * @LastEditTime: 2021-05-08 17:50:25
 * @LastEditors: mashitu
 * @Description: 泛型约束
 */
interface withLength {
  length : number
}

function logLength<T extends withLength>(x : T): T {
  console.log(x.length);
  return x
}

// 泛型运用在类上
class Queue<T>{
  private stack = []
  constructor() {
    
  }
  push(item:T) {
    this.stack.push(item)
  }
  pop():T{
    return this.stack.shift()
  }
}
const queue1 = new Queue<number>()
queue1.push(1)
const tets1 = queue1.pop()
const queue2 = new Queue()
// 运用到接口上
interface KeyPair<K, V> {
  key: K;
  value: V
}

const key1: KeyPair<number, string> = {
  key: 222,
  value: 'safaf'
}
// 多类型数组
const arr1: Array<number | string> = [1, '22']
const arr2: (number | string)[] = [1,'22']