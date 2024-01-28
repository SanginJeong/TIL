import { createStore } from "redux";
import reducer from "./reducer/reducer";
// reduer.js에서 만든 reducer함수를 store에 createStore(reducer) 해줌

let store = createStore(reducer);

// 처음에 Provide할때 store는 정의되지않았기 때문에 여기서 만들어서
// 보내주는거
export default store;
