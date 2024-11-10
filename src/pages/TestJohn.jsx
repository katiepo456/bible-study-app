import React, { useState, useEffect } from 'react';
import data from '../assets/johnTest.json';
import BibleCompanion from './BibleCompanion';
import '../styling/GospelDisplay.css';

function Chapter({chapterData}) {
  const {chapter} = chapterData[0];

  return(
    <div id={`Chapter-${chapter}`} style={{ paddingTop: '5px' }}>
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


function Sidebar({chapters}) {
  return (
    <nav style={{ position: 'fixed', width: '200px', padding: '20px', borderRight: '1px solid #ddd' }}>
      <h3>Chapters</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {chapters.map((chapter, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a href={`#Chapter-${chapter}`} style={{ textDecoration: 'none', color: 'blue' }}>
              Chapter {chapter}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


function Navigation({items, chapterNumber}) {
  function renderItems() {
    return items.map((item) => {
      const activeClass = chapterNumber === item.chapter
        ? 'navigation-list__item--active'
        : '';
    return (
      <li
        key={item.chapter}
        id={item.chapter}
        className={`navigation-list__item ${activeClass}`}>{item.chapter}</li>
    );
    });
  }
  return (
    <ul className="navigation-list">{renderItems()}</ul>
  );
}


function Gospel_of_John_Test() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers(data); 
    }, []);
  
    // const chapters = data.group.slice(0,5);
    const chapters = data.map((group) => group.group[0].chapter);
    return (
      <>
        
        <div className="container" style={{ paddingTop: '50px' }}>
          <div style={{display: 'flex'}}>
            <Sidebar chapters={chapters} />
          </div>
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
      </>
    )
}

export default Gospel_of_John_Test;