// 최대공약수

// 풀이1) 반복문 : 시간복잡도 O(N)
const x = 24;
const y = 18;
let GCD = 0;
for(let i=1; i<=y; i++){
  if(x%i===0 && y%i===0){
    GCD = i;
  }
}

// 풀이2) 유클리드 호제법 : 시간복잡도 O(logN)

//  num1를 num2로 나눈 나머지를 r이라고 했을 때, GCD(num1, num2) = GCD(num2, r)과 같다. r이 0이라면, 그 때의 num2가 최대공약수

const getGCD = (x,y) => {
  let r = 0;
  while(y > 0){
    r = x % y;
    x = y;
    y = r;
  }
  console.log(x);
  return x;
}
getGCD(x,y);


// 최소공배수
const LCM = (x * y) / GCD;


console.log(`최대공약수 : ${GCD}, 최소공배수 : ${LCM}`);