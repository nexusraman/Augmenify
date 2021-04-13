import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';
import withTracker from './components/withTracker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={withTracker(Home)} />
          <Route path='/products' exact component={withTracker(Products)} />
          <Route path='/contact' exact component={withTracker(Contact)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
