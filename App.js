import React from 'react';
import ReactDOM from 'react-dom/client'

// JSX =>To React.createElement by babel => converts in react element (Object) => Html element (on reneder)       /// multiline jsx
const jsxHeading =  ( <h1 
    id = "heading" 
    className='head' 
    tabIndex={3}>
        Hello, world 🤩</h1> )


///// React Functional Componenet => Nothing but a function that returns JSX

const Heading = () => {
    return (
     <>
      {jsxHeading} 
      <h1>Welcome to Namaste React 🍄</h1>
     </>
    )
}

/// Here we return in a line rather then using return keyword 
const Heading2 = () => <h1>Welcome to Namaste React without using return keyword </h1>


// wrong way of using JSX
const Heading3 = () => {
   <h1>Welcome to Namaste React without using return keyword </h1>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);