import { CDN_URL } from '../utils/constant'

const RestarauntList = ({mockData}) => (
  <div >
    <div className="res-container">
      {mockData?.map(ele => (
         <div className='card'>
         <img src={CDN_URL + ele.info.cloudinaryImageId} style={{ width: "200px", height: '130px' }}></img>
         <div>{ele.info.name}</div>
         <div>{ele.info.cuisines.toString()}</div>
         <div>{ele.info.avgRating}</div>
     </div>
      ))}
    </div>
  </div>
)

export default RestarauntList