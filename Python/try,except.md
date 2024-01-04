## try, except

### 문제를 풀던 중 입력이 주어지지 않았는데 입력이 끝나면 멈춰야 했다.

### 해결

try,except 를 이용해서 에러가 나면 반복문을 멈추기러 했다.

    while True:
      try:
        print(a+b)
      except:
        break


### 간과한 점

에러가 있으면 except 코드를 실행한다. -> 반복문을 멈춘다 를 인지하지 못하고 있었다.

