import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Home />
    </Router>
    
  );
}

export default App;
