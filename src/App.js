import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer'
function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;
