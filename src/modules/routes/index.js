import { Routes, Route, Link } from "react-router-dom";
import Content from '../content/index.js'
// import About from '../about/index.js'
function RoutesList(){
    return (
        <Routes>
            <Route path="/" element={<Content/>}></Route>
            {/* <Route path="/about" element={<About/>}></Route> */}
        </Routes>
    )
}

export default RoutesList;