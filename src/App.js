import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Welcome to the Finance Dashboard</p>
      </main>
    </div>
  );
}

export default App;
