# em vs rem

## em

em은 부모 사이즈의 크기라고 생각. 아래 예시에서 1em은 16px인 것이다.

    <div id="parent">
      16px
      <div id="child">
        64px
      </div>
    </div>

    #parent {
      font-size: 16px;
    }

    #child {
      font-size: 4em;
    }


## rem

가장 최상위 태그 즉, html 태그의 크기이다.
html은 16px이기 때문에, 1rem은 16px인 셈이다.

    <html>
      <body>
            18px
            <div id="other">
              32px
            </div>
      </body>
    </html>

    html {
      font-size: 16px;
    }

    body {
      font-size: 18px;
    }

    #other {
      font-size: 2rem;
    }