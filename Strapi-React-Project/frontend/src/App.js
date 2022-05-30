import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Restaurants from "./pages/Restaurants";
import ReviewDetails from "./pages/ReviewDetails";
function App() {
  return (
    <Router>
       <Navbar />
      <div className="App">
       
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/datails/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
