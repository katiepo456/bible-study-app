import React from 'react';

function Sidebar({chapters}) {
    return (
      <nav>
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

  export default Sidebar;