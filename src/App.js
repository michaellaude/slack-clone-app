import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserProvider from './api/user-provider.js';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/Signup' component={Signup}/>
            <Route path='/MainPage' component={MainPage}/>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;