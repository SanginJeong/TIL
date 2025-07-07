// parameter : 함수를 선언할 때 받는 매개변수
// argument : 함수를 호출할 때 넣어주는 매개변수

// arguments 객체 : arguments 객체는 화살표함수에서는 사용할 수 없다.

function word() {
  console.log(arguments)
}

word('나만', '없어', '고양이');

// rest parameter : arguments 객체와 다르게 배열이라는 점이 여러 메서드를 사용하기에 좋다.

function test(...args) {
  console.log(args.filter((v)=>v%2===0));
}

test(1,2,3,4,5) // 2,4