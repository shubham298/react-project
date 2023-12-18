import RestarauntList from "./RestarauntList"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"


const Body = () => {


  
  let [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log("error",error)
    }
  }, [])

  const fetchData = async () => {
    // You can await here
    let response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2762702&lng=72.8929&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    response = await response.json()
    //optional chaining
    setFilterRestaurant(response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    {console.log('liveData', response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)}

  }

  if(filterRestaurant.length === 0){
    //need to add Shimmer UI
    return <Shimmer />
  }

  return (
    <div>
      <button onClick={() => {
        filterRestaurant = filterRestaurant.filter(ele => ele.info.avgRating > 4.2)
        {console.log("rate",filterRestaurant)}
        setFilterRestaurant(filterRestaurant || [])
      }}>Show Highest Rated Restaraunt</button>

      <RestarauntList mockData={filterRestaurant} ></RestarauntList>
    </div>
  )
}

export default Body
