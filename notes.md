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