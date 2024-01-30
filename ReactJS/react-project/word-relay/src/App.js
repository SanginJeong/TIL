import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Participate from './component/Participate';
function App() {
  return (
    <>
      <div className="container">
        <Participate></Participate>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
