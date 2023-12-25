import RestarauntList from "./RestarauntList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Whenever state variable update , react triggers a reconciliation cycle ( re-render component )
  let [initialRestList, setInitialRestList] = useState([]);
  let [filterRestaurant, setFilterRestaurant] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const fetchData = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2762702&lng=72.8929&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    response = await response.json();
    setInitialRestList(
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ); //optional chaining
    {
      console.log(
        "liveData",
        response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  };

  return filterRestaurant && filterRestaurant.length === 0 ? ( //conditonal rendering
    <Shimmer />
  ) : (
    <div className="search-container">
      {/* Input box */}
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
          const result = initialRestList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilterRestaurant(result);
        }}
      >
        Search
      </button>

      <button
        onClick={() => {
          filterRestaurant = initialRestList.filter(
            (ele) => ele.info.avgRating > 4.2
          );
          setFilterRestaurant(filterRestaurant || []);
        }}
      >
        Show Highest Rated Restaraunt
      </button>

      <RestarauntList mockData={filterRestaurant}></RestarauntList>
    </div>
  );
};

export default Body;
