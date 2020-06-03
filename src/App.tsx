import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message/Message';

function App() {
  return (
    <div className="App">
      <Message name="Dmitry" text="npm start нажал?" time={'14:00'} />
    </div>
  );
}

export default App;
