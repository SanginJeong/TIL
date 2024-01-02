## 로딩 스피너 만드는 법

[참고링크](https://www.npmjs.com/package/react-spinners)

npm 설치 후 import 까지 해준다.

    npm install --save react-spinners

    import ClipLoader from "react-spinners/ClipLoader";

원하는 곳에 import한 ClipLoader 태그를 넣어준다.

    <ClipLoader
      color={color}
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />

loading이 true 일 시에는 보이고, false일 시에는 스피너가 사라진다.
조건문을 활용하면 된다.

color와 같이 스타일은 알아서 설정하면 된다.

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

