import React, { Component } from 'react';
import ReactDOM from 'react-dom/client'

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

const Header = () => {
    return (
        <div className= "header">
            <div className = "logo-container">
                <img className = "logo" src ="https://th.bing.com/th/id/OIP.klm69DJb5MssBNAU6X480QAAAA?rs=1&pid=ImgDetMain"/>
                <h3 className = "logo-title">Namaste Gastronomy</h3>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>
                        <img className = "cart" src = "https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-icon-download-in-svg-png-gif-file-formats--online-bag-wayfinding-pack-miscellaneous-icons-1211836.png?f=webp&w=256"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return(
        <div className = "body">
          <div className = "search-container">
             <input/>
             <button>Search</button>
          </div>
          <div className = "res-container">
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/><RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/><RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/>
            <RestuarantCard/><RestuarantCard/>

            
          </div>
        </div>
    )
}

const RestuarantCard = () => {
    return (
        <div className = "res-card">
            <img className = "res-image" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
            <h3 className = "res-name">Meghna Foods</h3>
            <h4 className = "res-cuisine">North Indian, Briyani, Asian</h4>
            <div className = "rating-del-conatainer">
             <h4 className = "res-rating">4.3 ⭐</h4>
             <h4 className = "res-deliveryTime">35 - 40 mins</h4>
            </div>
            <h4 className = "res-place">Central Bangalore</h4>
        </div>
    )
}

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