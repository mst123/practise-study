/*
 * @Author: mashitu
 * @Date: 2021-01-22 12:15:51
 * @LastEditTime: 2021-01-22 12:18:21
 * @LastEditors: mashitu
 * @Description: 防抖函数
 */
let flag = false;
window.addEventListener("pointermove", () => {
  if (flag) {
    return;
  }
  flag = true;
  window.requestAnimationFrame(() => {
    /* 
     * 处理事件
    */
    flag = false;
  })
})