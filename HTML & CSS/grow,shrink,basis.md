# flex-grow, flex-shrink, flex-basis

## flex-grow

flex 속성에서 요소의 크기를 얼마나 채울지 정하는 속성

해당 요소를 꽉 채우고 싶을 때 1을 자주 사용한다.

    .red, .blue, .green {
      width: 200px;
      height: 200px;
    }

    .red {
      background-color: red;
    }

    .blue {
      flex-grow : 1;
      background-color: blue;
    }

    .green {
      background-color: green;
    }

    .area{
      display:flex;
    }



## flex-shrink

grow와 반대로 요소의 크기를 줄인다.


## flex-basis

플렉스 아이템의 초기 크기를 지정한다.

기본속성은 auto이고, width와 동일한 basis값을 설정한다면 flex-basis를 우선시한다.

