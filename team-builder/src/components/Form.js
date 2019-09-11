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
          <UserWrapper>
                <UserLabel htmlFor="user-name">Name:</UserLabel>
                <input 
                    type="text" 
                    id="user-name" 
                    name="name" 
                    onChange={handleChange} 
                    value={newTeammate.name}
                    placeholder="Name" 
                    required
                />
          </UserWrapper>
          <EmailWrapper>
            <EmailLabel htmlFor="user-email">Email:</EmailLabel>
            <input 
                type="email" 
                id="user-email"
                name="email" 
                onChange={handleChange} 
                value={newTeammate.email} 
                placeholder="Email"
                required
            />
          </EmailWrapper>
          <RoleWrapper>
            <RoleLabel htmlFor="user-role">Role:</RoleLabel>
            <input 
                type="text" 
                id="user-role" 
                name="role" 
                onChange={handleChange} 
                value={newTeammate.role} 
                placeholder="Role"
                required
            />
          </RoleWrapper>
            <SubmitButton type="submit">Add User</SubmitButton>
            <ResetButton type="button" onClick={resetForm}>Reset</ResetButton>
                 
          </TeamForm>
        </div>
    );
}
export default Form;

const TeamForm = styled.form`
    margin-top: 20px;
    background-color: skyblue;
    padding: 10px;
`;

const UserWrapper = styled.div`
    margin-bottom: 5px;
`;

const UserLabel = styled.label`
    padding-right: 5px;
`;

const EmailWrapper = styled.div`
    margin-bottom: 5px;
`;

const EmailLabel = styled.label` 
    padding-right: 8px;
`;

const RoleWrapper = styled.div`
    margin-bottom: 5px;
`;

const RoleLabel = styled.label` 
    padding-right: 13px;
`;

const SubmitButton = styled.button` 
    width: 10%;
    height: 40px;
    border-radius: 5px;

    &:hover {
        background-color: ghostwhite;
        color: skyblue;
    }
`;

const ResetButton = styled.button`
       width: 10%;
    height: 40px;
    border-radius: 5px;

    &:hover {
        background-color: ghostwhite;
        color: skyblue;
    } 
`;
