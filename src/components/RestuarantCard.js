import {CLOUDINARY_IMAGE_URL} from "../utlis/constants"
const RestuarantCard = (props) => {

    const { info } = props.resData;
    const { name, cloudinaryImageId, cuisines, avgRating, sla, costForTwo, areaName,aggregatedDiscountInfoV3 } = info;
    
    return (
          <div className = "res-card">
            <div className="image-container">
                <img className = "res-image" src = {CLOUDINARY_IMAGE_URL+ cloudinaryImageId}/>
                {aggregatedDiscountInfoV3 && (
                    <div className="price-tag">
                        {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
                    </div>
                )}
            </div>
            <h3 className = "res-name">{name}</h3>
            <p className = "res-cuisine">{cuisines.join(", ")}</p>
            <div className = "rating-del-conatainer">
             <h4 className = "res-rating">⭐ {avgRating}</h4>
             <p className = "res-deliveryTime">{sla.deliveryTime} mintues</p>
            </div>
            <div className = "cost-place-container">
             <p className = "res-costForTwo">{costForTwo}</p>
             <p className = "res-place">{areaName}</p>
            </div>   
        </div>
    )
}

export default RestuarantCard;