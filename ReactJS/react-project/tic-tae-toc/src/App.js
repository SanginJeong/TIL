import logo from './logo.svg';
import './App.css';
import Board from './component/Board';

function App() {

  return (
    <>
      <Board></Board>
      <div className='result'>이미 선택된 자리입니다.</div>
    </>
  );
}

export default App;
