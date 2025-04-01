import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';

// *Header
//  - Logo Component
//  - Navigation link Component
// * Body
//  - Search Component
//  -Restuarent Card Container
//  -Restuarent Card Component
//    1. Image
//    2. Name
//    3. Price
//    4. Rating
// *Footer
//   - Copyright Component
//   - Address Component
//   - Links  Component 

const AppLayout = () => {
    return (
        <div className ="app">
          <Header/>
          <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);