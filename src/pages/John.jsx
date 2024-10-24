import React, { useState, useEffect } from 'react';
import data from '../assets/john.json';
import Bible from './Bible';
import '../styling/GospelDisplay.css';

function Gospel_of_John() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="scripture">
          <h2>The Gospel of John</h2>
            {users.map(user => (
            <div key={user.id}>
                <p>{user.verse} {user.text}</p>
            </div>
            ))}
        </div>
        <div className="companion">
          <Bible />
        </div>
      </div>
    )
}

export default Gospel_of_John;