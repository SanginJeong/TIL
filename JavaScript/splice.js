// splice 의 세번째 요소는 해당 자리에 추가할 값이다. -> 그 이후의 인덱스도 전부 추가할 요소들

const arr = [0,1,2,3];

// 한 개 삭제
arr.splice(1,1,5);
console.log(arr);

// 여러 개 삭제 -> 여러개를 삭제하고 5를 넣음
arr.splice(1,2,5);


console.log(arr);