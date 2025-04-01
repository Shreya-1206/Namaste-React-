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

const resList = [
    {
      "info": {
        "id": "448415",
        "name": "Momo Zone - The Momo Company",
        "cloudinaryImageId": "vaqld85fthdbwri54aao",
        "locality": "ACES Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Chinese",
          "Tibetan",
          "Fast Food",
          "Momos"
        ],
        "avgRating": 4.1,
        "parentId": "382343",
        "avgRatingString": "4.1",
        "totalRatingsString": "510",
        "sla": {
          "deliveryTime": 43,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 05:00:00",
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
          "subHeader": "AT ₹134"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/momo-zone-the-momo-company-aces-layout-marathahalli-rest448415",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "23688",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/2f9d5d44-4053-43fa-96d2-53fa8e0d3d81_23688.jpg",
        "locality": "Whitefield",
        "areaName": "Brookefield",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "630",
        "avgRatingString": "4.4",
        "totalRatingsString": "85K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "4.1",
            "ratingCount": "8.2K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/mcdonalds-whitefield-brookefield-rest23688",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "17303",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5fba4a0b-eb15-4c54-8d58-2a5cb562ab8c_17303.JPG",
        "locality": "Thubarahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "39K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 0.3,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "0.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kfc-thubarahalli-marathahalli-rest17303",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "730445",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/1761590d-2377-4274-b4da-08f4b0c91224_730445.JPG",
        "locality": "Mahadevapura",
        "areaName": "Thumbrahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "1.6K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 0.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "0.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹799"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dominos-pizza-mahadevapura-thumbrahalli-rest730445",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "810721",
        "name": "Starbucks Coffee",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/17/7c101298-bfe7-4da7-b491-e203d38f216a_810721.JPG",
        "locality": "Brookefield main road",
        "areaName": "Kundalahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream"
        ],
        "avgRating": 4.3,
        "parentId": "195515",
        "avgRatingString": "4.3",
        "totalRatingsString": "511",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:59:00",
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
          "subHeader": "AT ₹138"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-brookefield-main-road-kundalahalli-rest810721",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "39119",
        "name": "Faasos - Wraps, Rolls & Shawarma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/016e2793-9002-4be1-b8fa-f0da69a61065_39119.JPG",
        "locality": "AECS Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "21809",
        "avgRatingString": "4.2",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
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
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/faasos-wraps-rolls-and-shawarma-aecs-layout-marathahalli-rest39119",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10866",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/a12922f7-3ef7-4df7-921b-ed6e343a234e_10866.jpg",
        "locality": "Munnekolalu Village",
        "areaName": "Marathahalli",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4.1,
        "parentId": "721",
        "avgRatingString": "4.1",
        "totalRatingsString": "29K+",
        "sla": {
          "deliveryTime": 37,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 05:00:00",
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
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/pizza-hut-munnekolalu-village-marathahalli-rest10866",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "692060",
        "name": "BOOM - Sub Style Sandwiches",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/62bc2619-1d5e-458c-a009-403c699bad08_692060.JPG",
        "locality": "Kundalahalli",
        "areaName": "Marathahalli",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Snacks",
          "Indian",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "401169",
        "avgRatingString": "4.3",
        "totalRatingsString": "155",
        "sla": {
          "deliveryTime": 15,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "10-20 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ],
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/boom-sub-style-sandwiches-kundalahalli-marathahalli-rest692060",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "113317",
        "name": "Bakingo",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/963d9e1d-cc07-47f7-ae89-faba36334140_113317.jpg",
        "locality": "Brookefield",
        "areaName": "Bengaluru Urban",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.5,
        "parentId": "3818",
        "avgRatingString": "4.5",
        "totalRatingsString": "13K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 0.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "0.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/bakingo-brookefield-bengaluru-urban-rest113317",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "450664",
        "name": "Chaayos Chai+Snacks=Relax",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_450664.JPG",
        "locality": "Whitefield",
        "areaName": "Whitefield",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Beverages",
          "Chaat",
          "Desserts",
          "Home Food",
          "Italian",
          "Maharashtrian",
          "Snacks",
          "Street Food",
          "Sweets"
        ],
        "avgRating": 4.6,
        "parentId": "281782",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.5K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 02:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "4.2",
            "ratingCount": "734"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-whitefield-rest450664",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "634321",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/6/80a86122-5972-4dbe-8156-7ea0b8185f8c_634321.jpg",
        "locality": "Siddapura",
        "areaName": "Whitefield",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.5,
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "4.3K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 00:00:00",
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
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-siddapura-whitefield-rest634321",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "18772",
        "name": "California Burrito",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/05c0a215-79be-4b04-b543-18d25ba0fcee_18772.jpg",
        "locality": "Bellandur",
        "areaName": "Bellandur",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Mexican",
          "American",
          "Salads",
          "Continental",
          "Keto",
          "Healthy Food",
          "Beverages",
          "Snacks",
          "Desserts",
          "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "1252",
        "avgRatingString": "4.5",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.5,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 00:00:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
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
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "4.1",
            "ratingCount": "1.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/california-burrito-bellandur-rest18772",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "382651",
        "name": "Wendy's Burgers",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/844fffca-dde6-4664-b3e1-1da9bc5b768e_382651.JPG",
        "locality": "Tulasi theater",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Burgers",
          "American",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.3,
        "parentId": "972",
        "avgRatingString": "4.3",
        "totalRatingsString": "6.8K+",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:59:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
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
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹59"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/wendys-burgers-tulasi-theater-marathahalli-rest382651",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "278162",
        "name": "Dindigul Thalappakatti",
        "cloudinaryImageId": "h4omlxjxqfdicbuhcpdy",
        "locality": "Thubarahalli",
        "areaName": "Whitefield",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Biryani",
          "Barbecue",
          "South Indian",
          "Chinese",
          "North Indian"
        ],
        "avgRating": 4.3,
        "parentId": "332",
        "avgRatingString": "4.3",
        "totalRatingsString": "9.8K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/dindigul-thalappakatti-thubarahalli-whitefield-rest278162",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "377396",
        "name": "Chinese Wok",
        "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
        "locality": "Varthur Main Road",
        "areaName": "Whitefield",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Asian",
          "Tibetan",
          "Desserts"
        ],
        "avgRating": 4.1,
        "parentId": "61955",
        "avgRatingString": "4.1",
        "totalRatingsString": "9.1K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 1.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 03:00:00",
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
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/chinese-wok-varthur-main-road-whitefield-rest377396",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "21668",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/484b4aea-389c-49cf-ba5b-52f68a5850dd_21668.JPG",
        "locality": "ITPL Main Road",
        "areaName": "NS Complex",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "sandwich",
          "Salads",
          "wrap",
          "Healthy Food"
        ],
        "avgRating": 4.1,
        "parentId": "2",
        "avgRatingString": "4.1",
        "totalRatingsString": "34K+",
        "sla": {
          "deliveryTime": 16,
          "lastMileTravel": 0.8,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "0.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 03:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/bolt%206.png",
              "description": "bolt!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/bolt%206.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/subway-itpl-main-road-ns-complex-rest21668",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "10896",
        "name": "Taco Bell",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/488c80f0-f478-497e-b228-f998d41c3838_10896.JPG",
        "locality": "Brookfiled Mall",
        "areaName": "Brookefield",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Mexican",
          "Fast Food",
          "Snacks"
        ],
        "avgRating": 4.2,
        "parentId": "1557",
        "avgRatingString": "4.2",
        "totalRatingsString": "34K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 01:00:00",
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
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/taco-bell-brookfiled-mall-brookefield-rest10896",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "48206",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/75b024bf-6eb9-41ee-8293-78509b0075a3_48206.jpg",
        "locality": "AECS Layout",
        "areaName": "Itpl Road",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "4700",
        "avgRatingString": "4.6",
        "totalRatingsString": "16K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-27 23:00:00",
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
          "subHeader": "AT ₹29"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/kanti-sweets-aecs-layout-itpl-road-rest48206",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "621838",
        "name": "The Belgian Waffle Co.",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/188b38e3-7310-4690-84be-f2858aa00e72_621838.JPG",
        "locality": "AECS Layout",
        "areaName": "Marathahalli",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Waffle",
          "Desserts",
          "Ice Cream",
          "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "2233",
        "avgRatingString": "4.6",
        "totalRatingsString": "3.0K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 03:00:00",
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
          "header": "10% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-aecs-layout-marathahalli-rest621838",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "618083",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "d3pgrav1whn3gzcvy5qk",
        "locality": "Outer Ring Road",
        "areaName": "Kadubeesanahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.2,
        "parentId": "4961",
        "avgRatingString": "4.2",
        "totalRatingsString": "4.5K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-03-28 03:00:00",
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
          "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
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
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-256d7538-e5bb-4ee6-ac46-45019d1a6dcc"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-outer-ring-road-kadubeesanahalli-rest618083",
        "type": "WEBLINK"
      }
    }
  ];

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