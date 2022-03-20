import './App.css';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';


import Home from './pages';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import TimeTable from './components/TimeTable';
import DoctorData from './components/Doctor/Data/Index';

function App() {
  return (
    /*<Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/signup' component={SignupPage} exact />
      </Switch>
    </Router>*/
    <DoctorData />
  );
}

export default App;
