import React, {useState}  from 'react';

function Form(props) {
    const initialTeammate = { user: '', email: '', role: ''};
    const[newTeammate, setNewTammate] = useState(initialTeammate);
    return (
        <div>
            <form>
                <label htmlFor="user-name">Name:</label>
                    <input type="text" id="user-name" />
               
                 
            </form>
        </div>
    );
}
export default Form;