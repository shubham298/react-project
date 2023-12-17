import RestarauntList from "./RestarauntList"
import { useState } from "react"
import { mockData } from '../utils/mockData'

const Body = () => {
  let [filterRestaurant, setFilterRestaurant] = useState(mockData)
  return (
    <div>
      <button onClick={() => {
        filterRestaurant = filterRestaurant.filter(ele => ele.info.avgRating > 4.5)
        setFilterRestaurant(filterRestaurant)
      }}>Show Highest Rated Restaraunt</button>

      <RestarauntList mockData={filterRestaurant} ></RestarauntList>
    </div>
  )
}

export default Body
