//案例一
interface Person {
  name: string;
  age: number;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};

// 案例二
interface Animal {
  name: string;
  age: number;
}

interface Person {
  name: string;
  age: number;
  gender: number
}
// 要判断目标类型`Person`是否能够兼容输入的源类型`Animal`
function getName(animal: Animal): string {
  return animal.name;
}

let p = {
  name: 'zhufeng',
  age: 10,
  gender: 0
}

getName(p);  // 不报错，因为p有name和age属性
//只有在传参的时候两个变量之间才会进行兼容性的比较，赋值的时候并不会比较,会直接报错
let y = {  //会报错
  name: 'zhufeng',
  age: 10,
  gender: 0
}

let a: Animal = {  //会报错
  name: 'zhufeng',
  age: 10,
  gender: 0
}