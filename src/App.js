import { HashRouter, Route } from "react-router-dom";
import Work from "./pages/work";
import Home from "./pages/home";
import Social from "./components/social";

const App = () => (
    <HashRouter>
        <Route exact path="/work" component={Work} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Social} />
    </HashRouter>
);

export default App;
