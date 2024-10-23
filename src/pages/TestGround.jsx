import React, { useState, useEffect } from 'react';
import data from '../assets/john.json';
import Bible from './Bible';
import '../styling/TestGround.css';

function BiblePage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="scripture">
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

export default BiblePage;