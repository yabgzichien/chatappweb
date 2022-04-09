import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Screens
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <Router>
        <Switch>
          <Route path='/login'>
            <LoginScreen />
          </Route>
          <Route path='/register'>
            <RegisterScreen />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
