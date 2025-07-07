// 함수 선언문 -> 함수 스코프

{
  function sayHi() {
      console.log("Hi");
  }
}



sayHi(); // Hi

// 함수 표현식 -> 함수 선언을 값처럼 사용하는 방식 (대표적으로 변수에 저장해서 사용, 이벤트리스너에 바로 함수사용), 저장하는 변수에따라 스코프를 가짐

const sayBye = function() {
    console.log("Bye");
}



