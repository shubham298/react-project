const React = require('react')
const ReactDOM = require('react-dom/client')
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'


 /*
 Header
  - Navbar
      - logo
      - About us
      - help 
      - Cart
 Body
    -Restaraunt list
      -Restaraunt Card
        -Image
        -Name
        -cusine
        -star
 Footer
 */






  
const AppLayout = () => (
<div>
  <Header></Header>
  <Body></Body>
  <Footer></Footer>
</div>
)





const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout></AppLayout>)
