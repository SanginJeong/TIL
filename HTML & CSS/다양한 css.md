# BEM (Block Element Modifier)

BEM은 CSS 클래스 이름을 짓는 규칙이다. 블록(Block), 요소(Element), 변경자(Modifier) 형태로 쓴다. 블록은 div같은 영역, 요소는 button, input같은 요소를 의미한다. 변경자는 요소의 변형을 표시하는 것

## BEM의 형태

    .block__element--modifier

## 예시

    .signin-form { /* 로그인 폼 */ }

    .signin-form__input { /* 로그인 폼의 인풋 */ }

    .signin-form__input.signin-form__input--password { /* 로그인 폼의 비밀번호 인풋 */ }

    .signin-form__button { /* 로그인 폼의 버튼 */ }

    .signin-form__button.signin-form__button--submit { /* 로그인 폼의 제출 버튼 */ }

[더 알아보기](https://naradesign.github.io/bem-by-example.html)

# Sass(SCSS)

CSS는 웹 표준이기 때문에 문법이 빠르게 바뀌지 않는다. 그래서 개발자들이 사용하기 편한 여러가지 문법을 추가한 새로운 언어를 만들기 시작했는데, 그 중에 많이 쓰이는 것이 Sass다.

변수, 네스팅(Nesting) 문법, 믹스인(Mixin) 등등 다양한 기능을 제공한다. 이 중에서 변수,네스팅 등은 많은 사람들이 좋다고 생각해서 웹 표준으로 흡수되기도 했다.

Sass는 프리프로세서(Preprocessor) 스크립트 언어라고 하는데, 프리프로세서라는 프로그램을 통해서 Sass코드를 CSS 코드로 변환하기 때문이다.

Sass에는 기존 Sass와 SCSS 두 가지. ㅜㄴ법이 있는데, 최근에는 CSS의 모든 문법 위에서 확장된 문법을 사용하는 SCSS를 많이 사용한다.

## 네스팅 (Nesting) 예시

### SCSS

    nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    li { display: inline-block; }

    a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
    }
    }

### css

    nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

    nav li {
    display: inline-block;
    }

    nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
    }

## 믹스인 예시

### SCSS

    @mixin theme($theme: DarkGray) {
    background: $theme;
    box-shadow: 0 0 1px rgba($theme, .25);
    color: #fff;
    }

    .info {
    @include theme;
    }

    .alert {
    @include theme($theme: DarkRed);
    }

    .success {
    @include theme($theme: DarkGreen);
    }

### css

    .info {
    background: DarkGray;
    box-shadow: 0 0 1px rgba(DarkGray, .25);
    color: #fff;
    }

    .alert {
    background: DarkRed;
    box-shadow: 0 0 1px rgba(DarkRed, .25);
    color: #fff;
    }

    .success {
    background: DarkGreen;
    box-shadow: 0 0 1px rgba(DarkGreen, .25);
    color: #fff;
    }

[더 알아보기](https://sass-lang.com/guide/)

# CSS-in-JS

자바스크립트 코드로 CSS를 작성하는 방식. 자바스크립트 코드가 실행되면서 CSS 코드가 생성됨. 컴포넌트를 만들면서 동시에 CSS를 개발할 수 있다는 장점이 있다.

하지만 렌더링 속도가 느려진다는 단점이 있다.

대표적으로 Styled Components, emotion 이 있다.

# Tailwindcss

Utility-first라는 방법론으로 디자인을 적용하는 라이브러리이다.

각 CSS속성을 CSS 클래스로 만든다. CSS 속성을 작성하는 게 아니라 미리 잘 정의된 클래스들을 가지고 조합해서 디자인을 적용한다.

# 정리

결국 각 방법과 라이브러리들마다 장단점이 있기에 프로젝트 규모, 팀과의 소통을 통해서 어떤 CSS를 사용할 건지 정해서 사용하는게 맞겠다.

다음은 참고링크들이다.

[CSS-in-JS의 대안](https://careerly.co.kr/comments/70061)

[카카오웹툰은 CSS를 어떻게 작성하고 있을까?](https://tech.kakaoent.com/front-end/2022/220210-css-in-kakaowebtoon/)

[TailwindCSS 를 왜 도입했고, 어떻게 사용했을까?](https://tech.kakaoent.com/front-end/2022/221013-tailwind-and-design-system/)

[우리가 CSS-in-JS와 헤어지는 이유](https://junghan92.medium.com/%EB%B2%88%EC%97%AD-%EC%9A%B0%EB%A6%AC%EA%B0%80-css-in-js%EC%99%80-%ED%97%A4%EC%96%B4%EC%A7%80%EB%8A%94-%EC%9D%B4%EC%9C%A0-a2e726d6ace6)
