import React from 'react';

function ChapterSidebar({chapters}) {
    return (
      <nav>
        <p>CHAPTERS</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {chapters.map((chapter, index) => (
            <li key={index} style={{ marginBottom: '1px' }}>
              <a href={`#Chapter-${chapter}`} style={{ textDecoration: 'none', color: 'blue' }}>
                {chapter}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default ChapterSidebar;