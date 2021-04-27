function handle(arr) {
  let map = new Map();
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])) {
      map.set(arr[i], true); 
    } else { 
      map.set(arr[i], false);
      array.push(arr[i]);
    }
  } 
  return array ;
};
