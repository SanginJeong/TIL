import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail';
import User from './pages/User';
import Login from './pages/Login';
import { useState } from 'react';


function App() {
  const [isLogin, setisLogin] = useState(false);
  const PrivatePage = () =>{
    return isLogin === true ? <User/> : <Navigate to = '/login'/>;
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id/:num' element={<ProductsDetail/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/user' element={<PrivatePage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
