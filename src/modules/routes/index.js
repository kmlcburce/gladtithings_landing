import { Routes, Route, Link } from "react-router-dom";
import Content from '../content/index.js'
import Content from '../content/about/index.js'
function RoutesList(){
    return (
        <Routes>
            <Route path="/" element={<Content/>}></Route>
            <Route path="/about" element={<Content/>}></Route>
        </Routes>
    )
}

export default RoutesList;y