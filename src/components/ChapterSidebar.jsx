import React from 'react';

function ChapterSidebar({chapters}) {
    return (
      <nav classname="chapter-sidebar">
        <ul style={{ listStyleType: 'none'}}>
          {chapters.map((chapter, index) => (
            <li key={index}>
              <a href={`#Chapter-${chapter}`}>
                {chapter}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default ChapterSidebar;