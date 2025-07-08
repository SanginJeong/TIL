const arr = [2,2,3,4,5];

const sum = arr.reduce((acc,cur, idx, src)=>{ // 누산기, 현재 값, 현재 인덱스, 원본배열
  console.log("idx", idx);
  console.log("acc", acc);
  console.log("cur", cur);
  console.log("-----------")
  return acc + cur
}); 

console.log(sum) // 초기값을 설정해주지 않으면 1번째 인덱스부터 콜백함수가 실행 됨. 하지만 누산기에는 값이 들어가있긴 하다.
