import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const wrapperStyles = {
    fontFamily: 'sans-serif',
    backgroundColor: '#000',
    maxWidth: 600,
    textAlign: 'center',
    margin: '20px auto',
    padding: 30,
    color: '#fff'
};

const infoStyles = {
    color: '#999'
};

const uuidStyles = {
    fontSize: 30
};

const buttonStyles = {
    padding: '10px 15px',
    cursor: 'pointer'
};

function App() {
    const [ uuid, setUuid ] = useState(uuidv4());

    return (
        <div style={wrapperStyles}>
            <p style={infoStyles}>Your version 4 UUID:</p>
            <p style={uuidStyles}>{uuid}</p>
            <button style={buttonStyles} onClick={() => setUuid(uuidv4())}>Generate</button>
        </div>
    );
}

export default App;
