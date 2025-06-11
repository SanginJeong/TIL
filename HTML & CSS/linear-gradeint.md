# linear-gradient (그라데이션)

background에 그라데이션을 넣을 때 사용한다.

## 기본 사용예시

HTML

    <div class="container">
      <h1>aespa</h1>
      <p>대한민국의 여성 4인조 그룹</p>
    </div>

CSS

    **linear-gradient: (방향, 시작, 종료) , 방향은 선택 (deg)
    background: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0));
    background: linear-gradient(90deg,rgba(0,0,0,1),rgba(0,0,0,0));
    background: linear-gradient(90deg,rgba(0,0,0,1) 40% ,rgba(0,0,0,0));


## 이미지와 함께 사용힐 때
그라데이션을 넣어준 후에 이미지 url을 넣어주면 된다.

    .container {
      background-image: 
        linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0)),
        url('some-image.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }


## 가져다쓰자.

box-shadow와 같이 gradient도 검색하면 gradient generator와 같이 내가 원하는 거 바로 가져다 쓸 수 있으니까 가져다쓰자.