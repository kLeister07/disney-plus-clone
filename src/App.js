import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import Home from './components/Home';
import './App.css';
import Details from './components/Details';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
       <Header />
         <Switch>
           <Route path="/Login">
             <Login />
           </Route>
           <Route path="/details">
            <Details />
           </Route>
           <Route path="/">
            <Home />
           </Route>
          </Switch>


      </Router>


      
    </div>
  );
}

export default App;
