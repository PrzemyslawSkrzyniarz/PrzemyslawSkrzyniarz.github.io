import React from 'react';

const Heading = (props) => {
    // console.log(props);
    // zmienna użyta zamiast this, bo to jest funkcja a nie klasa
    return(
        <header>
            <h1>{props.text}</h1>
            <h2>{props.textSubheading }</h2>
        </header>
    
    );
}

export default Heading;

