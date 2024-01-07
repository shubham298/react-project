import UserClass from "./UserClass";
import {Component} from "react"
// const About = () => {
//     return (
//         <div>
//             <h1>About Page</h1>
//             {/* <User name={"Props Function"}/> */}
//             <UserClass name={"Props class"} />
//         </div>
//     )
// }

class About extends Component{

    constructor(props){
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
        // this.timer = setInterval(()=>{
        //     console.log("parent clicking")
        // }, 1000) // Async call and this will execute every 1 sec , this has to be clean up during Unmount phase
    }

    componentDidUpdate(){
        console.log("Parent componentDidUpdate")
    }
    componentWillUnmount() {
        // user visit different page
        clearInterval(this.timer) //Important , or else timer will get executed
        // In functional component we can clear timer using useEffect -> using clean-up function

        console.log("Child componentWillUnmount")
    }

    render(){
        console.log("Parent render")
        return (
            <div>
                <h1>About Page</h1>
                <UserClass name={"first"} />
                <UserClass name={"second"} />
            </div>
        )
    }
}


export default About;