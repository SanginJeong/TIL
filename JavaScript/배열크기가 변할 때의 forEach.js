// forEach의 최대 반복 횟수는 처음 배열 요소의 길이 -> 이후 내부동작에의해 배열의 길이가 더 늘어난다 하더라도 최대 반복 횟수는 처음 배열요소의 길이이다.
const arr = [1,2,3];
arr.forEach((v,i)=>{
  arr.push("append");
  console.log(arr)
})
// [ 1, 2, 3, 'append' ]
// [ 1, 2, 3, 'append', 'append' ]
// [ 1, 2, 3, 'append', 'append', 'append' ]


// 하지만 배열 길이가 줄어들 때는 줄어든 이후 배열의 길이 만큼까지 돈다.
arr.forEach((v,i)=>{
  arr.pop();
  console.log(arr);
})

// 처음 길이는 6이었지만 중간에 줄어들면서 만낫을때 반복이 멈춤
// [ 1, 2, 3, 'append', 'append' ]
// [ 1, 2, 3, 'append' ]
// [ 1, 2, 3 ]