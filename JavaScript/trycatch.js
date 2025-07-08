// 원래는 에러가 나면 코드가 멈춘다. trycatch는 에러가 났을 때 원하는 동작을 catch문에 작성 가능
// try {
//   const test = 0;
//   console.log("에러 전");
//   test = 1; // 에러로 try문이 종료되고 catch문이 실행됨
//   console.log("에러 후");
// } catch (error) {
//   console.log("에러: ", error);
// }


// function printMember(members) {
//   for(let member of members){
//     console.log(member);
//   }
// }

// printMember(["a","b","c"]);
// printMember({"name":"Jeong"}); // 이코드 아래로는 아예 실행이 안됨
// printMember(["d","e","f"]);

// 하지만 trycatch문을 이용한다면
function printMember(members) {
  try {
    for(let member of members){
      console.log(member);
    }
  } catch (error) {
    console.log("에러:", error);
  }
}

printMember(["a","b","c"]);
printMember({"name":"Jeong"}); // 에러 발생 -> 프로그램 자체는 안멈춤
printMember(["d","e","f"]); // def 출력

// 정리 + finally

try {
  // 실행 코드
} catch (error) {
  // 에러가 발생했을 때 실행 코드
} finally {
 // 항상 실행할 코드
}