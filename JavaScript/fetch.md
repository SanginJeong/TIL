# fetch

fetch는 기본적으로 GET 요청을 보낸다.

다른 요청을 하고 싶을 때? 

두번째 argument로 다양한 옵션을 넘겨줄 수 있다.

    // POST 메서드 구현 예제
    async function postData(url = "", data = {}) {
      // 옵션 기본 값은 *로 강조
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE 등
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
      });
      return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
    }

    postData("https://example.com/answer", { answer: 42 }).then((data) => {
      console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
    });

** body에 데이터를 보낼때는 contentType과 같은 형식으로 보내야한다.

주로 json이니까 JSON.stringify해서 json문자열로 바꿔서 보내줘야함.