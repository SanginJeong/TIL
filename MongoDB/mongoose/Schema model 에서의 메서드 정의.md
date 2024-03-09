## Schema에는 필드 뿐 아니라 우리가 원하는 메서드도 정의할 수 있다.

여기서 필드란 Schema의 형태

    const userSchema = Schema({
      name:{
        type:String,
        required:true,
      },
    })


### jwt 토큰 실행하는 메서드 정의

    userSchema.methods.generateToken = function () {
      const token = jwt.sign({ _id: this._id }, JWT_SECRET_KEY, {expiresIn: '1d'});
      return token
    }

## 백에서 프론트로 유저 정보를 보낼 때 비밀번호 등 필요없는 정보는 안보내도록 하는 메서드

    userSchema.methods.toJSON = function () {
      const obj = this._doc;
      delete obj.password; // 그냥 객체에서 delete
      return obj
    }