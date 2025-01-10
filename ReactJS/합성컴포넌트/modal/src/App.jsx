import './App.css'
import { Routes, Route } from 'react-router';
import LoginPage from './pages/loginPage/LoginPage';
import WarningPage from './pages/warningPage/WarningPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/warn' element={<WarningPage/>}/>
      </Routes>
    </>
  )
}

export default App
