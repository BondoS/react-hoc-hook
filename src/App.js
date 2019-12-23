import React from 'react';
import './App.css';
import RepositoriesHoc from './components/RepositoriesHoc';
import RepositoriesHook from './components/RepositoriesHook';

function App () {
  return (
    <div className="App">
      <div>
        <h3>Repositories Hoc</h3>
        <RepositoriesHoc />
      </div>
      <div>
        <h3>Repositories Hook</h3>
        <RepositoriesHook />
      </div>
    </div>
  );
}

export default App;
