import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Route, Switch } from 'react-router';
import Registration from './components/Registration/Registration';
import Homepage from './components/Homepage/Homepage';
import UserLogin from './components/UserLogin/UserLogin';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom, usersAtom } from './recoil/atoms';

const App = () => {
  const user = useRecoilValue(userAtom);

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
            <UserLogin />
          </Route>
          <Route path='/register'>
            <Registration />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
