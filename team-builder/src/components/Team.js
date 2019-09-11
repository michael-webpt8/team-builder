import React from 'react';

function Team(props) {
    const { teammates } = props;
    return (
        <div>
            {teammates.map( (teammate, index) => (
                <div key={index}>
                    <h2>{teammate.role}</h2>
                    <p>{teammate.name}</p>
                    <p>{teammate.email}</p>
                </div>
            ))}
        </div>
    );
}
export default Team;