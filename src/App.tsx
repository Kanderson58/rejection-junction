import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router';
import Registration from './components/Registration/Registration';
import Homepage from './components/Homepage/Homepage';
import UserLogin from './components/UserLogin/UserLogin';

const App = () => {
  const [users, setUsers] = useState(['kara', 'larry', 'joe']);
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/home'>
          <Homepage />
        </Route>
        <Route path='/user-login'>
          <UserLogin setUser={setUser} users={users} />
        </Route>
        <Route path='/register'>
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
