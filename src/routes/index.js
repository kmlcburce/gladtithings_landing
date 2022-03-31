import { Switch} from "react-router-dom";
import Content from '../content/index.js'
import About from '../content/about/index.js'
import Contact from '../content/contact/index.js'
import Route from './route'
function RoutesList(){
    return (
        <Switch>
            <Route path="/" exact component={Content}></Route>
            <Route path="/about"exact component={About}></Route>
            <Route path="/contact" exact component={Contact}></Route>
        </Switch>
    )
}

export default RoutesList;