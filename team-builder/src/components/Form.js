import React, {useState}  from 'react';
import styled from 'styled-components';

function Form(props) {
    const { setTeammates, teammates } = props;
    const initialTeammate = { name: '', email: '', role: ''};
    const[newTeammate, setNewTeammate] = useState(initialTeammate);


    const handleChange = event => {
      setNewTeammate({...newTeammate, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(!newTeammate.name || !newTeammate.email || !newTeammate.role) {
            alert('Please Fill in Name, Email, and Role')
        } else {
         setTeammates([newTeammate, ...teammates]);

          resetForm();
        }
  
    }

    const resetForm = () => {
        setNewTeammate(initialTeammate);
    }

  
    return (
        <div>
          <TeamForm onSubmit={handleSubmit}> 
            <label htmlFor="user-name">Name:</label>
                <input 
                    type="text" 
                    id="user-name" 
                    name="name" 
                    onChange={handleChange} 
                    value={newTeammate.name}
                    placeholder="Name" 
                    required
                />
                <br />
            <label htmlFor="user-email">Email:</label>
                <input 
                    type="email" 
                    id="user-email"
                    name="email" 
                    onChange={handleChange} 
                    value={newTeammate.email} 
                    placeholder="Email"
                    required
                />
                <br />
            <label htmlFor="user-role">Role:</label>
                <input 
                    type="text" 
                    id="user-role" 
                    name="role" 
                    onChange={handleChange} 
                    value={newTeammate.role} 
                    placeholder="Role"
                    required
                />
                <br />
            <button type="submit">Add User</button>
            <button type="button" onClick={resetForm}>Reset</button>
                 
          </TeamForm>
        </div>
    );
}
export default Form;

const TeamForm = styled.form`
    margin-top: 20px;
`;