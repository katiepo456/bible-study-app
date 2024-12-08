import React from 'react';

{/* Create side navigation bar to quickly jump to specific chapter in the Gospel */}
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