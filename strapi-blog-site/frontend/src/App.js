import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../../frontend/src/NavBar";
import Document from "./pages/Document";
import About from "./pages/About";
import Home from "./pages/Home";
import DocumentDetails from "./pages/DocumentDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/document" element={<Document />} />
          {/* <Route path="/linkdn" element={() => { 
     window.location.replace( 'https://www.linkedin.com/in/nivya-k-peter-074131a2/'); 
}} /> */}
          <Route path="/details/:id" element={<DocumentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
