# as 로 이름 바꾸기

    import {sayHi as printHi} from "hi.js"

# 한 번에 다루기

## export 한번에 하기

    const a = 1;
    const b = 2;

    export {a, b as B} // export 시에도 바로 이름 바꿔서 추출가능

## improt 한번에 하기

    import * as test from "test.js"

# default export

default export 는 import 시에 중괄호를 안써도 된다. (그래서 리액트 컴포넌트를 default export할 때 import시에 중괄호를 안쓰는거)

한 페이지에 한개밖에 못쓴다.

    const a = 1;
    const name = "Jeong"
    const age = 26;

    export default a;

    // 혹은
    export default 1;
    export default {name, age}; // 이거는 {name: name, age:age} 로 인식해서 하나의 객체로 전달하는 동작. 즉, name과 age를 각각 export 하는 게 아니라, 묶어서



