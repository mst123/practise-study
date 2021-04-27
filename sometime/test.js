const STR = "ab/sfa/ret/ree/sgg/heh/f"
function removeSlashByNum(num) {
  const arr1 = STR.split("/")
  if (num <= 0 || num >= arr1.length) {
    return STR
  } else {
    return arr1.slice(0, num).join("/") + '' + arr1.slice(num).join("/")
  }
}
console.log(removeSlashByNum(0));
console.log(removeSlashByNum(1));