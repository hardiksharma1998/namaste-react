import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from 'react';

const Body = () => {

    //local state variable - super powerful variable 
    const [listOfRestaurants, setListOfRestraunt] = useState(resList); 




    return (
        <div className="body"> 
        <div className="filter-btn">
            <button className="filter-btn" onClick={()=> {
                // Filter logic here 
               const filteredList = listOfRestaurants.filter
                (
                    (res) => res.data.avgRating > 4
                );
                setListOfRestraunt(filteredList);
                }}
                >
                Top Rated Restaurants
            </button>
        </div>
        <div className="res-conatainer">
          {
            listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
          }

        </div>
        </div>
    )
}

export default Body;