import RestaurantList from "./RestaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import RestaurantSearch from "./RestaurantSearch";
const Body = () => {
  // Whenever state variable update , react triggers a reconciliation cycle ( re-render component )
  let [filterRestaurant, setFilterRestaurant] = useState([]);
  let restaurantList = useFetchRestaurant(setFilterRestaurant);

  return filterRestaurant && filterRestaurant.length === 0 ?
    (<Shimmer />) :
    (<>
      <RestaurantSearch restaurantList={restaurantList} filterRestaurant={filterRestaurant} setFilterRestaurant={setFilterRestaurant} />
      <RestaurantList mockData={filterRestaurant}></RestaurantList>
    </>)

};

export default Body;
