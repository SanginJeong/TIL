# URL 객체

[참고링크](https://developer.mozilla.org/ko/docs/Web/API/URL)

URL 인터페이스는 URL을 분석, 생성, 정규화, 인코딩 할 때 사용하며, URL의 각 구성요소를 쉽게 읽고 쓸 수 있는 속성을 제공한다.

## 생성자

주어진 절대 URL, 또는 상대 URL과 기준 URL 문자열을 사용해 생성한 URL 객체를 생성하고 반환한다.

    let url = new URL("https://abcd.kr/adads/?q=1&ex=rwe#3")

## 인스턴스

인스턴스를 다 외울순 없고 필요할 때마다 찾아쓰는 방법이 좋을 것 같다. 자주 쓰이는 몇 개만 정리해보자.

### hash

'#' 과 프래그먼트 식별자를 담는다.

    let url = new URL("https://abcd.kr/adads/?q=1&ex=rwe#3")
    url.hash // #3

### pathname

'/'와 URL 경로를 담는다

    let url = new URL("https://abcd.kr/adads/?q=1&ex=rwe#3")
    url.pathname // '/adads/'


### search

URL 매개변수의 문자열을 나타낸다. 어떤 매개변수라도 존재하는 경우 '?' 문자로 시작해, 모든 매개변수를 포함한다.

    let url = new URL("https://abcd.kr/adads/?q=1&ex=rwe#3")
    url.search //  '?q=1&ex=rwe'

### searchParams

search 속성의 매개변수 각각에 접근할 수 있는 URLSearchParams 객체

    let url = new URL("https://abcd.kr/adads/?q=1&ex=rwe#3")
    url.search //  '?q=1&ex=rwe'

    url.searchParams.get('q') // '1'
    url.searchParams.get('ex') // 'rwe'


## URLSearchParams를 통한 조작

    const url = new URL('https://example.com/path?page=1&sort=desc');

    console.log(url.searchParams.get('page')); // '1'
    url.searchParams.set('page', '2');
    url.searchParams.append('filter', 'new');

    console.log(url.toString()); // https://example.com/path?page=2&sort=desc&filter=new

