/**
 * @Descripttion : 
 * @Author       : 马识途
 * @Date         : 2020-05-07 10:17:06
 * @LastEditTime: 2020-05-07 10:21:03
 * @FilePath     : \projecte:\codeFile\sometime\filter.js
*/
const arr = [1,2,3,4,5,6,7,8]
const arrHandle1 = arr.filter(item => {
  if(item%2===0){
    return item
  }
})
const arrHandle2 = arr.filter(item => {
  if(item%2===0){
    return item
  }
  return false
})
const arrHandle3 = arr.filter(item => {
  if(item%2===0){
    return true
  }
  return false
})
console.log(arrHandle1); [ 2, 4, 6, 8 ]
console.log(arrHandle2); [ 2, 4, 6, 8 ]
console.log(arrHandle3); [ 2, 4, 6, 8 ]
