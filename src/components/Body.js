import RestuarantCard from "./RestuarantCard";
import {resList} from "../utlis/mockData";

const Body = () => {
   //Normal js variable
   let restaurantList = resList;
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
                        restaurantList = restaurantList.filter(res => res.info.avgRating > 4.1);
                        console.log(restaurantList)
                      }}
                    >Top Rated Restuarants</button>
                  </li>
                  <li>
                   <button>Fast Delivery</button>
                  </li>
                  <li>
                   <button>New On Board</button>
                  </li>
                  <li>
                   <button>Offers</button>
                  </li>
                  <li>
                   <button>Less than Rs300</button>
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