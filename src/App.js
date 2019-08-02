import React from 'react';
import './App.css';
import JokesFrame from './JokesFrame'
import { async } from 'q';

function App() {
  
  return (
    <div className="App">
      <div>
        <button onClick={()=>{document.location.reload()}}>Get Jokes</button>
      </div>
     <JokesFrame />
    </div>
  );
}

export default App;
