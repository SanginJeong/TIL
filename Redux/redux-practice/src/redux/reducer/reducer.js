let initialState = {
  count:0,
  id: '',
  pw: '',
}

const reducer = (state=initialState, action) => {
  if(action.type === 'increase'){
    console.log(state);
    return {...state, count: state.count+1}
  }
  else if(action.type === 'decrease'){
    return {...state, count: state.count-1}
  }
  else if (action.type === 'login'){
    console.log(state);
    return {...state, id: action.payload.id,pw:action.payload.pw}
  }

  // 조건에 안맞아도 return값은 항상 있어야 하니까
  return {...state};
}

export default reducer;