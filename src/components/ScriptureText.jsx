import React from 'react';

function ScriptureText({chapterData}) {
  const {chapter} = chapterData[0];

  return(
    <div id={`Chapter-${chapter}`} style={{ paddingTop: '5px' }}>
      <h2>{`CHAPTER ${chapter}`}</h2>
        {chapterData.map((verse, index) => (
          <div className="verses" key={index} style={{marginBottom: '5px'}}>
            <p>
              <strong>{`${verse.verse} `}</strong>{verse.text}
            </p>
          </div>
        ))}
      <hr></hr>
    </div>
  );
}

export default ScriptureText;