
import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import SignIn from './components/form/SignIn/SignIn';
import SignUp from './components/form/SignUp/SignUp';
import Upload from './components/Upload/Upload';
function App() {
  return (
    <>
     <Route exact path="/" component={Dashboard}/>
    <Route exact path="/signIn" component={SignIn}/>
      <Route exact path="/signUp" component={SignUp}/>
      <Route exact path="/upload" component={Upload}/> 
      </>
  );
}

export default App;
