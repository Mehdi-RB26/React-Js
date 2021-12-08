import React  from 'react';
import './App.css';
import Home from './components/Pages';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider } from "./components/Auth";
import PrivateRoute from "./components/PrivateRoute";
import Home2 from './components/Pages/Home2';


function App() {
  return (
    <AuthProvider>
    <Router>
       
      <Switch>
        <PrivateRoute path="/home2" component={Home2} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
