
import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/form/SignIn/SignIn';
import SignUp from './components/form/SignUp/SignUp';
function App() {
  return (
    <>
    <Route exact path="/signIn" component={SignIn}/>
      <Route exact path="/signUp" component={SignUp}/>
      </>
  );
}

export default App;
