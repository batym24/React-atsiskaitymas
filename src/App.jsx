import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Organisms/Header';
import Register from './components/Pages/Register';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login'/>
      </Routes>
    </>
  );
}

export default App;
