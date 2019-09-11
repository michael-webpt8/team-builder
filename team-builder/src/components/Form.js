import React, {useState}  from 'react';

function Form(props) {
    const { setTeammates, teammates } = props;
    const initialTeammate = { name: '', email: '', role: ''};
    const[newTeammate, setNewTeammate] = useState(initialTeammate);


    const handleChange = event => {
      setNewTeammate({...newTeammate, [event.target.name]: event.target.value});
    }

    const handleSubmit = event => {
        event.preventDefault();

        props.setTeammates([newTeammate, ...props.teammates]);
        console.log(teammates);
        resetForm();
    }

    const resetForm = () => {
        setNewTeammate(initialTeammate);
    }

  
    return (
        <div>
          <form onSubmit={handleSubmit}> 
            <label htmlFor="user-name">Name:</label>
                <input type="text" id="user-name" name="name" onChange={handleChange} value={newTeammate.name} />
                <br />
            <label htmlFor="user-email">Email:</label>
                <input type="email" id="user-email" name="email" onChange={handleChange} value={newTeammate.email} />
                <br />
            <label htmlFor="user-role">Role:</label>
                <input type="text" id="user-role" name="role" onChange={handleChange} value={newTeammate.role}  />
                <br />
            <button type="submit">Add User</button>
            <button type="button" onClick={resetForm}>Reset</button>
            

                 
          </form>
        </div>
    );
}
export default Form;