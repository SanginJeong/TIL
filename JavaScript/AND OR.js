// && 연산자

// 기본 형태를 잘 생각하고 대입하자. 단, false && false는 헷갈리니까 앞에게 나오고, true && true는 뒤에게 나온다는점 외워두자
console.log(false && false); // false
console.log(true && true) // true
console.log(false && true) // false
console.log(true && false) // false

console.log(null && undefined) // null
console.log(1 && 2) // 2
console.log(0 && 1) // 0
console.log(1 && undefined) // undefined


// || 연산자

// 앞에서부터 true가 나오면 바로 리턴
console.log(false || false) // false
console.log(true || true) // true
console.log(false || true) // true
console.log(true || false) // true

console.log(null || undefined) // undefined
console.log(1 || 2) // 1
console.log(0 || 1) // 1
console.log(1 || undefined) // 1
