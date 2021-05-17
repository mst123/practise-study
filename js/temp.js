// 空间复杂度 O(1) 时间复杂度O(N²)
/* var rotate = function(nums, k) {
  var n = k % nums.length;
  var temp;
  for (let i = 0; i < n; i++) {
    temp = nums.pop()
    nums.unshift(temp) // 时间复杂度 O(n)
  }
return nums;
}; */
var rotate = function (nums, k) {
  var n = k % nums.length;
  var l = nums.length;
  reverse(nums, 0, l - n - 1);
  reverse(nums, l - n, l - 1);
  reverse(nums, 0, l - 1);
  return nums
};
function reverse(arr, start, end) {
  var temp = null;
  for (let i = start; i < end; i++) { // i = end 代表指向同一位置，排除节约时间
    temp = arr[i];
    arr[i] = arr[end];
    arr[end] = temp;
    end--;
  }
  return arr
}