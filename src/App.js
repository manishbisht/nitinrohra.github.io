import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import Work from "./pages/work";
import Home from "./pages/home";

const App = () => (
    <HashRouter>
        <Route exact path="/work" component={Work} />
        <Route exact path="/" component={Home} />
    </HashRouter>
);

export default App;
