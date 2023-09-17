
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import ProfilePage from 'pages/ProfilePage';
import RegisterPage from 'pages/RegisterPage';
import {Switch, Route} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [movies, setMovie] = useState([]);
  
  
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/profile" component={ProfilePage} />
    </Switch>


  );
}

export default App;
