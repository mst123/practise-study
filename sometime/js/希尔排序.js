function shellSort (arr) {
	var len = arr.length;
	var temp, gap = 1;
	while (gap < len /3 ) {
		gap = gap * 3 + 1
	}
	while (gap >= 1) {
		for (var i = gap; i < len; i++) {
			temp = arr[i]
			for (var j = i - gap; j >= 0 && arr[j] > temp; j = j - gap) {
				arr[j+gap] = arr[j]
			}
			arr[j+gap] = temp
		}
		gap = (gap - 1) / 3
	}
	return arr
}


console.log(shellSort ([1, 4, 2, 7, 9, 8, 3, 6]));