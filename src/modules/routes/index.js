import { Routes, Route, Link } from "react-router-dom";
import Content from '../content/index.js'
import About from '../content/about/index.js'
import Contact from '../content/contact/index.js'
function RoutesList(){
    return (
        <Routes>
            {/* <Route path="/" element={<Content/>}></Route> */}
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
    )
}

export default RoutesList;