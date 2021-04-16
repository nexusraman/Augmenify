import './App.css';
import Navbar from './components/Navbar';
import Products from './components/pages/Products';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import withTracker from './components/withTracker';
import ScrollToTop from './components/ScrollToTop';
import ServicePage from './components/pages/Services/ServicePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import WhyUs from './components/WhyUsSection';
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
            <Route path='/ArtificialIntelligence' exact component={ServicePage} />
            <Route path='/WebDevelopment' exact component={ServicePage} />
            <Route path='/MobileDevelopment' exact component={ServicePage} />
            <Route path='/RoboticsAutomation' exact component={ServicePage} />
            <Route path='/FinancialServices' exact component={ServicePage} />
            <Route path='/ITInfrastructure' exact component={ServicePage} />
          </Switch>
          <WhyUs />
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
