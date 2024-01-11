import { useEffect, useState } from "react";

const useFetchRestaurant = (setFilterRestaurant) => {
    let [restaurantList , setRestaurantList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

      const fetchData = async () => {
        let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2762702&lng=72.8929&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        response = await response.json();
        const filterData = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("filterData",filterData)
        setRestaurantList(filterData);
        setFilterRestaurant(filterData);
        return;
      };
    return restaurantList;
}

export default useFetchRestaurant;