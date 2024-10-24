import React, { useState, useEffect } from 'react';
import data from '../assets/matthew.json';
import Bible from './Bible';
import '../styling/GospelDisplay.css';

function Gospel_of_Matthew() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="scripture">
          <h2>The Gospel of Matthew</h2>
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

export default Gospel_of_Matthew;