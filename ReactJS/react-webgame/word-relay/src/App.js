import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Participate from './component/Participate';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
function App() {
  const [list, setList] = useState([]);
  return (
    <>
      <div className="wrap">
        <div className="container">
          <Routes>
            <Route path='/' element={<Participate setList={setList}/>} />
            <Route path='/main' element = {<Main list = {list}/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
