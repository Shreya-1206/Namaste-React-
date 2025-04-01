import RestuarantCard from "./RestuarantCard";
import {resList, newOnBoard} from "../utlis/mockData";
import { useState } from "react";

const Body = () => {
  // React State Variable 
  const [restaurantList, setRestaurantList] = useState(resList);

   //Normal js variable
   let restaurantListJs = resList;
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
                        let topRestuarants = restaurantList.filter(res => res.info.avgRating > 4.1);
                        console.log(topRestuarants)
                        setRestaurantList(topRestuarants);
                      }}
                    >Top Rated Restuarants</button>
                  </li>
                  <li>
                   <button
                   onClick={() => {
                     let fastDelivery = restaurantList.filter(res => res.info.sla.deliveryTime <= 25);
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