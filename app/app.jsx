const React = require("react");
const ReactDOM = require("react-dom");
const Route = require("react-router-dom").Route;
const BrowserRouter = require("react-router-dom").BrowserRouter;
const hashHistory = require("react-router-dom").hashHistory;
//require("bootstrap/dist/css/bootstrap.min.css");
require("./style.css");

/* Import Components */
const Header = require("./components/Header");
const MemeGenerator = require("./components/MemeGenerator");

const About = require("./components/About");

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Header} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>,
  document.getElementById("main")
);
