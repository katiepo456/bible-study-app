import React from 'react';

  function VerseSidebar({chapter}) {
    return (
      <nav>
        <h3>Verses</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {chapter.map((verse, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <a href={`#Verse-${verse}`} style={{ textDecoration: 'none', color: 'blue' }}>
                Verse {verse}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default VerseSidebar;