## req.params

라우터의 매개변수이다.

/:id/:name 경로가 있다고 가정할 때

    router.get('/:id/:name', (req, res, next) => {

      console.log(req.params) // { id: '1', name: 'Kim' }

      <!-- id가 필요할 때 -->
      console.log(req.params.id) // 1
    });


## req.query

클라이언트에서 쿼리에 대한 요청 처리할 때

주로 GET 요청에 대해서 처리한다.

    await axios.get(`www.abc.com/post?title=hello)

    router.get('/:id/:name', (req, res, next) => {
      console.log(req.query) // {title: hello} 
    });


## req.body

클라이언트에서 요청한 정보에 대한 수정,추가 등 객체를 반환


