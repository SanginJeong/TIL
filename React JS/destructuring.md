## props 를 구조 분해로 받기

    function App() {
      return (
        <Box name = {FrontEnd}/>
      )
    }

  Box Component

    function Box( {FrontEnd} ) {
      console.log(FrontEnd)
      return (

      )
    }

props로 받았을 때는 props.name으로 접근해야 FrontEnd에 접근할 수 있지만 {FrontEnd} 구조분해로 받으면 바로 FrontEnd를 사용할 수 있다.