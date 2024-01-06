import { useState } from "react";

const RestaurantSearch = ({restaurantList , setFilterRestaurant, filterRestaurant}) => {
  let [searchText, setSearchText] = useState("");
    return (
        <div className="search-container">
          {/* Input TextBox */}
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
    
          {/* search button */}
          <button
            onClick={() => {
              const result = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if(result.length){
                setFilterRestaurant(result)
              }
            }}>
            Search
          </button>
    
          <button
            onClick={() => {
              filterRestaurant = restaurantList.filter(
                (ele) => ele.info.avgRating > 4.2
              );
              setFilterRestaurant(filterRestaurant);
            }}>
            Show Highest Rated Restaraunt
          </button>
        </div>
      );
}

export default RestaurantSearch;