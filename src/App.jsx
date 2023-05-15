import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Organisms/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
