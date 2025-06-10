# meta 태그와 Open Graph

개발을 하다보면 가끔 head 태그 안에 많은 meta 태그들이 있는 것을 볼 수 있다.

head 태그는 title, favicon 과 같은 페이지의 정보들을 담는 태그이다.

특히 우리는 링크를 들어가기 전에 페이지에 대한 미리보기를 볼 수 있다. (대표적으로 페이스북)

이 이유가 바로 오픈 그래프 프로토콜 때문이다.


코드를 예시로 보면

    <meta property="og:title" content="콘텐츠 제목"> 
    <meta property="og:url" content="웹페이지 URL">
    <meta property="og:type" content="웹페이지 타입(blog, website 등)">
    <meta property="og:image" content="표시되는 이미지"> 
    <meta property="og:title" content="웹사이트 이름"> 
    <meta property="og:description" content="웹페이지 설명">

위와 같은 형식으로, 미리보기를 설정할 수 있다.

이 페이지가 배포를 한 후에 facebook debugger 로 디버그 해보면 내가 설정한대로 나올 것이다.