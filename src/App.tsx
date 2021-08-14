import React from 'react';
import { useSelector } from 'react-redux';
import { HomeDrawer } from './components/Drawer';
import { Login } from './components/Login';
import { selectUser } from './features/userSlice';

function App() {

  const userStatus = useSelector(selectUser);

  return (
    <div className="App">
      {userStatus ? <HomeDrawer /> : <Login />}
      <Login />
    </div>
  );
}

export { App };
