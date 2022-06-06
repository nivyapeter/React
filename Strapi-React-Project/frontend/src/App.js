import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SiteHeader from "./components/SiteHeader";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Restaurants from "./pages/Restaurants";
import RestaurantsDetails from "./pages/RestaurantsDetails";
function App() {
  return (
    <Router>
       <Navbar />
      <div className="App">
       
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/details/:id" element={<RestaurantsDetails />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
