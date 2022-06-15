import React from 'react';
import Header from './components/Header';
import { Counter } from './features/counter/Counter';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
       <Home />
    </div>
  );
}

export default App;
