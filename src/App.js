import React from 'react';
import './App.css';
import First from './First';

export default function App() {
  return (
    <div>
      Some data:
      <ul>
        {list.map(el => (
            <First id={el.id} text = {el.text}/>
          ))}
      </ul>
    </div>
  );
}
