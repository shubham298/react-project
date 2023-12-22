
import { CDN_URL } from '../utils/constant'


const RestarauntCard = ({ resData }) => {
    return (
        <>
            <div className='card'>
                <img src={CDN_URL + resData.cloudinaryImageId} style={{ width: "200px", height: '130px' }}></img>
                <div>{resData.name}</div>
                <div>{resData.cuisines.toString()}</div>
                <div>{resData.avgRating}</div>
            </div>
        </>
    )
}

export default RestarauntCard