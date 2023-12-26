import { useState } from "react"

//Functional Component
const User = ({name}) => {
    const [count , setCount] = useState(0)
    return (
    <div className="user-card">
       
       {/* Props */}
        <h1>{name}</h1>
         {/* useState */}
        <h1>Count - {count}</h1>
        <h3>Name - shubham</h3>
        <h3>Phone - 7619671023</h3>
        <h3>Twitter - @shubham466</h3>
    </div>
 )
}

export default User;