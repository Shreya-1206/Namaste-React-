import React from 'react';
import ReactDOM from 'react-dom/client'



// React.createElement => converts in react element (Object) => Html element (on reneder)
const heading = React.createElement('h1', {id :"heading"}, 'Hello, world!')


// JSX =>To React.createElement by babel => converts in react element (Object) => Html element (on reneder)       /// multiline jsx
const jsxHeading =( <h1 
    id = "heading" 
    className='head' 
    tabIndex={3}>
        Hello, world 🤩</h1> )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);