
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NoteState from './context/notes/NoteState';
import NavBar from './pages/NavBar';
//React Router Dom
//npm i react-router-dom
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/NavBar' element={< NavBar />} />
          </Routes>
        </Router>
      </NoteState>
    </>


  );
}

export default App;
