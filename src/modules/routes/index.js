import { Routes, Route, Link } from "react-router-dom";
import Content from '../content/index.js'
<<<<<<< HEAD
import Content from '../content/about/index.js'
=======
// import About from '../about/index.js'
>>>>>>> 18dde6f54ec43fcf5709bb26b28577d2be28383c
function RoutesList(){
    return (
        <Routes>
            <Route path="/" element={<Content/>}></Route>
<<<<<<< HEAD
            <Route path="/about" element={<Content/>}></Route>
=======
            {/* <Route path="/about" element={<About/>}></Route> */}
>>>>>>> 18dde6f54ec43fcf5709bb26b28577d2be28383c
        </Routes>
    )
}

export default RoutesList;y