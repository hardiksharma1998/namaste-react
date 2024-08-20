import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    
    const {
      cloudinaryImageId,
      name,
      avgRating,
      costForTwo,
      deliveryTime,
      cuisines,
    } = resData?.data;
    
          return (
            <div className="res-card" style= {{backgroundColor: "#f0f0f0" }}>
            <img 
                className="res-logo"
                alt="res-logo"
                src=
                {
                CDN_URL + cloudinaryImageId
                }
                />
                <h3>{name}</h3>
                <h4>{cuisines}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
            </div>
        )
    }

export default RestaurantCard;