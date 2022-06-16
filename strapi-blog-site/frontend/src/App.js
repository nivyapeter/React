import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../../frontend/src/NavBar"
import Document from "./pages/Document"
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
    <NavBar />
   <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About/>} />
       <Route path="/document" element={<Document/>} />
     </Routes>
   </div>
 </Router>
  );
}

export default App;
