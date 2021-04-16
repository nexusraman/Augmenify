import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import ArtificialIntelligence from './components/pages/Services/ArtificialIntelligence'
import WebDevelopment from './components/pages/Services/WebDevelopment'

import Contact from './components/pages/Contact';
import Footer from './components/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ServiceData from './util/ServicesData'
function App() {
  return (
    <div className='App'>

      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' exact component={Products} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/ArtificialIntelligence' exact component={ArtificialIntelligence} serv={[ServiceData.Artificial]} />
          <Route path='/WebDevelopment' exact component={WebDevelopment} />
          <Route path='/MobileDevelopment' exact component={ArtificialIntelligence} />
          <Route path='/RoboticsAutomation' exact component={ArtificialIntelligence} />
          <Route path='/FinancialServices' exact component={ArtificialIntelligence} />
          <Route path='/ITInfrastructure' exact component={ArtificialIntelligence} />
          <Route path='/contact' exact component={Contact} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
