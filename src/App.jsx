import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Organisms/Header';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import UsersContext from './contexts/UsersContext';
import { useContext } from 'react';
import Add from './components/Pages/Add';
import Footer from './components/Organisms/Footer';

const App = () => {

  const {currentUser} = useContext(UsersContext)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={currentUser ? <Home/> : <Navigate to='/register'/>}/>
        <Route path='/add' element={currentUser ? <Add/> : <Navigate to='/register'/>}></Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
