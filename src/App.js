import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Mbs4List from './components/mbs4/mbs4ListComponent';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <br />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/mbs4' element={<Mbs4List />}></Route>


      </Routes>
      <br />
    </Router>
    
  );
}

export default App;
