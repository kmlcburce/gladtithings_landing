import { Routes, Route, Link } from "react-router-dom";
import Content from '../content/index.js'
function RoutesList(){
    return (
        <Routes>
            <Route path="/" element={<Content/>}></Route>
        </Routes>
    )
}

export default RoutesList;