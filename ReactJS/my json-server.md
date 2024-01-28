## json-server 이용했을 때 프로젝트 배포

json-server는 근본적으로 내 로컬호스트에서 조그맣게 사용하는 db임

그런데 배포를 하려고 하니 로컬호스트는 다른 사람들이 못봄

그래서 이 문제를 여기서 해결해줌

[my json-server](https://my-json-server.typicode.com/)

위 페이지를 들어가보면 아래 문구가 있다.

1. Create a repository on GitHub (<your-username>/<your-repo>)
2. Create a db.json file
3. Visit https://my-json-server.typicode.com/<your-username>/<your-repo> to access your server

3번이 중요한데, 내 프로젝트코드에서 localhost에서 불러왔던 url을 3번의 형식과 같이 바꿔줘야한다.

즉, 깃헙에 db.json과 내 프로젝트를 올리면 my-json-server에서 내 db.json파일을 보고 데이터들을 보내주는 것

