import React, { useState, useEffect } from 'react';
import data from '../assets/johnTest.json';
import BibleCompanion from './BibleCompanion';
import '../styling/GospelDisplay.css';

function Chapter({chapterData}) {
  const {chapter} = chapterData[0];

  return(
    <div style={{ paddingTop: '5px' }}>
      <h3>{`Chapter ${chapter}`}</h3>
        {chapterData.map((verse, index) => (
          <div key={index} style={{marginBottom: '5px'}}>
            <p>
              <strong>{`${verse.verse} `}</strong>{verse.text}
            </p>
          </div>
        ))}
    </div>
  );
}

function Gospel_of_John_Test() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    return (
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="scripture">
          <h2>The Gospel of John</h2>
            {users.map((group, index) => (
              <Chapter key={index} chapterData={group.group} />
            ))} 
        </div>
        <div className="companion">
          <BibleCompanion />
        </div>
      </div>
    )
}

export default Gospel_of_John_Test;