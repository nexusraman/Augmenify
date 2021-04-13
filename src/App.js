import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact' exact component={Contact} />
<<<<<<< HEAD
=======

>>>>>>> 7476ae44766c2677cf363aefa4aaef538352437d
        </Switch>
      </Router>
    </div>
  );
}

export default App;
