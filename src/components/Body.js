import RestuarantCard from "./RestuarantCard";
import {resList, newOnBoard} from "../utlis/mockData";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
  // React State Variable 
  const [restaurantList, setRestaurantList] = useState([]);

   //Normal js variable
   let restaurantListJs = resList;

   // UseEffect () hook
   useEffect(() => {
      console.log("useEffect Hook is called after the firest render");
      fetchApiData();
   }, [])

   
   const fetchApiData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.815885607372415&lng=80.04042651504278&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

      const json = await data.json()
      console.log("Data - ",json)
      

      setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }

   
   if(restaurantList.length === 0){
      return ( <ShimmerUi/> );
   }

    return(
      
        <div className = "body">
          <div className = "search-filter-container">
             <div className ="search">
              <input/>
              <button>Search</button>
             </div>
             <div className = "filters">
               <ul className="list-of-filters">
                  <li>
                   <button
                      onClick={() => {
                        let topRestuarants = resList.filter(res => res.info.avgRating > 4.1);
                        console.log(topRestuarants)
                        setRestaurantList(topRestuarants);
                      }}
                    >Top Rated Restuarants</button>
                  </li>
                  <li>
                   <button
                   onClick={() => {
                     let fastDelivery = resList.filter(res => res.info.sla.deliveryTime <= 25);
                     console.log(fastDelivery)
                     setRestaurantList(fastDelivery);
                   }}
                   >Fast Delivery</button>
                  </li>
                  <li>
                   <button
                     onClick={() => {
                        console.log("New on Board - "+ newOnBoard);
                        setRestaurantList(newOnBoard);
                      }}
                   >New On Board</button>
                  </li>
                  <li>
                   <button
                    onClick={() => {
                     alert("Sorry for the inconvenience, we are currently working on this feature");
                   }}
                   >Offers</button>
                  </li>
                  <li>
                   <button
                    onClick={() => {
                     alert("Sorry for the inconvenience, we are currently working on this feature");
                   }}
                   >Less than Rs300</button>
                  </li>
               </ul>
             </div>
          </div>
          <div className = "res-container">
             {restaurantList.map((restuarant) => (
                <RestuarantCard
                resData = {restuarant} 
                key = {restuarant.info.id} />
             ))}
          </div>
        </div>
    )
}

export default Body;