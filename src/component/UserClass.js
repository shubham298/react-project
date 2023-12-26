import react from "react"

//Class Component

class UserClass extends react.Component {

    constructor(props) {
        // 🔴 Can’t use `this` yet
        super(props)  // crucial for proper inheritance and props handling in React class components.
        console.log("after before super", props)
        console.log(this.props.name, "Child constructor")
        // state variable
        this.state = {
            count: 0,
            userInfo: {}
        }

    }

    render() {
        //const {name} = this.props
        const { count } = this.state
        const { name, url, avatar_url } = this.state.userInfo;
        console.log(name, "Child render")
        return (
            <div className="user-card">
                <h1>{name}</h1>
                <img src={avatar_url}></img>
                <h1>Count - {count}</h1>
                <button onClick={() => {

                    //updating state
                    this.setState({
                        count: this.state.count + 1 // inside this.state only this portion of object will get updated.
                    })

                }}>Increment Count</button>
                <h3>Name - shubham</h3>
                <h3>Phone - 7619671023</h3>
                <h3>Twitter - @shubham466</h3>
            </div>
        )
    }

    async componentDidMount() {
        //Used to make API call
        console.log(this.props.name, "Child componentDidMount")
        let data = await fetch("https://api.github.com/users/shubham298")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
    }
    
    componentDidUpdate(){
        //After the initial render
        //After the component's state has changed 
        //After the component's props have changed
        console.log("child componentDidUpdate")
    }

    componentWillUnmount() {
        // user visit different page
        console.log(this.props.name, "Child componentWillUnmount")
    }
}

export default UserClass;