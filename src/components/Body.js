import RestuarantCard from "./RestuarantCard";
import {resList} from "../utlis/mockData";

const Body = () => {
    return(
        <div className = "body">
          <div className = "search-container">
             <input/>
             <button>Search</button>
          </div>
          <div className = "res-container">
             {resList.map((restuarant) => (
                <RestuarantCard 
                resData = {restuarant} 
                key = {restuarant.info.id} />
             ))}
          </div>
        </div>
    )
}

export default Body;