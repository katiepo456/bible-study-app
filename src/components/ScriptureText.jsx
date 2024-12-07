import React from 'react';

function ScriptureText({chapterData}) {
  const {chapter} = chapterData[0];

  return(
    <div id={`Chapter-${chapter}`} style={{ paddingTop: '5px' }}>
      <hr></hr>
      <h2>{`CHAPTER ${chapter}`}</h2>
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

export default ScriptureText;