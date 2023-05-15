import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Organisms/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/register'/>
        <Route path='/login'/>
      </Routes>
    </>
  );
}

export default App;
