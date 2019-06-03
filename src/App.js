import React from 'react';
import './App.css';
import { Link, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
    <div className="App">
      <header className="App-header">
      Shelfie
        <Link>Dashboard</Link>
        <Link>Add Inventory</Link>
      </header>
    </div>
    </HashRouter>
  );
}

export default App;
