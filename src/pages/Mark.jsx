import React, { useState, useEffect } from 'react';
import data from '../assets/mark.json';
import BibleCompanion from './BibleCompanion';
import Chapter from './Chapter';
import Sidebar from './Sidebar';

import '../styling/GospelDisplay.css';

function Gospel_of_Mark() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data); 
  }, []);

  const chapters = data.map((group) => group.chapter_group[0].chapter);
  return (
    <>
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="sidebar">
          <Sidebar chapters={chapters} />
        </div>
        <div className="scripture">
          <h2>The Gospel of Mark</h2>
          {users.map((group, index) => (
            <Chapter key={index} chapterData={group.chapter_group} />
          ))}
        </div>
        <div className="companion">
          <BibleCompanion />
        </div>
      </div>
    </>
  );
}

export default Gospel_of_Mark;