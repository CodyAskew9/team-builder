import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import FormDetails from './components/FormDetail';
import React, { useState } from 'react';

const teamList = [
  {
      name: 'Viewbot',
      email: 'View.bot@gmail.com',
      role: 'bot'
  },
];

function App() {
  const [formValues, setFormValues] = useState({ name: '', email: '', role: '', monster: false});
  const [teamMember, setTeamMember] = useState(teamList);

  const submit = (e) => {
    e.preventDefault();
        const newTeamMember = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role.trim()
            }
            setTeamMember(teamMember.concat(newTeamMember))
            setFormValues({ name: '', email: '', role: '', monster: false})
    };

  const update = (e) => {
        const { name, value, checked, type } = e.target;
        const realValue = type === 'checkbox' ? checked : value;
        setFormValues({...formValues, [name]: realValue});
    }

  

  return (
    <div className="App">

      <Form 
        formValues={formValues}
        submit={submit}
        change={update}
        teamMember={teamMember}
      />
      <h1> Meet the team! </h1>
      {
        teamMember.map(ea => {
          return (
            <FormDetails key={ea.id} details={ea}/>
          )
        })

      }

    </div>
  );
}

export default App;