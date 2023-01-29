const React = require('react')
const ReactDOM = require('react-dom/client')

//React.createElement(type,{props},children); 


{/* <div>
  <h1></h1>
  <h2></h2>
</div> */}

//Assignment 1

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//     key: "main"
//   },[React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "head1"
//     },
//     "Heading 1"
//   ), React.createElement(
//     "h2",
//     {
//       id: "title",
//       key: "head2"
//     },
//     "Heading 2"
//   )]
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));


// //passing a react element inside the root
// root.render(container);

//Assignment 2 - Using JSX

// const container = <div class="title" key="main"><h1>Heading 1</h1><h2>Heading 2</h2></div>


// const root = ReactDOM.createRoot(document.getElementById("root"));


// //passing a react element inside the root
// root.render(container);

//Assignment 3 - Using functional component

// const heading1 = <h1>Heading 1</h1>
// const heading2 = <h2>Heading 2</h2>

// const TitleComponent = () => (
//   <div className="title" key="main">{heading1}{heading2}</div>
// )

// const root = ReactDOM.createRoot(document.getElementById("root"));


// //passing a react element inside the root
// root.render(<TitleComponent></TitleComponent>);


// Assignment- 4




const HeaderComponent = () => (

<div className="flex-container">
  <div id="logo">
    <img src={require('./images/logo.png')}></img>
  </div>
  <div id="bar">
    Search Bar
  </div>
  <div id="user">
    <img src={require('./images/user.png')}></img>
  </div>

</div>


)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeaderComponent></HeaderComponent>)
