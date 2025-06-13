# meta 태그에 대해서

## meta 태그

meta 태그란 HTML태그로 메타 데이터를 나타낸다. 여기서 메타 데이터란 데이터를 설명하는 데이터를 말한다.

주로 HTML 문서에서 정보를 포함하는 head태그에 포함된다.

## 사용예시 + 사용하는 이유

### 검색을 했을 때 사이트 설명 / 미리보기

구글에 검색했을 때 여러가지 결과들이 나오고 페이지의 정보들을 설명하는 description이 나온다.

이는 meta 태그의 name 속성을 description을 이용한 것이다.

    <meta
        name="description"
        content="원하는 물품을 검색해보고 구매해보세요."
    >

SNS 공유시에 미리보기도 오픈그래프 프로토콜 (OGP) 속성을 통해서 설정할 수 있다.

    <meta property="og:image" content="/static/images/brand/og_tag.png">
    <meta property="og:title" content="코드잇 | 코딩, 쉬워질 때도 됐다">
    <meta
        property="og:description"
        content="월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!"
    >
    <meta property="og:url" content="https://www.codeit.kr">



## 검색 엔진 최적화 (SEO)

meta 태그는 브라우저나 검색 로봇에게 해당 페이지의 정보를 알려준다. 예를 들어서 사이트의 핵심 키워드, 사이트의 목적 등은 사람의 눈으로 볼 수 없지만 이런 정보를 메타태그를 이용해서 표시하고 브라우저가 찾아서 보여준다.

SEO를 위해서 중요한 태그 몇 개를 가져왔는데 title, description, robots, 

    <meta name="title" content="">
    <meta name="description" content="">
    <meta name="robots" content="">
    <meta http-equiv="refresh" content="">
    <meta charset="utf-8">

title은 title 태그를 사용하기 때문에 거의 잘 안쓰이는 걸로 알고 있다.

description은 페이지의 간략한 소개로 SEO에 매우 중요하다.

robots는 크롤러에게 페이지를 어떻게 다룰지 지시한다. 예를 들어 

    <meta name="robots" content="index, follow"> // 페이지 인덱싱 허용, 링크 따라가기
    <meta name="robots" content="noindex, nofollow"> // 인덱싱 및 링크 추적 모두 금지

여기서 페이지 인덱싱은 검색 엔진이 웹사이트를 분석하고 정보를 수집,저장하는 과정이다.
흐름은 크롤링 -> 인덱싱 -> 검색

http-equiv 는 content초 후에 새로 고침을 하는 것이다

    <meta http-equiv="refresh" content="5"> // 5초 후 새로고침
    <meta http-equiv="refresh" content="5" url="www.naver.com"> // 5초후 해당 url 로 이동
