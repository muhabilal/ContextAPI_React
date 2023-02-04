
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

//React Router Dom
//npm i react-router-dom
function App() {
  return (
    <>
      {/* <ButtonCmp btn='Show me' />
      <h1>Hello world</h1>
      <ButtonCmp btn='Click me' /> */}
      {/* <State /> */}
      <Router>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/Login' element={< Login />} />
        </Routes>
      </Router>
    </>


  );
}

export default App;
