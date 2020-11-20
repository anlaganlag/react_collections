import React from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Trash from './components/Trash';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import Archive from './components/Archive'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Notes from './components/Notes';

function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Route path='/' exact={true} component={Login}></Route>
      <Route path='/register' exact={true} component={Register}></Route>
      <Route path='/forgot' exact={true} component={Forgot}></Route>
      <Route path='/resetpassword/:token' exact={true} component={Reset}></Route>
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path='/dashboard/notes' component={Notes}></Route>
      <Route path='/dashboard/archived' component={Archive}></Route>
      <Route path='/dashboard/trash' component={Trash}></Route>
      {/* </Switch> */}
    </Router>
  );
}
export default App;
