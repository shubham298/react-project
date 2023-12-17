
import { CDN_URL } from '../utils/constant'


const RestarauntCard = ({ resData }) => {
    return (
        <>
            <div className='card'>
                <img src={CDN_URL + resData.cloudinaryImageId} style={{ width: "200px", height: '200px' }}></img>
                <div>{resData.name}</div>
                <div>{resData.cuisines}</div>
                <div>{resData.avgRating}</div>
            </div>
        </>
    )
}

export default RestarauntCard