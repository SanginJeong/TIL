const mongoose = require("mongoose");
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const { Schema } = mongoose;

const userSchema = new Schema({
  name : {
    type: String, // 스키마에서는 타입을 정할수 있다.
  },
  email : {
    type: String,
    required: true, // required : 무조건 들어가야 하는 값
    validate:{
      validator: function(value){
        // if(!value.includes('@')){
        //   throw new Error('이메일 형식이 올바르지 않습니다.');
        // }
        if(!validator.isEmail(value)){
          throw new Error('이메일 형식이 올바르지 않습니다.');
        }
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true, // 문자열의 공백을 없애줌
  },
  age: {
    type: Number,
    default: 0, // age가 입력 안될 시 기본 값 0
  }
});

const User = mongoose.model("User", userSchema);

const newUser = new User({
  name:'Jeong', 
  email: 'abc@gmail.com', 
  password: '    12345',  // trim에 의해서 공백 없어짐
});


newUser.save().then(value=>console.log('value:', value));

User.find({name: 'Jeong'})
  .select('name -_id') // 원하는 조건만 뽑을 수 있음 (빼고싶은거는 -)
  .then((value)=>console.log('value: ', value))