import './App.css';
import 'react-chat-elements/dist/main.css';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';


import Home from './pages';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import Patient from './pages/patient';
import Doctor from './pages/doctor';
import AdminPage from './pages/admin';
import PatientHome from './pages/patient';


function App() {
  return (
   <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
      </Switch>
    </Router>
    
    
  );
}

export default App;
