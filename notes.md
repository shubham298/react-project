DOM (Document Object Model)

=>  Document Object Model is an API that represents and interacts with HTML or XML documents.

When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM).

=> DOM is basically the representation of the same HTML document but in a different format with the use of objects.
 
 Javascript interprets DOM easily i.e javascript can not understand the tags(<h1>H</h1>) in HTML document but can understand object h1 in DOM. 
  
 Now, Javascript can access each of the objects (h1, p, etc) by using different functions.

-> With DOM, we can easily access and manipulate tags, IDs, classes, Attributes, or Elements of HTML using commands or methods provided by the Document object.


1. async vs defer 

-> They are used as attritube inside script tag.

-> Both async and defer have one common thing: downloading of such scripts doesn’t block page rendering.
 So the user can read page content and get acquainted with the page immediately.

html parsing =  ------


1. script 

  ------------                    -------------
              fetching  execution 



2. async

-> html parsing and script fetching is done parallely and during execution time html parsing is halt

  ------------------           --------------------
        fetching     execution 

-> order of execution is not maintain by async

-> It is used to load independent scripts like counters or ads

-> which loads first run first 

3. defer

-> html parsing and script fetching is done parallely but execution is done once parsing is completed

  ---------------------------------- 
            fetching                  execution


-> Used when relative order of execution is important
-> It is used to load dependent script



--------------------Session 2-----------------------------
PRODUCTION READYINESS - We need to buldling , minification , Compatibllity , 


1. package-lock.json - it will tell us what version production env is using
                     - lock the version keep the snapshots
                     - never keep it in git-ignore XD

        - integrity -> 
        - resolved  -> 

2. parcel -  npx parcel entry point   -  npx - execute using npm

             npx parcel index.html

 
  - HMR - Hot module Reload
      -File watcher algorithm (written in c++)
  - Bundler - bundle all the helpful code and give to us
  - Minification - .parcel-cache/dist
  - Cleaning our code
  - Super fast build algorithm
  - Image optimization - Images are heavy thing to load - parcel take care for that
  - Caching while development
  - Compression , Optimization - rename our code 
  - Compatible to older version of browser
  - HTTPS on development
  - PORT NUMBER
  - Consistent Hashing Algorithm - for caching
  - ZERO Config
  - Tree shaking (remove unwanted code)

  * .parcel-cache need to add in .git-ignore ( anything which can be generated in server will be push to git-ignore)

packages are minister XD , parcel is Amit shah , react - Narendra Modi





Interview QS

Transitive dependency - one package has its own dependency and those package will have their dependency



-------------------------------------------------Session 3-----------------------------------------------------

1) If we have children then key should be used inside props

-> Because it will help react to inject only that key and it doesn't have to rerender everything

render -> updating something in the DOM

   
<!-- React.createElement => Object => html(DOM) -->

2) JSX (Javascript XML Notation)
  -> Built by facebook developer
  -> html like syntax ( it is not html)

    Babel -> It is a library -> javascript compiler -> Babel is OP

      read one code  [compiler]   return another code

           Babel
    JSX  ========> React.createElement => Object => html(DOM)


    -> JSX Expression example:- const createElement = <h1>Hellow world</h1>


<!-- Super Powers of JSX -->

1. 


3) React Component

-> Functional Based Component (NEW)
-> Class based Component (OLD)

* Functional Based Component

  -> Is is normal function which return JSX
  -> Name of component start with capital letter (not mandatory) => HeaderComponent
  -> one line then ending with semi colon (;)
  -> multi line ending with bracket ()

  -> render time syntax :  root.render(<HeaderComponent />)

  -> Suppose if we want to use react element inside component 

      {heading}

  -> {console.log('ANY JS CODE')}


  * Composing component

   -> passing component inside component

SESSION 4


1. React.Fragment -> use in jsx to hide parent tag because only one Parent tag is madatory in JSX and suppose it is div then jsx used somewhere will have duplicate div

  const JSX = <div><h1>heading1</h1><h2>heading2</h2></div>

  <div>{JSX}</div>


  Inscpet element browser we will see div inside div which is extra

  So we will use React.Fragment to hide JSX div

  syntax: 

    <>
    <div><h1>heading1</h1><h2>heading2</h2></div>
    </>

2. Config Driven UI

3. Reconciliation algorithm react - It basically use diff algorithm and re-render only that part of tree which is changed.

  defination - The algorithm React uses to diff one tree with another to determine which parts need to be changed.

  - google it - React Fiber - React 16 - new Reconsilation engine



Summary 

  1. Planning when creating app
  2. React.Fragment
  3. Card build - hardcoded
  4. card build - one object
  5. card build - real life data
  6. config driven UI
  7. Passing Props
  8. Reconciliation - Virtual Dom (Representation of DOM) - why key is important for Reconciliation



hooks => nomral js utility functions

two imp hooks  => useState , useEffect

1) useState => Local state Variable   (gives us superpower variable )
        *** => Whenever state variable update , react triggers a reconciliation cycle ( re-render component ) ***

        reconciliation (React Fiber) -> finding difference between two virtual dom ( previous and new ) and then update only that element which is getting changed

          Behind the scene
          virtual dom is basically object , so algo is finding difference between two objects and it is updating onlt the thing getting changed.

          whenever setFunction is called , it will re-render component
            example : suppose search button present in body component and button is bind to onchange and its value is bind to localstate
            During onchange i will update localstate using setStateFunc that time whenver new value is added by user that time whole body component will be re-render but only the input field will get changed since that is dynamically getting changed.

          React knows only input is getting changed so it will only updating input field during re-rendering.

          *** In above suprising part is DOM Manuplation ***

          DOM Manuplation is very expensive but react is handling it so efficently using reconciliation

         => its sync data layer and ui layer (component) i,e whenever state variable changes react will re render the component
         => DOM Manuplation super fast
         => scope is within component

======= Why react is fast ? React is good in DOM Manuplation ^

Ep:06 : Part 3

2) useEffect hook       

  ->  hook is normal js utility function
  *** ->  useEffect is called onces page is render ***

UI can fetch data in two ways 

  1) UI -> API call (wait for 500ms) -> render
  2) UI -> render -> API call -> rerender


* In react we should always follow 2nd approch 
* React has best re rendering mechansim , so we should not take any tension of re-rendering
* 2nd approch gives Better UX 

  Interview qs: Why we make api call in last ?

* Quickly render(Load) the component ( It will make React faster) and then do api call it once new data is fetch it will again re-render

const fetchData = () => {}

        useEffect(() => {
            fetchData()
            return (){} // clean-up function
        }, [])
        Dependency array 
          // no array -> it will executes mutiple time (infinty)
          // empty array -> it will execute only once after render 
          // array contains state variable -> it will execute when state is updated.

. It has 2 arguments , 1 callback func , 2nd dependency array

. useEffect returns undefined or clean-up function
    clean-up function is useful 
        
        .Canceling Timeouts and Intervals:
        .Removing Event Listeners:
        .Unsubscribing from WebSockets or Other Subscriptions

  snippet
    
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("clicking")
        }, 1000) // Async call and this will execute every 1 sec , this has to be clean up during Unmount phase
    }

    componentWillUnmount() { // user visit different page
        clearInterval(this.timer) //Important , or else timer still get executed every 1 second
        // In functional component, we can clear timer using useEffect hook by using clean-up function.
    }




createHashRouter, createMemoryRouter from React Router docs ?


feature             	createHashRouter	          createMemoryRouter
URL Management	      Uses hash fragments (#)	    In-memory history

Browser History	      Doesn't use it	            Doesn't use it

Use Cases	            Server-side rendering	      Testing, non-browser env

SEO Friendliness	    Less optimal	              Not applicable



For most web applications: Use createBrowserRouter for optimal performance, user experience, and SEO.

For specific cases:
    Use createHashRouter if server-side configuration is not possible or for older browser compatibility.
    
    Use createMemoryRouter for testing and development environments.


ep: 08 : Classy

  - Class Component
  - render() -> return JSX
  - super(props) -> allow dev to use this
  - this.props -> data passed from another component
  - State Variable
  - How to update State Variable

  - Life cycle
  - constructor
  - render
  - componentDidMount -> Here , we use it for do API call.
  - componentDidUpdate -> 
  - componentWillUnMount -> This is called when we switch to different page.


1) Why do we use super(props) in constructor?

-> super(props) is crucial for proper inheritance and props handling in React class components.

-> It is consider as a Standard practise followed for Javascript Class component Implementation.
-> JS doesn't let us use this operator until we call the parent constructor . It tells to call Parent Constructor first (In our example , it is React.Component)

reason 
  Imagine using this before super call was allowed.

snippet:
  Parent class {
    this.props = ""
  }

  function greetingCalls(){
    alert('My name is ' + this.props.name + ', nice to meet you!');
  }

  Child Class extend ParentClass {
    constructor(props){
    greetingCalls() ❌ - break, it will give error , this.name isn’t even defined yet!
    super(props)
    }
   
  }
  
    Child Class extend ParentClass {
    super(props)      -> this will assign props in parent constructor ,
                          like, this.props = props

    greetingCalls() ✅
  }
  



2) Why can't we have the callback function of useEffect async?

  -> useEffect expects a specific return value: It either expects undefined (no cleanup needed) or a function (the cleanup function).

  async functions inherently return promises: This mismatch prevents direct use of async functions as the callback.

  async functions can't return cleanup functions: Async functions must return promises, precluding the ability to return a cleanup function for useEffect. This is crucial for managing side effects like subscriptions or timers.



.Qs: setState Interview QS

  this.state = {
    key : value,
    key2 : value2,
    key3 : value3,
    key4 : value4
  }

  this.setState = {
    key : newValue
  }

  -> setState will only modify portion of the object ( In above example , it will only update newValue for key)

<!-- React Life cycle -->

Interview Question

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

a) How Mounting (Loading) Component in WebPage ?

  Note : whenever Class Component is loaded - its new instance is created and its constructor is called first.

  

  1) Parent and child life cycle
  Mounting Phase
  constructor -> render -> componentDidMount

    Parent constructor
    Parent render
      Child constructor
      Child render
      Child componentDidMount
    Parent componentDidMount


  2) Every Parent component and multiple child component life cycle


    <Render Phase>
      - Parnet Constructor
      - Parent render
        - child1 constructor
        - child1 render 
        - child2 constructor
        - child2 render

    <Commit Phase>
      - child1 componentDidMount
      - child2 componentDidMount
      - Parnet componentDidMount


  I) Render Phase
      1) constructor 
      2) render

    II) commit Phase
          - React will execute all component render Phase in single batch
          
          - React update DOM (Reconcilation is trigger and DOM is updated. , this make react faster.)

          QS) why react is execute render phase in single batch ? 
            .updating DOM is expensive task , it is updated in single batch.
            
                      
      componentDidMount - (React will batch Commit Phase )

      

3) Life cycle

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

<!-- Mounting -->

  . Constructor(dummy)          // Render Phase
  . render(dummy)
  
  . <HTML>  (dummy)             // Commit Phase
  . componentDidMount          
      <API Call>
      

<!-- Update -->
  render( api data )            // Render Phase
  <this.setState> 
  
  <HTML>(new api data)          // Commit Phase
  componetDidUpdate            

<!-- UnMount -->
  componentWillUnMount (if user visit different page)



Episode 9 : Write code in better and clean way , Custom Hook

Ep9 - part 1 - 4 : Custom Hook (also refer hardcopy notes)

  .start with name : "use"
  .it is custom (utility function) add it in utils folder

  How to start writing custom hook  ?
    
    first decide : contract of the function : what will be the input and output ?


  Part 5: Lazy loading
  
    Very important concept for large scale application
    
    Also called as :-

    Lazy loading
    Dynamic bundling
    chunking
    on demand loading
    dynamic import

  Usage: 

  lazy  -> import from react library

  1) import component using lazy function

      const About = lazy(() => import("./component/About"));

  2) Wrap lazy component with <Suspense >

