import React, { useState, useEffect } from 'react';
import data from '../assets/matthew.json';
import BibleCompanion from '../components/BibleCompanion';
import ScriptureText from '../components/ScriptureText';
import ChapterSidebar from '../components/ChapterSidebar';

import '../styling/GospelDisplay.css';

function Gospel_of_Matthew() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data); 
  }, []);

  const chapters = data.map((group) => group.chapter_group[0].chapter);
  return (
    <>
      <div className="container" style={{ paddingTop: '50px' }}>
        <div className="sidebar">
          <ChapterSidebar chapters={chapters} />
        </div>
        <div className="scripture">
          <h2>The Gospel of Matthew</h2>
          {users.map((group, index) => (
            <ScriptureText key={index} chapterData={group.chapter_group} />
          ))}
        </div>
        <div className="companion">
          <BibleCompanion />
        </div>
      </div>
    </>
  );
}

export default Gospel_of_Matthew;