import './App.css';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';


import Home from './pages';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import Patient from './pages/patient';
import Doctor from './pages/doctor';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
        <Route path='/patient' component={Patient}  />
        <Route path='/doctor' component={Doctor}  />
      </Switch>
    </Router>
    
    
  );
}

export default App;
