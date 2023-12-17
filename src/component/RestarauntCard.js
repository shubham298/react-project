
import { CDN_URL } from '../utils/constant'
import { mockData } from '../utils/mockData'

const RestarauntCard = () => (
    <>
        <div className='card'>
            {mockData.map(element => {
                return <>
                    <div className='card-item'>
                        <img src={CDN_URL + element?.info?.cloudinaryImageId} style={{ width: "200px", height: '200px' }}></img>
                        <div>{element.info.name}</div>
                        <div>{element.info.cuisines}</div>
                        <div>{element.info.avgRating}</div>
                    </div>
                </>
            })}
        </div>
    </>
)

export default RestarauntCard