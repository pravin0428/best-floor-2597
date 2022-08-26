import {Routes , Route} from "react-router-dom"
import Home from "./Home"
import Login from './Login'
import Makeup from "./Makeup"
import Regiter from "./Regiter"
import Sale from "./Sale"
import Skincare from "./Skincare"
import Foundation from "./Foundation"
function AllRoutes() {
  return (
     <Routes>
        <Route path="/" element={<Home/>} />  
        <Route  path="/login" element={<Login/>} />
        <Route path="/makeup" element={<Makeup/>} />
        <Route path="/sale" element={<Sale/>} />
        <Route path="/skincare" element={<Skincare/>} />
        <Route path="/register" element={<Regiter/>} />
        <Route path="/foundation" element={<Foundation/>} />
     </Routes>
  )
}

export default AllRoutes