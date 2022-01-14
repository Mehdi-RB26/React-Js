import React  from 'react';
import './App.css';
import Home from './components/Pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home2 from './components/Pages/Home2';


function App() {
  return (
   
    <Router>
       
      <Switch>
        <Route path="/Home2" component={Home2} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
    
  );
}

export default App;
