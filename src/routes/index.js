import { Switch} from "react-router-dom";
import Content from 'modules/index.js'
import About from 'modules/about/index.js'
import Contact from 'modules/contact/index.js'
import Route from './route'
function RoutesList(){
    return (
        <Switch>
            <Route path="/" exact component={Content} />
            <Route path="/about"exact component={About} />
            <Route path="/contact-us" exact component={Contact} />
        </Switch>
    )
}

export default RoutesList;