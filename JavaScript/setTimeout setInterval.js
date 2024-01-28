// setTimeout, setInterval 예제
// from에 명시한 숫자부터 to에 명시한 숫자까지 출력해주는 함수 printNumbers(from, to)를 만들어보세요. 숫자는 일 초 간격으로 출력되어야 합니다.

// #1 setInterval로 구현하기
const printNumbers = (from, to) => {
  const intervalID = setInterval(()=>{
    console.log(from);
    if(from === to){
      clearInterval(intervalID);
    }
    from++;
  },1000);
}
console.log(printNumbers(1,5));

// #2 setTimeout로 구현하기 (재귀)

const printNumbersBysetTimeout = (from, to) => {
  setTimeout(function go() {
    console.log(from);
    if(from < to){
      setTimeout(go,1000);
    }
    from++;
  },1000);
}
console.log(printNumbersBysetTimeout(1,5));