import React, { useState, useEffect } from 'react';
import data from '../assets/mark.json';
import BibleCompanion from './BibleCompanion';
import '../styling/GospelDisplay.css';

function Gospel_of_Mark() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="scripture">
          <h2>The Gospel of Mark</h2>
            {users.map(user => (
            <div key={user.id}>
                <p>{user.verse} {user.text}</p>
            </div>
            ))}
        </div>
        <div className="companion">
          <BibleCompanion />
        </div>
      </div>
    )
}

export default Gospel_of_Mark;