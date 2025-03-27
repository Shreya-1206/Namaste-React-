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

const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "47439",
      "name": "Leon's - Burgers & Wings (Leon Grill)",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/119c66fd-2da6-476f-a6cf-eb3a997444c2_47439.jpg",
      "locality": "Outer Ring Road",
      "areaName": "Marathahalli",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
      ],
      "avgRating": 4.3,
      "parentId": "371281",
      "avgRatingString": "4.3",
      "totalRatingsString": "62K+",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-03-28 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹89"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.8",
          "ratingCount": "818"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-3861d43d-6b35-4ea5-aec7-7b877307ce4d"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-outer-ring-road-marathahalli-rest47439",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  };
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
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>

            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/> <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>
            <RestuarantCard resData = {resObj}/>

          </div>
        </div>
    )
}

const RestuarantCard = (props) => {
    const {resData} = props;
    console.log(resData);
    return (
        <div className = "res-card">
            <img className = "res-image" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
            <h3 className = "res-name">{resData.info.name}</h3>
            <p className = "res-cuisine">{resData.info.cuisines.join(", ")}</p>
            <div className = "rating-del-conatainer">
             <h4 className = "res-rating">⭐ {resData.info.avgRating}</h4>
             <h4 className = "res-deliveryTime">{resData.info.sla.deliveryTime} mintues</h4>
            </div>
            <h4 className = "res-place">{resData.info.areaName}</h4>
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