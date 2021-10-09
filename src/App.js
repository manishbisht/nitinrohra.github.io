import { BrowserRouter, Route, Switch } from "react-router-dom";
import Work from "./pages/work";
import Home from "./pages/home";
import WorkDetails from "./pages/work-details";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/work" component={Work} />
            <Route exact path="/:slug" component={WorkDetails} />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default App;
