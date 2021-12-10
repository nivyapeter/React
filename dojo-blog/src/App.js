// import logo from './logo.svg';
// import './index.css';
import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  // let title = 'Welcome to the blog';
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <h1>{title}</h1> */}
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route path="/create">
           <Create />
         </Route>
         <Route path="/blogs/:id">
           <BlogDetails />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;