// import logo from './logo.svg';
// import './index.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createone from './createone';
function App() {
  let title = 'Welcome to the blog';
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
       <Switch>
         <Route exact path = "/">
           <Home />
         </Route>
         <Route path = "/create">
           <Createone />
         </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;