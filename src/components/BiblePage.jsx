import React, { useState, useEffect } from 'react';
import data from '../assets/john.json';

function BiblePage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div style={{ paddingTop: '50px' }}>
        {users.map(user => (
          <div key={user.id}>
            <p>{user.verse} {user.text}</p>
          </div>
        ))}
      </div>
    )
}

export default BiblePage;