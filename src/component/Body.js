import RestaurantList from "./RestaurantList";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useFetchRestaurant from "../utils/useFetchRestaurant";
import RestaurantSearch from "./RestaurantSearch";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // Whenever state variable update , react triggers a reconciliation cycle ( re-render component )
  let [filterRestaurant, setFilterRestaurant] = useState([]);
  let restaurantList = useFetchRestaurant(setFilterRestaurant);
  let onlineStatus = useOnlineStatus()
  console.log("onlineStatus",onlineStatus)
  if(onlineStatus === false){
    return <h1>You are offline please check your internet connection!!</h1>
  }

  return filterRestaurant && filterRestaurant.length === 0 ?
    (<Shimmer />) :
    (<>
      <RestaurantSearch restaurantList={restaurantList} filterRestaurant={filterRestaurant} setFilterRestaurant={setFilterRestaurant} />
      <RestaurantList mockData={filterRestaurant}></RestaurantList>
    </>)

};

export default Body;
