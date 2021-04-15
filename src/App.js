import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import withTracker from './components/withTracker';
import ScrollToTop from './components/ScrollToTop';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
function App() {
  return (
    <div className='App'>

      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path='/' exact component={withTracker(Home)} />
            <Route path='/about' component={About} />
            <Route path='/products' exact component={withTracker(Products)} />
            <Route path='/contact' exact component={withTracker(Contact)} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
