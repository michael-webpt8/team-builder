import React, { useState } from 'react';

import './App.css';

function App() {
  const[team, setTeam] = useState([
    {
      name: 'Mikey',
      email: 'mikeyjhavoc@gmail.com',
      role: 'Backend Dev'
    },
    {
      name: 'Marc',
      email: 'Markymarc@gmail.com',
      role: 'Database Admin',
    },
    {
      name: 'Jacob',
      email: 'cupcakeJake@gmail.com',
      role: 'Front End Dev'
    }
  ])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
