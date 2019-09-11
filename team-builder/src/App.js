import React, { useState } from 'react';
import Team from './components/Team';
import Form from './components/Form';
import './App.css';

function App() {
  const[teammates, setTeammates] = useState([
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
      <Form setTeammates={setTeammates} teammates={teammates} />
      <Team teammates={teammates} />
    </div>
  );
}

export default App;
