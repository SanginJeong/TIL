// 1. var의 호이스팅
console.log(vari); // undefined
var vari = 1;

// 2. function 의 호이스팅
console.log(hoist()); // function 은 선언 이후 어디에서든 쓸 수 있다. -> 코드 흐름에 맞지 않음
function hoist() { return "호이스팅" };


// 3. 화살표함수 의 호이스팅
console.log(arrowFn()); // ReferenceError: Cannot access 'arrowFn' before initialization
const arrowFn = () => { return "애로우" };
