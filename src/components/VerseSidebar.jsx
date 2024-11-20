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
    /*function Sidebar({ chapters, onVerseClick }) {
      return (
        <div className="sidebar">
          <h3>Chapters</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {chapters.map((chapter, index) => (
              <li key={index} style={{ marginBottom: '20px' }}>
                <h4>Chapter {chapter.chapter}</h4>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {chapter.verse.map((verse, verseIndex) => (
                    <li key={verseIndex}>
                      <a
                        href={`#verse-${verse.chapter}-${verse.verse}`}
                        onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor link behavior
                          onVerseClick(verse.chapter, verse.verse); // Scroll to the verse
                        }}
                      >
                        Verse {verse.verse}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      );
    }*/

  export default VerseSidebar;