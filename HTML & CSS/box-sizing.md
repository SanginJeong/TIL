# box sizing

box-sizing 속성은 요소의 너비와 높이를 계산하는 방법을 지정한다.

값은 content-box 와 border-box 가 있고, 기본 값은 content-box이다.

## content-box

width, height 속성이 컨텐츠 영역만 포함하고, 테두리,margin,padding 는 밖에 추가된다.

    .box {
      width: 300px;
      height: 300px;
      border : 10px solid black;
    }

위와 같은 코드일 때 총 너비는 320px이 된다.


따라서 content-box일 때 요소의 크기는 지정해주는 값이 컨텐츠의 너비이다.

## border-box

border-box는 padding , border, 컨텐트 너비를 다 합쳐서 지정해준 크기가 된다.

주의할 점은 margin은 상관없다. 사실 이건 content-box도 margin은 상관없다.

    .box {
      width: 300px;
      height: 300px;
      border : 10px solid black;
      padding : 10px;
    }

이러면 컨텐트의 너비는 260px이 되고, 양쪽 border 와 padding 이 각 20px이므로 300px이 맞춰진다.


