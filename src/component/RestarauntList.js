import RestarauntCard from "./RestarauntCard"

const RestarauntList = ({mockData}) => (
  <div >
    <div className="res-container">
      {mockData?.map(ele => (
        <RestarauntCard key={ele.info.id} resData={ele.info} />
      ))}
    </div>
  </div>
)

export default RestarauntList