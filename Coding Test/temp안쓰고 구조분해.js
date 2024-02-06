// temp 이용 법
const list = [1,2,3,4,5];
let temp = list[1];
list[1] = list[4];
list[4] = temp;
console.log(list);

// 구조분해 이용법
const arr = [1,2,3,4,5];

[arr[1],arr[4]] = [arr[4], arr[1]]

console.log(arr);
