// Named Function Expression (기명 함수 표현식) : 함수 표현식으로 함수를 만들 때 이름을 붙여주는 방식, 이름이 있는 함수표현식

const sayHi = function printHi() {
  console.log("Hi");
}

// 함수표현식으로 선언된 함수는 name프로퍼티를 자동으로 갖게된다
// console.log(printHi); // Error
console.log(sayHi.name); // printHi 


// 재귀함수를 표현할 때 자주 사용한다
let countdown = function printCountdown(n) {
  console.log(n);
  if (n === 0) {
    console.log('End!');
  } else {
    printCountdown(n - 1);
  }
};

let myFunction = countdown;

countdown = null;

myFunction(5); // 정상적으로 동작
