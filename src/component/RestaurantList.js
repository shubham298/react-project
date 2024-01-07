import { CDN_URL } from '../utils/constant'
import { Link } from 'react-router-dom'
const RestaurantList = ({mockData}) => (
  <div >
    <div className="res-container">
      {mockData?.map(ele => (
        <Link key={ele.info.id} to={`/restaurant/${ele.info.id}/${ele.info.name}`}><div className='card'>
        <img src={CDN_URL + ele.info.cloudinaryImageId} style={{ width: "200px", height: '130px' }}></img>
        <div>{ele.info.name}</div>
        <div>{ele.info.cuisines.toString()}</div>
        <div>{ele.info.avgRating}</div>
    </div>
    </Link>  
      ))}
    </div>
  </div>
)

export default RestaurantList