function op(a,b,name="jeong") {
  console.log(a,b,name);
}

op(1,2)

// 옵셔널 파라미터는 내가 정해줘도 되고, default값을 설정해줘도 된다. 중요한건 순서가 밀리는 것

function opTest(a, name="jeong", b) {
  console.log(a,name,b);
}

opTest(1,2) // 1 2 undefined