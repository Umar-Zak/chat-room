import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Modal } from './components/Modal';

function App() {
  return (
    <Modal handleSubmit={() => console.log({username: "Test"})
    }/>
  );
}

export default App;
