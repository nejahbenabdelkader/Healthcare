import './App.css';

import {BrowserRouter as Router, Switch, Route} from  'react-router-dom';


import Home from './pages';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import TimeTable from './components/TimeTable';
import DoctorData from './components/Doctor/Data/Index';
import ProfileDoctor from './components/Doctor/Data/Profile';
import DataDoctor from './components/Doctor/Data/Index';
import DatePicker from './components/Doctor/DatePicker';
import Doctor from './components/Doctor';
import DataDrug from './components/Drug';

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
