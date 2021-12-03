import React  from 'react';
import './App.css';
import Home from './components/Pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SigninPage from './components/Pages/signin';


function App() {
  return (
    <Router>
       
      <Switch>
        
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
     
      
    </Router>
  );
}

export default App;
