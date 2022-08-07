import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';

import Mbs1List from './components/mbs1/mbs1ListComponent';
import Mbs2List from './components/mbs2/mbs2ListComponent';
import Mbs3List from './components/mbs3/mbs3ListComponent';
import Mbs4List from './components/mbs4/mbs4ListComponent';
import About from './components/About';
import MoreInfo from './pages/MoreInfo';


function App() {
  return (
    <Router>
      <NavbarComponent />
      <br />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/mbs1' element={<Mbs1List />}></Route>
        <Route exact path='/mbs2' element={<Mbs2List />}></Route>
        <Route exact path='/mbs3' element={<Mbs3List />}></Route>
        <Route exact path='/mbs4' element={<Mbs4List />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/mbs4/:itemNo' element={<MoreInfo />}></Route>


      </Routes>
      <br />
    </Router>
    
  );
}

export default App;
