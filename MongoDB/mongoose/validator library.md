## validator 라이브러리

validator 라이브러리를 알게 되었다.

그냥 코드로 치는 것보다 라이브러리를 사용하면 복잡한 validator를 구현하지 않아도 그냥 가져와도 됨

[공식문서](https://www.npmjs.com/package/validator)

## 예시코드

라이브러리 사용하지 않고 직접 코드로 구현

email : {
    type: String,
    validate:{
      validator: function(value){
          if(!value.includes('@')){
          throw new Error('이메일 형식이 올바르지 않습니다.');
       }
      }
    }
  }

validator.js 라이브러리 사용

email : {
    type: String,
    validate:{
      validator: function(value){
        if(!validator.isEmail(value)){
          throw new Error('이메일 형식이 올바르지 않습니다.');
        }
      }
    }
  }


이 외에도 많은 기능들이 있으니 문서를 참고해서 사용하도록 하자.