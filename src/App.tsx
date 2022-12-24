import React from 'react';
// import logo from './logo.svg';
import { CounterComponent } from './CounterComponent';
import './App.css';
import { Input } from './Input';

function App() {
  const handler = () => {
    console.log('Кнопка была нажата');
  };
  return (
    <div className="App">
      <CounterComponent title={'Orange'} />
      <CounterComponent title={'Apple'} count={4} />
      <CounterComponent title={'Lemon'} />
      <button onClick={handler}> PUSH ME</button>

      <Input />
    </div>
  );
}

export default App;
